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

const focusAreas: {
  title: string
  body: string
  icon: GoabIconType
}[] = [
  {
    title: 'Bigger rockets, year over year',
    body: 'From 2026 on, each vehicle grows out of the one before it. Not because bigger is glamorous, but because the Moon is far and small steps are how ordinary people get to extraordinary places.',
    icon: 'rocket',
  },
  {
    title: 'The Moon by 2030',
    body: 'One date, written where the whole crew can see it. It keeps us honest on the days the work is hard and humble on the days it goes well.',
    icon: 'planet',
  },
  {
    title: 'Prairie launch culture',
    body: 'Cold mornings, gravel pads, a thermos passed around while the frost burns off. We want kids in small towns to grow up knowing the road to space can start from a field they recognize.',
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
        <GoabText tag="p" size="body-m" mt="none" mb="xl" maxWidth="65ch">
          Three things we care about, and one place we&apos;re headed.
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
          See the year-by-year plan
        </GoabButton>
        <GoabSpacer vSpacing="2xl" />
      </GoabPageBlock>
    </section>
  )
}
