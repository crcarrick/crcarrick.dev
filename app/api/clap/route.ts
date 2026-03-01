import { NextRequest, NextResponse } from 'next/server'

import { incrementClaps } from '@/lib/db'

const WINDOW_MS = 60_000
const MAX_CLAPS = 20

const hits = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = hits.get(ip)

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }

  entry.count++
  return entry.count > MAX_CLAPS
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'unknown'

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many claps, slow down!' },
        { status: 429 },
      )
    }

    const body = (await request.json()) as { slug?: string }

    if (!body.slug) {
      return NextResponse.json({ error: 'slug is required' }, { status: 400 })
    }

    const claps = await incrementClaps(body.slug)
    return NextResponse.json({ claps })
  } catch {
    return NextResponse.json(
      { error: 'Failed to clap post' },
      { status: 500 },
    )
  }
}
