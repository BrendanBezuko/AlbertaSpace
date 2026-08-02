import {
  GoabButton,
  GoabCallout,
  GoabPageBlock,
  GoabSpacer,
  GoabText,
} from '@abgov/react-components'
import { Link, useNavigate } from 'react-router-dom'
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

        <figure className="mission-hero-figure">
          <img
            src={`${import.meta.env.BASE_URL}mission/mission-moon-beer.png`}
            alt="Astronaut on the Moon enjoying a cold beer with Earth in the background — our mood board for landing day"
            width={1600}
            height={900}
          />
          <figcaption>
            How we picture the evening after landing day.{' '}
            <a href={MOON_BEER_GALLERY} target="_blank" rel="noopener noreferrer">
              Astronaut drinking beer on Moon wallpapers
            </a>
            .
          </figcaption>
        </figure>

        <GoabText tag="p" size="body-l" mt="none" mb="l" maxWidth="72ch">
          Our mission fits in one sentence: <strong>put something built in
          Alberta on the Moon by 2030</strong>. Not a study. Not a committee.
          A piece of hardware, made by our hands, resting in the grey dust with
          the Earth hanging over it. And if there&apos;s ever a person from here
          standing next to it, we hope they crack a cold one and think of home.
        </GoabText>
        <GoabCallout type="information" heading="Our promise" mb="l">
          By December 31, 2030, we mean to set Alberta-built hardware on the
          lunar surface. If we fall short, we&apos;ll say so plainly, own the
          reasons, and get back to work. Nobody quits on a dream because the
          first winter was hard.
        </GoabCallout>
        <GoabText tag="h2" size="heading-m" mt="none" mb="s">
          How we get there
        </GoabText>
        <GoabText tag="p" size="body-m" mt="none" mb="s" maxWidth="72ch">
          Starting in <strong>2026</strong>, we build. Small first — a vehicle
          we can finish, fly, and learn from. Then a bigger one, every year,
          each carrying the lessons of the last. There are no shortcuts between
          a prairie pad and the Moon. Just years of work we intend to do.
        </GoabText>
        <GoabText tag="p" size="body-m" mt="none" mb="l" maxWidth="72ch">
          We didn&apos;t invent Alberta&apos;s place in space. Students beat us
          to it — AlbertaSat with satellites, UASTARR with sounding rockets.
          We&apos;re not affiliated with them, but their story is on our{' '}
          <Link to="/campus">campus scene</Link> page because it deserves
          telling.
        </GoabText>
        <GoabButton type="primary" onClick={() => navigate('/roadmap')}>
          Open the 2026–2030 roadmap
        </GoabButton>
        <GoabSpacer vSpacing="2xl" />
      </GoabPageBlock>
    </section>
  )
}
