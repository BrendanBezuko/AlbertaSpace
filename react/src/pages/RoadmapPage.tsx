import {
  GoabButton,
  GoabContainer,
  GoabGrid,
  GoabIcon,
  GoabPageBlock,
  GoabSpacer,
  GoabText,
} from '@abgov/react-components'
import type { GoabIconType } from '@abgov/ui-components-common'
import { useNavigate } from 'react-router-dom'
import { CONTENT_WIDTH } from '../constants'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const milestones: {
  year: string
  title: string
  body: string
  icon: GoabIconType
}[] = [
  {
    year: '2026',
    title: 'First hardware leaves the shop',
    body: 'We start with a rocket small enough to finish and honest enough to fly. Pad tests, static fires, and a first flight that will teach us more than it impresses anyone. That is fine. It is ours.',
    icon: 'rocket',
  },
  {
    year: '2027',
    title: 'Bigger engines, harder lessons',
    body: 'We scale up what worked and quietly retire what did not. More thrust, more altitude, and a shop wall filling up with parts that flew and parts that taught us something on the way down.',
    icon: 'flash',
  },
  {
    year: '2028',
    title: 'Reaching for orbit',
    body: 'The year the sky stops being the ceiling. Upper stages, recovery systems, and the first vehicle designed to stay up rather than come home. The Moon starts appearing in our drawings as a destination, not a decoration.',
    icon: 'planet',
  },
  {
    year: '2029',
    title: 'Practice for the big one',
    body: 'Deep-space communications, trajectory work, and a landing system we test until we trust it. A dress rehearsal for the hardest thing anyone from here has ever tried to do.',
    icon: 'navigate',
  },
  {
    year: '2030',
    title: 'The Moon',
    body: 'Touchdown. A machine built by Alberta hands, resting in the dust a quarter million miles from the shop it came from. Whatever else happens, nobody will ever be able to say we did not try.',
    icon: 'flag',
  },
]

export function RoadmapPage() {
  const navigate = useNavigate()
  useDocumentTitle('Roadmap')

  return (
    <section className="section section--ambition reveal">
      <GoabPageBlock width={CONTENT_WIDTH}>
        <GoabSpacer vSpacing="2xl" />
        <GoabText tag="h1" size="heading-l" mt="none" mb="xs">
          The road from 2026 to the Moon
        </GoabText>
        <GoabText tag="p" size="body-m" mt="none" mb="l" maxWidth="70ch">
          Five years, five vehicles, each one a little bigger and a little
          wiser than the last. This is the plan we work from and the promise we
          measure ourselves against.
        </GoabText>

        <div className="mission-list">
          {milestones.map((item) => (
            <GoabContainer
              key={item.year}
              type="non-interactive"
              accent="thin"
              mb="none"
            >
              <div className="icon-heading">
                <GoabIcon type={item.icon} size="large" role="presentation" />
                <GoabText tag="h2" size="heading-s" mt="none" mb="none">
                  {item.year} — {item.title}
                </GoabText>
              </div>
              <GoabText tag="p" size="body-m" mt="s" mb="none">
                {item.body}
              </GoabText>
            </GoabContainer>
          ))}
        </div>

        <GoabSpacer vSpacing="xl" />
        <GoabText tag="h2" size="heading-m" mt="none" mb="m">
          What we hold ourselves to
        </GoabText>
        <GoabGrid gap="l" minChildWidth="240px">
          <GoabContainer type="non-interactive" accent="filled" mb="none">
            <GoabText tag="h3" size="heading-s" mt="none" mb="s">
              Build a little bigger
            </GoabText>
            <GoabText tag="p" size="body-m" mt="none" mb="none">
              Every year&apos;s vehicle should carry more than the last one
              could. Slow, steady, and always upward.
            </GoabText>
          </GoabContainer>
          <GoabContainer type="non-interactive" accent="filled" mb="none">
            <GoabText tag="h3" size="heading-s" mt="none" mb="s">
              Learn from every flight
            </GoabText>
            <GoabText tag="p" size="body-m" mt="none" mb="none">
              A rocket that fails and teaches us something beats one that never
              leaves the drawing board. We keep the lessons and lose the pride.
            </GoabText>
          </GoabContainer>
          <GoabContainer type="non-interactive" accent="filled" mb="none">
            <GoabText tag="h3" size="heading-s" mt="none" mb="s">
              Keep the Moon in view
            </GoabText>
            <GoabText tag="p" size="body-m" mt="none" mb="none">
              Every design review ends with the same quiet question: does this
              get us closer to 2030?
            </GoabText>
          </GoabContainer>
        </GoabGrid>

        <GoabSpacer vSpacing="xl" />
        <GoabButton type="primary" onClick={() => navigate('/participate')}>
          Come build with us
        </GoabButton>
        <GoabSpacer vSpacing="2xl" />
      </GoabPageBlock>
    </section>
  )
}
