import {
  GoabButton,
  GoabButtonGroup,
  GoabContainer,
  GoabGrid,
  GoabIcon,
  GoabLink,
  GoabPageBlock,
  GoabSpacer,
  GoabText,
} from '@abgov/react-components'
import { Link, useNavigate } from 'react-router-dom'
import { CONTENT_WIDTH, ORG_EMAIL } from '../constants'
import { teamMembers } from '../data/team'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function ContactPage() {
  const navigate = useNavigate()
  useDocumentTitle('Contact')

  return (
    <section className="section section--contact reveal">
      <GoabPageBlock width={CONTENT_WIDTH}>
        <GoabSpacer vSpacing="2xl" />
        <GoabText tag="h1" size="heading-l" mt="none" mb="m">
          Get in touch
        </GoabText>
        <GoabText tag="p" size="body-l" mt="none" mb="xl" maxWidth="70ch">
          Questions about the plan, doubts about the date, or an offer to lend
          a hand — we read it all, including the skeptical letters. Those keep
          us sharp. To reach the campus teams, use their own contacts on the
          campus scene page.
        </GoabText>

        <GoabContainer type="info" accent="thick" mb="xl">
          <div className="icon-heading">
            <GoabIcon type="mail" size="large" theme="outline" role="presentation" />
            <GoabText tag="h2" size="heading-m" mt="none" mb="none">
              Write to us
            </GoabText>
          </div>
          <GoabSpacer vSpacing="s" />
          <GoabText tag="p" size="body-m" mt="none" mb="l" maxWidth="60ch">
            One inbox for the whole program. Somebody on the crew will get back
            to you — usually after supper, once the shop quiets down.
          </GoabText>
          <GoabButtonGroup alignment="start">
            <GoabButton
              type="primary"
              onClick={() => {
                window.location.href = `mailto:${ORG_EMAIL}`
              }}
            >
              Email {ORG_EMAIL}
            </GoabButton>
            <GoabButton type="secondary" onClick={() => navigate('/campus')}>
              Campus team contacts
            </GoabButton>
          </GoabButtonGroup>
        </GoabContainer>

        <GoabText tag="h2" size="heading-m" mt="none" mb="m">
          Reach the crew directly
        </GoabText>
        <GoabGrid gap="l" minChildWidth="260px">
          {teamMembers.map((member) => (
            <GoabContainer
              key={member.id}
              type="non-interactive"
              accent="thin"
              mb="none"
            >
              <GoabText tag="h3" size="heading-s" mt="none" mb="xs">
                {member.name}
              </GoabText>
              <p className="person-card__role">{member.role}</p>
              <p className="person-card__meta">{member.location}</p>
              <GoabSpacer vSpacing="s" />
              <GoabLink>
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </GoabLink>
            </GoabContainer>
          ))}
        </GoabGrid>

        <GoabSpacer vSpacing="xl" />
        <GoabText tag="p" size="body-m" mt="none" mb="none">
          Also see <Link to="/roadmap">roadmap</Link>, <Link to="/events">events</Link>,
          and <Link to="/campus">campus scene</Link>.
        </GoabText>
        <GoabSpacer vSpacing="2xl" />
      </GoabPageBlock>
    </section>
  )
}
