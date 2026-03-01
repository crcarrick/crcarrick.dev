import { NextRequest, NextResponse } from 'next/server'

import { getPostClaps } from '@/lib/db'

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug')

  if (!slug) {
    return NextResponse.json({ error: 'slug is required' }, { status: 400 })
  }

  try {
    const claps = await getPostClaps(slug)
    return NextResponse.json({ claps })
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 },
    )
  }
}
