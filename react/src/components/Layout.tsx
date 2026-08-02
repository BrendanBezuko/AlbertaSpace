import { GoabAppHeader } from '@abgov/react-components'
import { NavLink, Outlet } from 'react-router-dom'
import {
  CONTENT_WIDTH,
  ORG_NAME,
  SATIRE_TAGLINE,
  UI_LICENSE_URL,
} from '../constants'
import { ScrollToTop } from './ScrollToTop'

const primaryNav = [
  { to: '/mission', label: 'Mission' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/campus', label: 'Campus scene' },
  { to: '/team', label: 'Team' },
  { to: '/events', label: 'Events' },
  { to: '/locations', label: 'Locations' },
  { to: '/participate', label: 'Join' },
  { to: '/contact', label: 'Contact' },
] as const

const footerNav = [
  { to: '/', label: 'Home' },
  { to: '/mission', label: 'Mission' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/focus', label: 'Focus' },
  { to: '/campus', label: 'Campus scene' },
  { to: '/team', label: 'Team' },
  { to: '/events', label: 'Events' },
  { to: '/locations', label: 'Locations' },
  { to: '/resources', label: 'Resources' },
  { to: '/participate', label: 'Join' },
  { to: '/contact', label: 'Contact' },
] as const

export function Layout() {
  const homeUrl = import.meta.env.BASE_URL || '/'

  return (
    <div className="site">
      <ScrollToTop />
      <p className="satire-banner">
        {SATIRE_TAGLINE}{' '}
        UI is licensed under the{' '}
        <a href={UI_LICENSE_URL} target="_blank" rel="noopener noreferrer">
          MIT license
        </a>
        .
      </p>

      <GoabAppHeader
        url={homeUrl}
        heading={ORG_NAME}
        maxContentWidth={CONTENT_WIDTH}
      >
        {primaryNav.map((item) => (
          <NavLink key={item.to} slot="navigation" to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </GoabAppHeader>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div
          className="site-footer__content"
          style={{ maxWidth: CONTENT_WIDTH }}
        >
          <section className="site-footer__nav">
            <h2 className="site-footer__heading">{ORG_NAME}</h2>
            <ul className="site-footer__nav-links">
              {footerNav.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to}>{item.label}</NavLink>
                </li>
              ))}
            </ul>
          </section>
          <section className="site-footer__meta">
            <div className="site-footer__meta-links">
              <NavLink to="/campus">Not affiliated with campus teams</NavLink>
              <a href="mailto:hello@albertaspace.example">Say hello</a>
            </div>
            <span className="site-footer__brand">Alberta Space Company</span>
          </section>
        </div>
      </footer>
    </div>
  )
}
