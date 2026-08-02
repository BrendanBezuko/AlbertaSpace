import {
  GoabIcon,
  GoabLink,
  GoabPageBlock,
  GoabSpacer,
  GoabText,
} from '@abgov/react-components'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { LocationPhoto } from '../components/LocationPhoto'
import { CONTENT_WIDTH } from '../constants'
import { mapsExternalUrl, programLocations } from '../data/locations'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function LocationsPage() {
  useDocumentTitle('Locations')
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <section className="section section--locations reveal">
      <GoabPageBlock width={CONTENT_WIDTH}>
        <GoabSpacer vSpacing="2xl" />
        <GoabText tag="h1" size="heading-l" mt="none" mb="xs">
          Our field sites
        </GoabText>
        <GoabText tag="p" size="body-m" mt="none" mb="l" maxWidth="70ch">
          The quiet corners of Alberta where we test, listen, and learn. Big
          sky, honest weather, and room to make some noise without bothering
          anybody.
        </GoabText>

        <div className="location-list">
          {programLocations.map((location) => (
            <article
              key={location.id}
              id={location.id}
              className="location-card"
            >
              <LocationPhoto
                src={location.image}
                alt={`View of ${location.name} near ${location.nearestTown}`}
              />
              <div className="location-card__copy">
                <div className="icon-heading">
                  <GoabIcon type="location" size="large" theme="outline" role="presentation" />
                  <GoabText tag="h2" size="heading-s" mt="none" mb="none">
                    {location.name}
                  </GoabText>
                </div>
                <p className="location-card__meta">
                  {location.region} · nearest town: {location.nearestTown}
                </p>
                <GoabText tag="p" size="body-m" mt="s" mb="s">
                  {location.summary}
                </GoabText>
                <ul className="location-card__activities">
                  {location.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
                <p className="location-card__map-link">
                  <GoabIcon type="map" size="small" theme="outline" role="presentation" />
                  <GoabLink>
                    <a
                      href={mapsExternalUrl(location.lat, location.lng)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open area in Google Maps
                    </a>
                  </GoabLink>
                </p>
              </div>
            </article>
          ))}
        </div>
        <GoabSpacer vSpacing="2xl" />
      </GoabPageBlock>
    </section>
  )
}
