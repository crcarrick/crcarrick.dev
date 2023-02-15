'use client'

import { renderToStaticMarkup } from 'react-dom/server'

import formatDistance from 'date-fns/formatDistance'
import template from 'lodash.template'
import Image from 'next/image'

import Me from '~/assets/images/me.png'
import { Link } from '~/components/Link'
import siteMetadata from '~/siteMetadata'

const { author, social } = siteMetadata

const bioTemplate = template(author.bio, {
  interpolate: /{{([\s\S]+?)}}/g,
})

export default function Bio() {
  // FIXME: `renderToStaticMarkup` forces me to make this a client component when it doesn't need to be
  const __html = bioTemplate({
    currentJob: renderToStaticMarkup(
      <Link href="https://www.klaviyo.com" type="external">
        Klaviyo
      </Link>
    ),
    experience: formatDistance(new Date('11-01-2015'), new Date()),
    twitter: renderToStaticMarkup(
      <Link href={`https://twitter.com/${social.twitter}`} type="external">
        {social.twitter}
      </Link>
    ),
  })

  return (
    <section className="bg-card mt-xl p-xl gap-lg flex items-start">
      <Image
        alt="bio picture"
        src={Me}
        className="m-w-[100px] w-[100px] rounded"
      />
      <div className="gap-lg flex flex-col">
        <div className="gap-md flex flex-col">
          <h3 className="mb-0">About {author.name}</h3>
          <h4 className="mb-0 opacity-80">
            Software Engineer in {author.location}
          </h4>
        </div>
        <p className="mb-0 text-xs" dangerouslySetInnerHTML={{ __html }} />
      </div>
    </section>
  )
}
