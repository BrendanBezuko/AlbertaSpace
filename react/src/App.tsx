import {
  GoabAppFooter,
  GoabAppFooterMetaSection,
  GoabAppFooterNavSection,
  GoabAppHeader,
  GoabBlock,
  GoabButton,
  GoabButtonGroup,
  GoabCallout,
  GoabContainer,
  GoabDivider,
  GoabGrid,
  GoabHeroBanner,
  GoabHeroBannerActions,
  GoabLink,
  GoabMicrositeHeader,
  GoabPageBlock,
  GoabSpacer,
  GoabText,
} from '@abgov/react-components'
import './App.css'

const CONTENT_WIDTH = '1100px'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function App() {
  return (
    <div className="site">
      <GoabMicrositeHeader type="alpha" maxContentWidth={CONTENT_WIDTH} />

      <GoabAppHeader
        url="https://www.alberta.ca"
        heading="Alberta Space Program"
        maxContentWidth={CONTENT_WIDTH}
      >
        <a slot="navigation" href="#mission">
          Mission
        </a>
        <a slot="navigation" href="#focus">
          Focus areas
        </a>
        <a slot="navigation" href="#participate">
          Participate
        </a>
        <a slot="navigation" href="#contact">
          Contact
        </a>
      </GoabAppHeader>

      <main>
        <section className="hero-section" aria-label="Introduction">
          <GoabHeroBanner
            heading="Alberta Space Program"
            backgroundUrl="/hero-alberta-sky.png"
            textColor="#ffffff"
            minHeight="78vh"
            maxContentWidth={CONTENT_WIDTH}
          >
            From prairie skies to orbit — building Alberta&apos;s role in the space
            economy through research, talent, and industry partnership.
            <GoabHeroBannerActions>
              <GoabButton type="start" onClick={() => scrollToId('participate')}>
                Get involved
              </GoabButton>
            </GoabHeroBannerActions>
          </GoabHeroBanner>
        </section>

        <section id="mission" className="section section--mission reveal">
          <GoabPageBlock width={CONTENT_WIDTH}>
            <GoabSpacer vSpacing="2xl" />
            <GoabText tag="h2" size="heading-l" mt="none" mb="m">
              Our mission
            </GoabText>
            <GoabText tag="p" size="body-l" mt="none" mb="l" maxWidth="72ch">
              The Alberta Space Program connects researchers, startups, educators, and
              industry to grow a competitive provincial space sector — from Earth
              observation and satellite services to advanced manufacturing and STEM
              pathways for the next generation of Albertans.
            </GoabText>
            <GoabCallout type="information" heading="Why space, why Alberta" mb="none">
              Alberta&apos;s energy, aerospace, agriculture, and tech strengths are a
              natural foundation for space applications that monitor land, climate,
              infrastructure, and remote communities.
            </GoabCallout>
            <GoabSpacer vSpacing="2xl" />
          </GoabPageBlock>
        </section>

        <GoabDivider />

        <section id="focus" className="section section--focus reveal">
          <GoabPageBlock width={CONTENT_WIDTH}>
            <GoabSpacer vSpacing="2xl" />
            <GoabText tag="h2" size="heading-l" mt="none" mb="xs">
              Focus areas
            </GoabText>
            <GoabText tag="p" size="body-m" mt="none" mb="xl" maxWidth="65ch">
              We concentrate investment and collaboration where Alberta can lead and
              where space capabilities create real value on the ground.
            </GoabText>

            <GoabGrid gap="l" minChildWidth="280px">
              <GoabContainer type="non-interactive" accent="thin" mb="none">
                <GoabText tag="h3" size="heading-s" mt="none" mb="s">
                  Earth observation
                </GoabText>
                <GoabText tag="p" size="body-m" mt="none" mb="none">
                  Satellite data for agriculture, wildfire readiness, water, and
                  resource stewardship across Alberta&apos;s landscapes.
                </GoabText>
              </GoabContainer>

              <GoabContainer type="non-interactive" accent="thin" mb="none">
                <GoabText tag="h3" size="heading-s" mt="none" mb="s">
                  Space industry
                </GoabText>
                <GoabText tag="p" size="body-m" mt="none" mb="none">
                  Support for companies building hardware, software, and services that
                  compete in Canada&apos;s growing space supply chain.
                </GoabText>
              </GoabContainer>

              <GoabContainer type="non-interactive" accent="thin" mb="none">
                <GoabText tag="h3" size="heading-s" mt="none" mb="s">
                  Research &amp; talent
                </GoabText>
                <GoabText tag="p" size="body-m" mt="none" mb="none">
                  University partnerships, applied research, and student pathways that
                  keep space careers rooted in Alberta.
                </GoabText>
              </GoabContainer>
            </GoabGrid>
            <GoabSpacer vSpacing="2xl" />
          </GoabPageBlock>
        </section>

        <section className="section section--band reveal" aria-label="Program highlight">
          <GoabPageBlock width={CONTENT_WIDTH}>
            <GoabSpacer vSpacing="2xl" />
            <GoabCallout
              type="event"
              heading="Applications open for collaborative projects"
              emphasis="high"
              mb="none"
            >
              Teams of Alberta researchers and industry partners can apply for support
              on projects that demonstrate clear public benefit and commercialization
              potential. Intake closes each spring.
              <GoabSpacer vSpacing="m" />
              <GoabButton type="primary" onClick={() => scrollToId('contact')}>
                Talk to the program team
              </GoabButton>
            </GoabCallout>
            <GoabSpacer vSpacing="2xl" />
          </GoabPageBlock>
        </section>

        <GoabDivider />

        <section id="participate" className="section section--participate reveal">
          <GoabPageBlock width={CONTENT_WIDTH}>
            <GoabSpacer vSpacing="2xl" />
            <GoabText tag="h2" size="heading-l" mt="none" mb="xs">
              Ways to participate
            </GoabText>
            <GoabText tag="p" size="body-m" mt="none" mb="xl" maxWidth="65ch">
              Whether you are building a company, teaching the next cohort, or exploring
              a research idea — there is a place to start.
            </GoabText>

            <GoabGrid gap="l" minChildWidth="300px">
              <GoabContainer type="non-interactive" accent="filled" mb="none">
                <GoabBlock direction="column" gap="s">
                  <GoabText tag="h3" size="heading-s" mt="none" mb="none">
                    For industry
                  </GoabText>
                  <GoabText tag="p" size="body-m" mt="none" mb="none">
                    Partner on demonstration projects, access talent pipelines, and
                    connect with national and international space networks.
                  </GoabText>
                  <GoabLink>
                    <a href="#contact">Request a partnership conversation</a>
                  </GoabLink>
                </GoabBlock>
              </GoabContainer>

              <GoabContainer type="non-interactive" accent="filled" mb="none">
                <GoabBlock direction="column" gap="s">
                  <GoabText tag="h3" size="heading-s" mt="none" mb="none">
                    For researchers
                  </GoabText>
                  <GoabText tag="p" size="body-m" mt="none" mb="none">
                    Align proposals with provincial priorities and find industry
                    collaborators ready to move ideas toward deployment.
                  </GoabText>
                  <GoabLink>
                    <a href="#contact">Explore research opportunities</a>
                  </GoabLink>
                </GoabBlock>
              </GoabContainer>

              <GoabContainer type="non-interactive" accent="filled" mb="none">
                <GoabBlock direction="column" gap="s">
                  <GoabText tag="h3" size="heading-s" mt="none" mb="none">
                    For students &amp; educators
                  </GoabText>
                  <GoabText tag="p" size="body-m" mt="none" mb="none">
                    Join STEM challenges, mentorship events, and campus programs that
                    open doors into aerospace and space careers.
                  </GoabText>
                  <GoabLink>
                    <a href="#contact">Learn about education programs</a>
                  </GoabLink>
                </GoabBlock>
              </GoabContainer>
            </GoabGrid>
            <GoabSpacer vSpacing="2xl" />
          </GoabPageBlock>
        </section>

        <section id="contact" className="section section--contact reveal">
          <GoabPageBlock width={CONTENT_WIDTH}>
            <GoabSpacer vSpacing="xl" />
            <GoabContainer type="info" accent="thick" mb="none">
              <GoabText tag="h2" size="heading-m" mt="none" mb="s">
                Contact the Alberta Space Program
              </GoabText>
              <GoabText tag="p" size="body-m" mt="none" mb="l" maxWidth="60ch">
                Tell us about your organization, project idea, or education initiative.
                Our team will help you find the right next step.
              </GoabText>
              <GoabButtonGroup alignment="start">
                <GoabButton
                  type="primary"
                  onClick={() => {
                    window.location.href = 'mailto:space@alberta.ca'
                  }}
                >
                  Email the program
                </GoabButton>
                <GoabButton
                  type="secondary"
                  onClick={() => {
                    window.open('https://www.alberta.ca', '_blank', 'noopener,noreferrer')
                  }}
                >
                  Visit Alberta.ca
                </GoabButton>
              </GoabButtonGroup>
            </GoabContainer>
            <GoabSpacer vSpacing="2xl" />
          </GoabPageBlock>
        </section>
      </main>

      <GoabAppFooter maxContentWidth={CONTENT_WIDTH}>
        <GoabAppFooterNavSection maxColumnCount={2} heading="Alberta Space Program">
          <a href="#mission">Mission</a>
          <a href="#focus">Focus areas</a>
          <a href="#participate">Participate</a>
          <a href="#contact">Contact</a>
        </GoabAppFooterNavSection>
        <GoabAppFooterMetaSection>
          <a href="https://www.alberta.ca/privacy-statement">Privacy</a>
          <a href="https://www.alberta.ca/disclaimer">Disclaimer</a>
          <a href="https://www.alberta.ca/accessibility-statement">Accessibility</a>
          <a href="https://www.alberta.ca">Alberta.ca</a>
        </GoabAppFooterMetaSection>
      </GoabAppFooter>
    </div>
  )
}

export default App
