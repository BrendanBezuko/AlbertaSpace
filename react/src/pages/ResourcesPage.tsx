import {
  GoabButton,
  GoabContainer,
  GoabGrid,
  GoabIcon,
  GoabLink,
  GoabPageBlock,
  GoabSpacer,
  GoabText,
} from '@abgov/react-components'
import type { GoabIconType } from '@abgov/ui-components-common'
import { useNavigate } from 'react-router-dom'
import { SatireNotice } from '../components/SatireNotice'
import { CONTENT_WIDTH } from '../constants'
import { featuredVideos, resourceLinks } from '../data/resources'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const kindIcon: Record<string, GoabIconType> = {
  video: 'videocam',
  article: 'document-text',
  organization: 'business',
  government: 'library',
}

export function ResourcesPage() {
  const navigate = useNavigate()
  useDocumentTitle('Resources')

  return (
    <section className="section section--resources reveal">
      <GoabPageBlock width={CONTENT_WIDTH}>
        <GoabSpacer vSpacing="2xl" />
        <GoabText tag="h1" size="heading-l" mt="none" mb="xs">
          Real links (not ours)
        </GoabText>
        <SatireNotice />
        <GoabText tag="p" size="body-m" mt="none" mb="m" maxWidth="70ch">
          Public materials about AlbertaSat, UASTARR / STARR, and related campus
          coverage. These organizations are independent. For the fuller campus
          roundup, use Campus scene.
        </GoabText>
        <GoabButton
          type="secondary"
          trailingIcon="arrow-forward"
          mb="xl"
          onClick={() => navigate('/campus')}
        >
          Campus scene
        </GoabButton>

        <div className="icon-heading" style={{ marginBottom: '1rem' }}>
          <GoabIcon type="videocam" size="large" theme="outline" role="presentation" />
          <GoabText tag="h2" size="heading-m" mt="none" mb="none">
            Videos &amp; launch stories
          </GoabText>
        </div>
        <div className="video-list">
          {featuredVideos.map((video) => (
            <GoabContainer
              key={video.id}
              type="non-interactive"
              accent="thin"
              mb="none"
            >
              <div className="video-card">
                {video.youtubeId ? (
                  <div className="video-card__embed">
                    <iframe
                      title={video.title}
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : null}
                <div className="video-card__copy">
                  <GoabText tag="h3" size="heading-s" mt="none" mb="xs">
                    {video.title}
                  </GoabText>
                  <p className="video-card__source">{video.source}</p>
                  <GoabText tag="p" size="body-m" mt="s" mb="s">
                    {video.description}
                  </GoabText>
                  <GoabLink>
                    <a href={video.href} target="_blank" rel="noopener noreferrer">
                      {video.youtubeId ? 'Watch on YouTube' : 'Open resource'}
                    </a>
                  </GoabLink>
                </div>
              </div>
            </GoabContainer>
          ))}
        </div>

        <GoabSpacer vSpacing="2xl" />
        <div className="icon-heading" style={{ marginBottom: '1rem' }}>
          <GoabIcon type="library" size="large" theme="outline" role="presentation" />
          <GoabText tag="h2" size="heading-m" mt="none" mb="none">
            Organizations &amp; reading
          </GoabText>
        </div>
        <GoabGrid gap="l" minChildWidth="280px">
          {resourceLinks.map((resource) => (
            <GoabContainer
              key={resource.id}
              type="non-interactive"
              accent="filled"
              mb="none"
            >
              <div className="icon-heading">
                <GoabIcon
                  type={kindIcon[resource.kind] ?? 'link'}
                  size="medium"
                  theme="outline"
                  role="presentation"
                />
                <GoabText tag="h3" size="heading-s" mt="none" mb="none">
                  {resource.title}
                </GoabText>
              </div>
              <p className="resource-card__meta">
                {resource.source} · {resource.kind}
              </p>
              <GoabText tag="p" size="body-m" mt="s" mb="s">
                {resource.description}
              </GoabText>
              <GoabLink>
                <a href={resource.href} target="_blank" rel="noopener noreferrer">
                  Visit resource
                </a>
              </GoabLink>
            </GoabContainer>
          ))}
        </GoabGrid>
        <GoabSpacer vSpacing="2xl" />
      </GoabPageBlock>
    </section>
  )
}
