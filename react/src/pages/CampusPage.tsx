import {
  GoabCallout,
  GoabContainer,
  GoabGrid,
  GoabIcon,
  GoabLink,
  GoabPageBlock,
  GoabSpacer,
  GoabText,
} from '@abgov/react-components'
import { CONTENT_WIDTH } from '../constants'
import { albertaSatMissions } from '../data/albertasat'
import { campusGroups } from '../data/campus'
import { featuredVideos } from '../data/resources'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function CampusPage() {
  useDocumentTitle('Campus scene')

  return (
    <section className="section section--albertasat reveal">
      <GoabPageBlock width={CONTENT_WIDTH}>
        <GoabSpacer vSpacing="2xl" />
        <GoabText tag="h1" size="heading-l" mt="none" mb="xs">
          Real campus teams (not us)
        </GoabText>
        <GoabText tag="p" size="body-m" mt="none" mb="l" maxWidth="70ch">
          Simple public facts about student groups that actually build hardware.
          The Alberta Space Program is satirical fiction and is not affiliated with
          these teams, their universities, or their sponsors.
        </GoabText>

        <GoabCallout type="important" heading="No affiliation" mb="xl">
          Linking to AlbertaSat, UASTARR / STARR, or any campus page does not mean
          partnership, endorsement, funding, shared branding, or shared mission
          plans. If you want their truth, use their websites and emails below.
        </GoabCallout>

        {campusGroups.map((group) => (
          <div key={group.id} className="campus-group">
            <GoabText tag="h2" size="heading-m" mt="none" mb="xs">
              {group.name}
            </GoabText>
            <GoabText tag="p" size="body-m" mt="none" mb="m" maxWidth="72ch">
              {group.summary}
            </GoabText>

            <GoabText tag="h3" size="heading-s" mt="none" mb="s">
              Public facts
            </GoabText>
            <ul className="campus-group__facts">
              {group.facts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>

            <GoabSpacer vSpacing="m" />
            <GoabGrid gap="m" minChildWidth="200px">
              {group.socials.map((social) => (
                <GoabContainer
                  key={social.href}
                  type="non-interactive"
                  accent="thin"
                  mb="none"
                >
                  <div className="icon-heading">
                    <GoabIcon type="link" size="medium" role="presentation" />
                    <GoabText tag="h3" size="heading-s" mt="none" mb="none">
                      {social.label}
                    </GoabText>
                  </div>
                  <GoabSpacer vSpacing="s" />
                  <GoabLink>
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      Open {social.label}
                    </a>
                  </GoabLink>
                </GoabContainer>
              ))}
            </GoabGrid>

            {group.contactEmail ? (
              <GoabText tag="p" size="body-s" mt="m" mb="none">
                Public contact listed by the group / ESS materials:{' '}
                <a href={`mailto:${group.contactEmail}`}>{group.contactEmail}</a>
              </GoabText>
            ) : null}

            <GoabSpacer vSpacing="2xl" />
          </div>
        ))}

        <GoabText tag="h2" size="heading-m" mt="none" mb="m">
          AlbertaSat missions (from albertasat.ca)
        </GoabText>
        <div className="mission-list">
          {albertaSatMissions.map((mission) => (
            <GoabContainer
              key={mission.id}
              type="non-interactive"
              accent="filled"
              mb="none"
            >
              <div className="icon-heading">
                <GoabIcon type="rocket" size="large" role="presentation" />
                <GoabText tag="h3" size="heading-s" mt="none" mb="none">
                  {mission.name}
                </GoabText>
              </div>
              <p className="mission-card__status">{mission.status}</p>
              <GoabText tag="p" size="body-m" mt="s" mb="s">
                {mission.summary}
              </GoabText>
              <GoabLink>
                <a href={mission.href} target="_blank" rel="noopener noreferrer">
                  Read on albertasat.ca
                </a>
              </GoabLink>
            </GoabContainer>
          ))}
        </div>

        <GoabSpacer vSpacing="2xl" />
        <GoabText tag="h2" size="heading-m" mt="none" mb="m">
          AlbertaSat videos &amp; stories
        </GoabText>
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
        <div className="social-feeds">
          <div className="social-feeds__panel">
            <GoabText tag="h3" size="heading-s" mt="none" mb="s">
              AlbertaSat Facebook feed
            </GoabText>
            <div className="social-feeds__frame">
              <iframe
                title="AlbertaSat Facebook page feed"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAlbertaSat&tabs=timeline&width=500&height=560&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
          <div className="social-feeds__panel">
            <GoabText tag="h3" size="heading-s" mt="none" mb="s">
              Follow them elsewhere
            </GoabText>
            <ul className="social-feeds__quick-links">
              <li>
                <a
                  href="https://www.instagram.com/alberta_sat/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram @alberta_sat
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/albertasat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AlbertaSat on LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AlbertaSat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub.com/AlbertaSat
                </a>
              </li>
              <li>
                <a href="https://uastarr.ca/" target="_blank" rel="noopener noreferrer">
                  UASTARR website
                </a>
              </li>
            </ul>
            <GoabText tag="p" size="body-s" mt="m" mb="none">
              Feeds and links are third-party. Embeds may fail when social networks
              require login — use the direct links above.
            </GoabText>
          </div>
        </div>
        <GoabSpacer vSpacing="2xl" />
      </GoabPageBlock>
    </section>
  )
}
