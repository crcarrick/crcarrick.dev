import { NextRequest, NextResponse } from 'next/server'

import { getProjectReleaseDetails } from '@/lib/github'

export async function GET(request: NextRequest) {
  const repo = request.nextUrl.searchParams.get('repo')

  if (!repo) {
    return NextResponse.json({ error: 'repo is required' }, { status: 400 })
  }

  try {
    const assets = await getProjectReleaseDetails(repo)
    return NextResponse.json({ assets })
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch project release details' },
      { status: 500 },
    )
  }
}
