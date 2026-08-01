import {
  GoabButton,
  GoabCallout,
  GoabContainer,
  GoabDivider,
  GoabGrid,
  GoabHeroBanner,
  GoabHeroBannerActions,
  GoabIcon,
  GoabLink,
  GoabPageBlock,
  GoabSpacer,
  GoabText,
} from '@abgov/react-components'
import { Link, useNavigate } from 'react-router-dom'
import { SatireNotice } from '../components/SatireNotice'
import { CONTENT_WIDTH, ORG_NAME } from '../constants'
import { formatEventDate, programEvents } from '../data/events'
import { teamMembers } from '../data/team'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function HomePage() {
  const navigate = useNavigate()
  useDocumentTitle()

  const upcoming = [...programEvents]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3)

  return (
    <>
      <section className="hero-section" aria-label="Introduction">
        <GoabHeroBanner
          heading={ORG_NAME}
          backgroundUrl={`${import.meta.env.BASE_URL}hero-alberta-sky.png`}
          textColor="#ffffff"
          minHeight="78vh"
          maxContentWidth={CONTENT_WIDTH}
        >
          We will reach the Moon by 2030. Full stop. Starting in 2026 we build
          bigger and bigger rockets — until the prairie sky is just a launch pad
          with better branding.
          <GoabHeroBannerActions>
            <GoabButton type="start" onClick={() => navigate('/roadmap')}>
              See the roadmap
            </GoabButton>
          </GoabHeroBannerActions>
        </GoabHeroBanner>
      </section>

      <section className="section section--mission reveal">
        <GoabPageBlock width={CONTENT_WIDTH}>
          <GoabSpacer vSpacing="2xl" />
          <SatireNotice />
          <GoabText tag="h2" size="heading-l" mt="none" mb="m">
            Moon or bust (preferably Moon)
          </GoabText>
          <GoabText tag="p" size="body-l" mt="none" mb="xl" maxWidth="72ch">
            The Alberta Space Program is a satirical private organization with one
            assignment: put Alberta boots on lunar regolith before the decade ends.
            We will stack stages, stack budgets (hypothetically), and stack press
            releases until gravity files a complaint.
          </GoabText>

          <GoabGrid gap="l" minChildWidth="240px">
            <GoabContainer type="non-interactive" accent="thin" mb="none">
              <div className="icon-heading">
                <GoabIcon type="rocket" size="large" theme="outline" role="presentation" />
                <GoabText tag="h3" size="heading-s" mt="none" mb="none">
                  Rockets from 2026
                </GoabText>
              </div>
              <GoabText tag="p" size="body-m" mt="s" mb="m">
                Year one: something that leaves the pad. Every year after: louder,
                taller, slightly more unreasonable.
              </GoabText>
              <GoabButton
                type="tertiary"
                trailingIcon="arrow-forward"
                onClick={() => navigate('/roadmap')}
              >
                Open the roadmap
              </GoabButton>
            </GoabContainer>

            <GoabContainer type="non-interactive" accent="thin" mb="none">
              <div className="icon-heading">
                <GoabIcon type="planet" size="large" theme="outline" role="presentation" />
                <GoabText tag="h3" size="heading-s" mt="none" mb="none">
                  Moon by 2030
                </GoabText>
              </div>
              <GoabText tag="p" size="body-m" mt="s" mb="m">
                Soft landing optional. Soft deadlines forbidden. The Moon has been
                warned.
              </GoabText>
              <GoabButton
                type="tertiary"
                trailingIcon="arrow-forward"
                onClick={() => navigate('/mission')}
              >
                Read the mission
              </GoabButton>
            </GoabContainer>

            <GoabContainer type="non-interactive" accent="thin" mb="none">
              <div className="icon-heading">
                <GoabIcon type="school" size="large" theme="outline" role="presentation" />
                <GoabText tag="h3" size="heading-s" mt="none" mb="none">
                  Real campus teams
                </GoabText>
              </div>
              <GoabText tag="p" size="body-m" mt="s" mb="m">
                AlbertaSat and UASTARR do actual hardware. We admire them from a
                satirical distance — zero affiliation.
              </GoabText>
              <GoabButton
                type="tertiary"
                trailingIcon="arrow-forward"
                onClick={() => navigate('/campus')}
              >
                Campus scene
              </GoabButton>
            </GoabContainer>
          </GoabGrid>
          <GoabSpacer vSpacing="2xl" />
        </GoabPageBlock>
      </section>

      <GoabDivider />

      <section className="section section--events reveal" aria-label="Upcoming events">
        <GoabPageBlock width={CONTENT_WIDTH}>
          <GoabSpacer vSpacing="2xl" />
          <GoabText tag="h2" size="heading-l" mt="none" mb="xs">
            Pad-side calendar
          </GoabText>
          <GoabText tag="p" size="body-m" mt="none" mb="xl" maxWidth="65ch">
            Entirely made-up gatherings for a made-up launch company with excellent
            confidence and questionable physics.
          </GoabText>
          <GoabGrid gap="l" minChildWidth="280px">
            {upcoming.map((event) => (
              <GoabContainer
                key={event.id}
                type="non-interactive"
                accent="filled"
                mb="none"
              >
                <p className="event-card__date">{formatEventDate(event.date)}</p>
                <GoabText tag="h3" size="heading-s" mt="none" mb="xs">
                  {event.title}
                </GoabText>
                <GoabText tag="p" size="body-m" mt="none" mb="s">
                  {event.venue}
                </GoabText>
                <GoabLink>
                  <Link to="/events">Event details</Link>
                </GoabLink>
              </GoabContainer>
            ))}
          </GoabGrid>
          <GoabSpacer vSpacing="l" />
          <GoabButton type="secondary" onClick={() => navigate('/events')}>
            View all events
          </GoabButton>
          <GoabSpacer vSpacing="2xl" />
        </GoabPageBlock>
      </section>

      <GoabDivider />

      <section className="section section--team reveal" aria-label="Organization team">
        <GoabPageBlock width={CONTENT_WIDTH}>
          <GoabSpacer vSpacing="2xl" />
          <GoabText tag="h2" size="heading-l" mt="none" mb="xs">
            The crew (fictional)
          </GoabText>
          <GoabText tag="p" size="body-m" mt="none" mb="xl" maxWidth="65ch">
            Invented humans with invented titles, united by one real belief: 2030 is
            a Moon year if you say it loud enough.
          </GoabText>
          <div className="team-strip">
            {teamMembers.map((member) => (
              <Link key={member.id} to="/team" className="team-strip__item">
                <img
                  src={`${import.meta.env.BASE_URL}${member.photo}`}
                  alt=""
                  width={96}
                  height={96}
                />
                <span className="team-strip__name">{member.name}</span>
                <span className="team-strip__role">{member.role}</span>
              </Link>
            ))}
          </div>
          <GoabSpacer vSpacing="2xl" />
        </GoabPageBlock>
      </section>

      <section className="section section--band reveal" aria-label="Campus highlight">
        <GoabPageBlock width={CONTENT_WIDTH}>
          <GoabSpacer vSpacing="2xl" />
          <GoabCallout
            type="information"
            heading="Meanwhile, on actual campuses…"
            mb="none"
          >
            AlbertaSat flies CubeSats. UASTARR builds sounding rockets. Neither of
            them asked to be on this website. We link them because they are real —
            and because our Moon plan could use the contrast.
            <GoabSpacer vSpacing="m" />
            <GoabButton type="primary" onClick={() => navigate('/campus')}>
              See real campus teams
            </GoabButton>
          </GoabCallout>
          <GoabSpacer vSpacing="2xl" />
        </GoabPageBlock>
      </section>
    </>
  )
}
