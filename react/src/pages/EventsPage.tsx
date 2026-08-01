import {
  GoabButton,
  GoabContainer,
  GoabPageBlock,
  GoabSpacer,
  GoabText,
} from '@abgov/react-components'
import { Link, useNavigate } from 'react-router-dom'
import { LocationPhoto } from '../components/LocationPhoto'
import { SatireNotice } from '../components/SatireNotice'
import { CONTENT_WIDTH } from '../constants'
import { formatEventDate, programEvents } from '../data/events'
import { programLocations } from '../data/locations'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function locationFor(id: string) {
  return programLocations.find((location) => location.id === id)
}

export function EventsPage() {
  const navigate = useNavigate()
  useDocumentTitle('Events')

  const upcoming = [...programEvents].sort((a, b) => a.date.localeCompare(b.date))

  return (
    <section className="section section--events reveal">
      <GoabPageBlock width={CONTENT_WIDTH}>
        <GoabSpacer vSpacing="2xl" />
        <GoabText tag="h1" size="heading-l" mt="none" mb="xs">
          Events on the path to 2030
        </GoabText>
        <GoabText tag="p" size="body-m" mt="none" mb="l" maxWidth="70ch">
          Fictional pad parties, design reviews, and a Moon watch party scheduled
          with suspicious confidence.
        </GoabText>
        <SatireNotice />

        <div className="event-list">
          {upcoming.map((event) => {
            const location = locationFor(event.locationId)
            return (
              <GoabContainer
                key={event.id}
                type="non-interactive"
                accent="thin"
                mb="none"
              >
                <article className="event-card">
                  {location ? (
                    <LocationPhoto
                      src={location.image}
                      alt={`View near ${location.nearestTown} for ${event.title}`}
                      className="location-photo location-photo--event"
                    />
                  ) : null}
                  <div className="event-card__copy">
                    <p className="event-card__date">{formatEventDate(event.date)}</p>
                    <GoabText tag="h2" size="heading-s" mt="none" mb="xs">
                      {event.title}
                    </GoabText>
                    <p className="event-card__meta">
                      {event.time}
                      <br />
                      {event.venue}
                    </p>
                    <GoabText tag="p" size="body-m" mt="s" mb="s">
                      {event.summary}
                    </GoabText>
                    <p className="event-card__meta">
                      Audience: {event.audience}
                      <br />
                      Host: {event.host}
                    </p>
                    {location ? (
                      <p className="event-card__links">
                        <Link to={`/locations#${location.id}`}>
                          View field site details
                        </Link>
                      </p>
                    ) : null}
                  </div>
                </article>
              </GoabContainer>
            )
          })}
        </div>

        <GoabSpacer vSpacing="xl" />
        <GoabButton type="primary" onClick={() => navigate('/contact')}>
          RSVP to the bit
        </GoabButton>
        <GoabSpacer vSpacing="2xl" />
      </GoabPageBlock>
    </section>
  )
}
