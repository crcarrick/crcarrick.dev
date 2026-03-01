import { ImageResponse } from 'next/og'

import { siteConfig } from '@/lib/config'
import { getPostBySlug } from '@/lib/content'

export const alt = 'Blog post'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  const title = post?.frontmatter.title ?? 'Blog Post'
  const tags = post?.frontmatter.tags ?? []

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'flex-start',
          background: 'linear-gradient(135deg, #21222a 0%, #30323d 100%)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: '60px 80px',
          width: '100%',
        }}
      >
        <div
          style={{
            color: '#947bd3',
            display: 'flex',
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          {siteConfig.author.name}
        </div>

        <div
          style={{
            color: '#f2f2f2',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>

          {tags.length > 0 && (
            <div style={{ display: 'flex', gap: 12 }}>
              {tags.slice(0, 4).map((tag) => (
                <div
                  key={tag}
                  style={{
                    background: 'rgba(148, 123, 211, 0.2)',
                    borderRadius: 6,
                    color: '#947bd3',
                    fontSize: 18,
                    padding: '6px 16px',
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(242, 242, 242, 0.1)',
            color: 'rgba(242, 242, 242, 0.5)',
            display: 'flex',
            fontSize: 18,
            paddingTop: 20,
            width: '100%',
          }}
        >
          {siteConfig.url.replace('https://', '')}
        </div>
      </div>
    ),
    { ...size },
  )
}
