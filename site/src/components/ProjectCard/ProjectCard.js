import React from 'react'

import { getImage } from 'gatsby-plugin-image'

import { Button } from '~/components/Button'
import { Icon } from '~/components/Icon'
import { useCarousel } from '~/hooks/useCarousel'
import { useSize } from '~/hooks/useSize'
import { getProjectReleaseDetails } from '~/utils/api'

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
  const [downloadUrl, setDownloadUrl] = React.useState('')
  const os = React.useMemo(() => getOS(navigator.userAgent), [])

  const image = useCarousel(project.frontmatter.screenshots)
  const size = useSize()

  React.useEffect(() => {
    async function getReleaseDetails() {
      try {
        const details = await getProjectReleaseDetails({ project })
        const asset = details.assets.find((asset) => asset.os === os)

        setDownloadUrl(asset.downloadUrl)
      } catch (err) {
        console.error(err.message)
      }
    }

    getReleaseDetails()
  }, [os, project])

  const handleDownloadClick = React.useCallback(() => {
    const a = document.createElement('a')

    a.href = downloadUrl
    a.click()
  }, [downloadUrl])

  let Title = S.TitleH4
  let Image = (
    <S.IconImage image={getImage(project.frontmatter.icon)} alt={project.frontmatter.description} />
  )

  if (size) {
    Title = S.TitleH3
    Image = <S.Image image={getImage(image)} alt={project.frontmatter.description} />
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
