import React from 'react'

import { getImage } from 'gatsby-plugin-image'

import { Button } from '~/components/Button'
import { Icon } from '~/components/Icon'
import { useSize } from '~/hooks/useSize'

import * as S from './ProjectCard.style'

const OS_NAMES = {
  linux: 'Linux',
  macos: 'MacOS',
  windows: 'Windows',
}

const getOS = (userAgent) => {
  const agent = userAgent.toLowerCase()

  if (agent.indexOf('win') !== -1) return 'windows'
  if (agent.indexOf('mac') !== -1) return 'macos'
  if (agent.indexOf('linux') !== -1) return 'linux'
}

export const ProjectCard = ({ project }) => {
  const size = useSize()

  let Title = S.TitleH4
  let Image = (
    <S.IconImage image={getImage(project.frontmatter.icon)} alt={project.frontmatter.description} />
  )

  if (size) {
    Title = S.TitleH3
    Image = (
      <S.Image
        image={getImage(project.frontmatter.screenshots[0])}
        alt={project.frontmatter.description}
      />
    )
  }

  const os = getOS(navigator.userAgent)

  const handleDownloadClick = () => {
    const { linuxLink, macOSLink, windowsLink } = project.frontmatter
    const a = document.createElement('a')

    a.href =
      os === 'linux' ? linuxLink : os === 'macos' ? macOSLink : os === 'windows' ? windowsLink : ''
    a.click()
  }

  return (
    <S.Card>
      <S.Row>
        <S.ImageWrapper>{Image}</S.ImageWrapper>
        <Title>{project.frontmatter.title}</Title>
      </S.Row>
      <S.Row>
        <S.Meta>{project.frontmatter.meta}</S.Meta>
        <S.Description>{project.frontmatter.description}</S.Description>
      </S.Row>
      {project.frontmatter.meta === 'Desktop App' ? (
        <S.Row>
          <S.DownloadButtons>
            <Button onClick={handleDownloadClick}>
              <Icon.Platform type={os} />
              Download for {OS_NAMES[os]}
            </Button>
          </S.DownloadButtons>
        </S.Row>
      ) : // TODO: Add <Link /> to project url if 'Web App'
      null}
    </S.Card>
  )
}
