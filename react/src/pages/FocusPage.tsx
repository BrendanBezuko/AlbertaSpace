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

const focusAreas: {
  title: string
  body: string
  icon: GoabIconType
}[] = [
  {
    title: 'Larger rockets',
    body: 'From 2026 onward, every vehicle generation must outweigh and out-thrust the last. Scale is the strategy. Subtlety is ballast.',
    icon: 'rocket',
  },
  {
    title: 'Lunar arrival 2030',
    body: 'All roadmaps, memes, and motivational posters point at the same crater. Soft landing preferred. Hard confidence mandatory.',
    icon: 'planet',
  },
  {
    title: 'Prairie launch culture',
    body: 'We will romanticize gravel pads, winter static fires, and coffee that tastes like RP-1. The Moon is far; Alberta mornings are farther.',
    icon: 'sunny',
  },
]

export function FocusPage() {
  const navigate = useNavigate()
  useDocumentTitle('Focus')

  return (
    <section className="section section--focus reveal">
      <GoabPageBlock width={CONTENT_WIDTH}>
        <GoabSpacer vSpacing="2xl" />
        <GoabText tag="h1" size="heading-l" mt="none" mb="xs">
          Focus areas
        </GoabText>
        <SatireNotice />
        <GoabText tag="p" size="body-m" mt="none" mb="xl" maxWidth="65ch">
          Three obsessions. Zero chill. One Moon.
        </GoabText>

        <GoabGrid gap="l" minChildWidth="280px">
          {focusAreas.map((area) => (
            <GoabContainer
              key={area.title}
              type="non-interactive"
              accent="thin"
              mb="none"
            >
              <div className="icon-heading">
                <GoabIcon type={area.icon} size="large" theme="outline" role="presentation" />
                <GoabText tag="h2" size="heading-s" mt="none" mb="none">
                  {area.title}
                </GoabText>
              </div>
              <GoabText tag="p" size="body-m" mt="s" mb="none">
                {area.body}
              </GoabText>
            </GoabContainer>
          ))}
        </GoabGrid>

        <GoabSpacer vSpacing="xl" />
        <GoabButton
          type="primary"
          trailingIcon="arrow-forward"
          onClick={() => navigate('/roadmap')}
        >
          See yearly escalation
        </GoabButton>
        <GoabSpacer vSpacing="2xl" />
      </GoabPageBlock>
    </section>
  )
}
