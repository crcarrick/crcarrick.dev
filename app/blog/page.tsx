import type { Metadata } from 'next'

import { Suspense } from 'react'

import { BlogList } from '@/components/blog-list'
import { getAllPosts } from '@/lib/content'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Blog',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="py-12">
      <h1 className="mb-8 font-heading text-3xl font-bold">Blog</h1>
      <Suspense>
        <BlogList posts={posts} />
      </Suspense>
    </div>
  )
}
