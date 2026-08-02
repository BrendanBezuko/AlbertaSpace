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
          We&apos;re a small crew of Albertans with one dream: build rockets here
          at home starting in 2026, and set something we made on the Moon by
          2030. It&apos;s a long road from a gravel pad to the Sea of
          Tranquility. We know that. We&apos;re going anyway.
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
          <GoabText tag="h2" size="heading-l" mt="none" mb="m">
            Why we&apos;re doing this
          </GoabText>
          <GoabText tag="p" size="body-l" mt="none" mb="xl" maxWidth="72ch">
            This province builds things. Grain elevators, pipelines, satellites
            on a student budget. We figure the next thing Alberta builds can
            leave the ground. Nobody handed us this job — we just looked up one
            clear prairie night and decided somebody from here ought to try.
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
                Year one: something small and honest that leaves the pad. Every
                year after: a little bigger, built on what the last one taught
                us.
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
                That&apos;s the date we hold onto when the shop is cold and the
                budget is colder. We know how hard it is. That&apos;s half the
                point.
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
                AlbertaSat flies satellites. UASTARR launches rockets. They got
                here first and did it right. We&apos;re not affiliated with them
                — just proud they&apos;re ours.
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
            Where to find us
          </GoabText>
          <GoabText tag="p" size="body-m" mt="none" mb="xl" maxWidth="65ch">
            Pad days, design reviews, and long evenings under a sky that makes
            the whole thing feel possible. Come say hello.
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
            The crew
          </GoabText>
          <GoabText tag="p" size="body-m" mt="none" mb="xl" maxWidth="65ch">
            Engineers, farm kids, and stubborn optimists. Different roads here,
            same belief: Alberta belongs in the sky.
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
            heading="Students are already doing it"
            mb="none"
          >
            At the University of Alberta, AlbertaSat has put satellites in orbit
            and UASTARR sends rockets into the high blue. Their work is real and
            worth your time. If our dream ever comes true, it will be because
            people like them led the way.
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
