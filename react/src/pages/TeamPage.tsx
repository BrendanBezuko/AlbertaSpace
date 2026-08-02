import {
  GoabGrid,
  GoabPageBlock,
  GoabSpacer,
  GoabText,
} from '@abgov/react-components'
import { CONTENT_WIDTH } from '../constants'
import { teamMembers } from '../data/team'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function TeamPage() {
  useDocumentTitle('Team')

  return (
    <section className="section section--team reveal">
      <GoabPageBlock width={CONTENT_WIDTH}>
        <GoabSpacer vSpacing="2xl" />
        <GoabText tag="h1" size="heading-l" mt="none" mb="xs">
          The crew
        </GoabText>
        <GoabText tag="p" size="body-m" mt="none" mb="l" maxWidth="70ch">
          The people who show up early, stay late, and believe a rocket built
          in Alberta can reach the Moon. We&apos;re prouder of this crew than
          of any drawing on the wall.
        </GoabText>

        <GoabGrid gap="l" minChildWidth="320px">
          {teamMembers.map((member) => (
            <article key={member.id} className="person-card">
              <img
                className="person-card__photo"
                src={`${import.meta.env.BASE_URL}${member.photo}`}
                alt={`Portrait of ${member.name}`}
                width={320}
                height={320}
              />
              <div className="person-card__body">
                <GoabText tag="h2" size="heading-s" mt="none" mb="xs">
                  {member.name}
                </GoabText>
                <p className="person-card__role">{member.role}</p>
                <p className="person-card__meta">{member.location}</p>
                <GoabText tag="p" size="body-m" mt="s" mb="s">
                  {member.bio}
                </GoabText>
                <ul className="person-card__tags">
                  {member.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="person-card__email" href={`mailto:${member.email}`}>
                  {member.email}
                </a>
              </div>
            </article>
          ))}
        </GoabGrid>
        <GoabSpacer vSpacing="2xl" />
      </GoabPageBlock>
    </section>
  )
}
