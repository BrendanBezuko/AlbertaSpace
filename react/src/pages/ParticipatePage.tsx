import {
  GoabButton,
  GoabCallout,
  GoabIcon,
  GoabPageBlock,
  GoabSpacer,
  GoabText,
} from '@abgov/react-components'
import type { GoabIconType } from '@abgov/ui-components-common'
import { useNavigate } from 'react-router-dom'
import { CONTENT_WIDTH } from '../constants'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const paths: {
  id: string
  title: string
  body: string
  action: string
  icon: GoabIconType
}[] = [
  {
    id: 'propulsion',
    title: 'Propulsion',
    body: 'Help us build engines we can be proud of — starting small in 2026 and growing every year. Bring your spreadsheets and your patience; we supply the coffee and the long winters.',
    action: 'Join propulsion',
    icon: 'flame',
  },
  {
    id: 'structures',
    title: 'Structures',
    body: 'Tanks, frames, and everything that has to hold together when it matters. We need people who sweat the small stuff, because at the pad there is no small stuff.',
    action: 'Join structures',
    icon: 'construct',
  },
  {
    id: 'comms',
    title: 'Outreach & storytelling',
    body: 'Somebody has to tell this story — to schools, to small towns, to everyone who ever looked up from a back porch and wondered. That somebody could be you.',
    action: 'Help tell the story',
    icon: 'mic',
  },
]

export function ParticipatePage() {
  const navigate = useNavigate()
  useDocumentTitle('Join')

  return (
    <section className="section section--participate reveal">
      <GoabPageBlock width={CONTENT_WIDTH}>
        <GoabSpacer vSpacing="2xl" />
        <GoabText tag="h1" size="heading-l" mt="none" mb="xs">
          Come build with us
        </GoabText>
        <GoabText tag="p" size="body-m" mt="none" mb="xl" maxWidth="65ch">
          If you&apos;ve read this far, maybe the dream got to you a little too.
          There&apos;s room here for welders and coders, students and retirees.
          And if hands-on student hardware is what you&apos;re after, AlbertaSat
          and UASTARR would be glad to have you — start at Campus scene.
        </GoabText>

        <div className="participate-list">
          {paths.map((path) => (
            <article key={path.id} className="participate-path">
              <div className="participate-path__copy">
                <div className="icon-heading">
                  <GoabIcon type={path.icon} size="large" theme="outline" role="presentation" />
                  <GoabText tag="h2" size="heading-s" mt="none" mb="none">
                    {path.title}
                  </GoabText>
                </div>
                <GoabText tag="p" size="body-m" mt="s" mb="none" maxWidth="60ch">
                  {path.body}
                </GoabText>
              </div>
              <div className="participate-path__action">
                <GoabButton
                  type="secondary"
                  trailingIcon="arrow-forward"
                  onClick={() => navigate('/contact')}
                >
                  {path.action}
                </GoabButton>
              </div>
            </article>
          ))}
        </div>

        <GoabSpacer vSpacing="2xl" />
        <GoabCallout type="information" heading="The door is open" mb="none">
          We can&apos;t promise glamour. We can promise honest work, good
          company, and a seat at the table the day something built by this crew
          leaves the ground. That&apos;s worth more than a title.
          <GoabSpacer vSpacing="m" />
          <GoabButton type="primary" onClick={() => navigate('/contact')}>
            Get in touch
          </GoabButton>
        </GoabCallout>
        <GoabSpacer vSpacing="2xl" />
      </GoabPageBlock>
    </section>
  )
}
