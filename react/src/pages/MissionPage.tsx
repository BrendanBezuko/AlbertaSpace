import {
  GoabButton,
  GoabCallout,
  GoabPageBlock,
  GoabSpacer,
  GoabText,
} from '@abgov/react-components'
import { Link, useNavigate } from 'react-router-dom'
import { SatireNotice } from '../components/SatireNotice'
import { CONTENT_WIDTH } from '../constants'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const MOON_BEER_GALLERY =
  'https://wallpaperaccess.com/astronaut-drinking-beer-on-moon'

export function MissionPage() {
  const navigate = useNavigate()
  useDocumentTitle('Mission')

  return (
    <section className="section section--mission reveal">
      <GoabPageBlock width={CONTENT_WIDTH}>
        <GoabSpacer vSpacing="2xl" />
        <GoabText tag="h1" size="heading-l" mt="none" mb="m">
          Mission: the Moon by 2030
        </GoabText>
        <SatireNotice />

        <figure className="mission-hero-figure">
          <img
            src={`${import.meta.env.BASE_URL}mission/mission-moon-beer.png`}
            alt="Astronaut on the Moon enjoying a cold beer with Earth in the background — satirical mission mood board"
            width={1600}
            height={900}
          />
          <figcaption>
            Artistic direction for 2030 success criteria.{' '}
            <a href={MOON_BEER_GALLERY} target="_blank" rel="noopener noreferrer">
              Astronaut drinking beer on Moon wallpapers
            </a>
            .
          </figcaption>
        </figure>

        <GoabText tag="p" size="body-l" mt="none" mb="l" maxWidth="72ch">
          We are a satirical private organization with a schedule carved into the
          side of a metaphorical silo: <strong>lunar arrival in 2030</strong>. Not
          “explore cis-lunar opportunities.” Not “study the Moon.” Arrive. Plant a
          flag that says Alberta Space Program in a font large enough to see from
          Earth with a good telescope and a generous imagination. Optional but
          strongly encouraged: crack a cold one in the regolith.
        </GoabText>
        <GoabCallout type="emergency" heading="Non-negotiable claim" mb="l">
          By December 31, 2030, Albertan-built hardware from this organization will
          have reached the lunar surface. If the universe disagrees, we will release
          a denser roadmap PDF — and a longer beer run.
        </GoabCallout>
        <GoabText tag="h2" size="heading-m" mt="none" mb="s">
          How we get there (boldly)
        </GoabText>
        <GoabText tag="p" size="body-m" mt="none" mb="s" maxWidth="72ch">
          Starting in <strong>2026</strong>, we build rockets. Then bigger rockets.
          Then rockets that make previous rockets look like polite weather balloons.
          Each generation exists to embarrass the last one into retirement.
        </GoabText>
        <GoabText tag="p" size="body-m" mt="none" mb="l" maxWidth="72ch">
          Real student teams already do serious work nearby — AlbertaSat on CubeSats,
          UASTARR on sounding rockets. We are not them, not with them, and not
          speaking for them. Facts about those groups live on our{' '}
          <Link to="/campus">campus scene</Link> page.
        </GoabText>
        <GoabButton type="primary" onClick={() => navigate('/roadmap')}>
          Open the 2026–2030 roadmap
        </GoabButton>
        <GoabSpacer vSpacing="2xl" />
      </GoabPageBlock>
    </section>
  )
}
