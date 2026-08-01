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
import { SatireNotice } from '../components/SatireNotice'
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
    title: 'Propulsion romantics',
    body: 'Help us design engines that get bigger every year starting 2026. Bring spreadsheets, bravado, and a healthy fear of max-Q.',
    action: 'Volunteer (satire)',
    icon: 'flame',
  },
  {
    id: 'structures',
    title: 'Structures maximalists',
    body: 'If it is not taller than last quarter’s CAD model, it is a stool. We need people who treat mass fraction like a religion.',
    action: 'Join structures',
    icon: 'construct',
  },
  {
    id: 'comms',
    title: 'Moon oratory department',
    body: 'Someone has to announce the 2030 landing with a straight face. That someone could be you.',
    action: 'Claim the mic',
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
          Join the stack
        </GoabText>
        <SatireNotice />
        <GoabText tag="p" size="body-m" mt="none" mb="xl" maxWidth="65ch">
          Help a fictional organization keep a straight face about the Moon. Real
          student teams — AlbertaSat, UASTARR — have real join paths on their own
          sites; start at Campus scene if that is what you wanted.
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
        <GoabCallout type="emergency" heading="2030 or forever hold your peace" mb="none">
          Membership benefits include: roadmap PDFs, increasingly large rocket
          drawings, and the right to say “see you on the Moon” at parties.
          <GoabSpacer vSpacing="m" />
          <GoabButton type="primary" onClick={() => navigate('/contact')}>
            Contact mission control (fake)
          </GoabButton>
        </GoabCallout>
        <GoabSpacer vSpacing="2xl" />
      </GoabPageBlock>
    </section>
  )
}
