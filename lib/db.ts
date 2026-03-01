import { createClient } from '@libsql/client'

export const db = createClient({
  authToken: process.env.TURSO_AUTH_TOKEN,
  url: process.env.TURSO_DATABASE_URL ?? 'file:local.db',
})

export async function ensurePostsTable() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS posts (
      slug TEXT PRIMARY KEY,
      claps INTEGER NOT NULL DEFAULT 0
    )
  `)
}

export async function getPostClaps(slug: string): Promise<number> {
  await ensurePostsTable()

  await db.execute({
    args: [slug],
    sql: 'INSERT INTO posts (slug, claps) VALUES (?, 0) ON CONFLICT (slug) DO NOTHING',
  })

  const result = await db.execute({
    args: [slug],
    sql: 'SELECT claps FROM posts WHERE slug = ?',
  })

  return (result.rows[0]?.claps as number) ?? 0
}

export async function incrementClaps(slug: string): Promise<number> {
  await ensurePostsTable()

  await db.execute({
    args: [slug],
    sql: `
      INSERT INTO posts (slug, claps) VALUES (?, 1)
      ON CONFLICT (slug) DO UPDATE SET claps = claps + 1
    `,
  })

  const result = await db.execute({
    args: [slug],
    sql: 'SELECT claps FROM posts WHERE slug = ?',
  })

  return (result.rows[0]?.claps as number) ?? 0
}
