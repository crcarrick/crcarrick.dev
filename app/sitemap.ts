import type { MetadataRoute } from 'next'

import { siteConfig } from '@/lib/config'
import { getAllPosts, getAllProjects } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    changeFrequency: 'monthly' as const,
    lastModified: new Date(post.frontmatter.published),
    url: `${siteConfig.url}/blog/${post.slug}`,
  }))

  const projects = getAllProjects().map((project) => ({
    changeFrequency: 'monthly' as const,
    lastModified: new Date(project.frontmatter.created),
    url: `${siteConfig.url}/projects/${project.slug}`,
  }))

  return [
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      url: siteConfig.url,
    },
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      url: `${siteConfig.url}/blog`,
    },
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      url: `${siteConfig.url}/projects`,
    },
    ...posts,
    ...projects,
  ]
}
