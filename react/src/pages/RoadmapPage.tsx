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
import { SatireNotice } from '../components/SatireNotice'
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
    title: 'First flight hardware leaves the shop',
    body: 'We begin as an organization that builds rockets — small enough to finish, loud enough to brag about. Pad tests, static fires, and the first vehicle that goes up more than it goes sideways.',
    icon: 'rocket',
  },
  {
    year: '2027',
    title: 'Bigger engines, fewer excuses',
    body: 'Stage mass grows. Thrust charts get arrogant. We publish a vehicle family tree where every child is taller than its parent.',
    icon: 'flash',
  },
  {
    year: '2028',
    title: 'Orbital-class ambition (satirical)',
    body: 'We claim the sky is not enough. Upper stages appear in slide decks. Recovery systems are “in work.” The Moon stops being a metaphor and starts being a destination on a Gantt chart.',
    icon: 'planet',
  },
  {
    year: '2029',
    title: 'Cislunar dress rehearsal',
    body: 'Deep-space comms demos, trajectory papers nobody asked for, and a landing system that looks great in renderings. We call it final approach even if physics calls it optimistic.',
    icon: 'navigate',
  },
  {
    year: '2030',
    title: 'Moon landing',
    body: 'Touchdown. Boots, flags, and a livestream with too many countdowns. History books will need a new Alberta chapter — or at least a new satire anthology.',
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
          Rocket roadmap: 2026 → Moon 2030
        </GoabText>
        <GoabText tag="p" size="body-m" mt="none" mb="l" maxWidth="70ch">
          As an organization, we start building in 2026 and escalate vehicle scale
          every year until the Moon has no choice but to host us.
        </GoabText>
        <SatireNotice />

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
          Escalation rule
        </GoabText>
        <GoabGrid gap="l" minChildWidth="240px">
          <GoabContainer type="non-interactive" accent="filled" mb="none">
            <GoabText tag="h3" size="heading-s" mt="none" mb="s">
              Always bigger
            </GoabText>
            <GoabText tag="p" size="body-m" mt="none" mb="none">
              If last year&apos;s rocket could lift a fridge, this year&apos;s lifts
              the kitchen.
            </GoabText>
          </GoabContainer>
          <GoabContainer type="non-interactive" accent="filled" mb="none">
            <GoabText tag="h3" size="heading-s" mt="none" mb="s">
              Always sooner
            </GoabText>
            <GoabText tag="p" size="body-m" mt="none" mb="none">
              Schedules compress. Ambition expands. Sleep is a ground-support
              consumable.
            </GoabText>
          </GoabContainer>
          <GoabContainer type="non-interactive" accent="filled" mb="none">
            <GoabText tag="h3" size="heading-s" mt="none" mb="s">
              Always lunar
            </GoabText>
            <GoabText tag="p" size="body-m" mt="none" mb="none">
              Every design review ends with the same question: does this get us to
              2030 on the Moon?
            </GoabText>
          </GoabContainer>
        </GoabGrid>

        <GoabSpacer vSpacing="xl" />
        <GoabButton type="primary" onClick={() => navigate('/participate')}>
          Join the (satirical) stack
        </GoabButton>
        <GoabSpacer vSpacing="2xl" />
      </GoabPageBlock>
    </section>
  )
}
