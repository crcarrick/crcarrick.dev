#!/usr/bin/env node

import { existsSync } from 'fs'
import fs from 'fs/promises'
import path from 'path'
import url from 'url'

import chalk from 'chalk'
import { program } from 'commander/esm.mjs'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const getFrontmatter = ({ title, description }) =>
  `
---
title: '${title}'
description: '${description}'
featuredImage: ../../src/assets/images/code__laptop.jpg
featuredIcon: react
author: Chris Carrick
published: 1970-01-01T00:00:00.000Z
tags: ['react', 'javascript', 'typescript']
---
`.trim()

program.version('1.0.0')
program.showHelpAfterError('(add --help for additional information)')

program
  .command('post <file>')
  .description('generate an mdx post file')
  .option('-t, --title <title>', 'frontmatter `title`')
  .option('-d, --description <description>', 'frontmatter `description`')
  .option('-f, --force', 'clobber existing posts with new file')
  .action(
    async (file, { title = '{Post Title}', description = '{Post Description}', force = false }) => {
      const year = new Date().getFullYear().toString()
      const filename = file.replace('.mdx', '')
      const contentPath = path.join(__dirname, '..', 'site', 'content', year)
      const filePath = path.join(contentPath, `${filename}.mdx`)

      try {
        if (force === false && existsSync(filePath))
          throw new Error(
            `file ${chalk.blue(`${filename}.mdx`)} already exists in target directory`
          )
        if (!existsSync(contentPath)) await fs.mkdir(contentPath)

        await fs.writeFile(
          path.join(contentPath, `${filename}.mdx`),
          getFrontmatter({ title, description }),
          'utf-8'
        )

        console.log(
          '✍️ %s - generated post %s in %s',
          chalk.green('Success!'),
          chalk.blue(`${filename}.mdx`),
          chalk.blue(`/site/content/${year}`)
        )

        process.exit(0)
      } catch (err) {
        console.log('😭 %s - %s', chalk.red('Failure!'), err.message)

        process.exit(0)
      }
    }
  )

program.parse(process.argv)
