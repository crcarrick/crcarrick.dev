import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'

import { Callout } from '@/components/callout'
import { CodeFigure } from '@/components/code-figure'
import { Video } from '@/components/video'

const mdxComponents = {
  Callout,
  Video,
  figure: CodeFigure,
}

export function MdxContent({ source }: { source: string }) {
  return (
    <MDXRemote
      components={mdxComponents}
      options={{
        mdxOptions: {
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                keepBackground: true,
                theme: 'dracula',
              },
            ],
          ],
        },
      }}
      source={source}
    />
  )
}
