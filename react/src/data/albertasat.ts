export type AlbertaSatMission = {
  id: string
  name: string
  status: string
  summary: string
  href: string
}

export type AlbertaSatSocial = {
  id: string
  label: string
  href: string
  description: string
  icon: 'logo-linkedin' | 'logo-instagram' | 'logo-facebook' | 'logo-github' | 'globe' | 'mail' | 'logo-youtube'
}

export type AlbertaSatLink = {
  id: string
  title: string
  description: string
  href: string
}

/** Real AlbertaSat / U of A links — not affiliated with this microsite's fictional program content. */
export const albertaSatAbout = {
  name: 'AlbertaSat',
  tagline: '#LiftOffAlberta',
  summary:
    'AlbertaSat is a student and faculty group at the University of Alberta that designs, builds, tests, and operates small satellites. Their publicly stated goal is to support Albertan and Canadian access to space through high-impact CubeSat missions, open-source components, and outreach.',
  website: 'https://albertasat.ca/',
  aboutPage: 'https://albertasat.ca/about-us/',
  essPage: 'https://www.essualberta.ca/studentgroups/albertasat',
  generalEmail: 'enggasat@ualberta.ca',
  outreachEmail: 'AbSatEO@ualberta.ca',
  facebookEmail: 'albertasat@gmail.com',
}

export const albertaSatMissions: AlbertaSatMission[] = [
  {
    id: 'ex-alta-3',
    name: 'Ex-Alta 3',
    status: 'In development (targeted launch window described by AlbertaSat as 2026)',
    summary:
      'Current CubeSat development described on albertasat.ca. Planned work includes ice/snow characterization with the IRIS imager and magnetic-field measurements with a digital fluxgate magnetometer. Details and timelines are maintained by AlbertaSat and may change.',
    href: 'https://albertasat.ca/ex-alta-3/',
  },
  {
    id: 'ex-alta-2',
    name: 'Ex-Alta 2',
    status: 'Flown (launched March 14, 2023 on SpaceX CRS-27)',
    summary:
      'Part of the Northern SPIRIT / Canadian CubeSat Project activity described by AlbertaSat. Multispectral imaging work focused on wildfire-related Earth observation. Built by University of Alberta students with northern partners.',
    href: 'https://albertasat.ca/ex-alta-2/',
  },
  {
    id: 'ex-alta-1',
    name: 'Ex-Alta 1',
    status: 'Flown (deployed from the ISS in 2017)',
    summary:
      'Described by AlbertaSat as the first fully Albertan satellite. Part of the QB50 constellation; collected space-weather related measurements and demonstrated provincial CubeSat capability.',
    href: 'https://albertasat.ca/ex-alta-1/',
  },
]

export const albertaSatSocials: AlbertaSatSocial[] = [
  {
    id: 'website',
    label: 'albertasat.ca',
    href: 'https://albertasat.ca/',
    description: 'Official mission site, updates, and documentation.',
    icon: 'globe',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/albertasat',
    description: 'Company page with team updates and outreach posts.',
    icon: 'logo-linkedin',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/alberta_sat/',
    description: 'Photos and short updates from @alberta_sat.',
    icon: 'logo-instagram',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/AlbertaSat',
    description: 'Public page for news, campaigns, and event posts.',
    icon: 'logo-facebook',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/AlbertaSat',
    description: 'Open-source flight software, ground tools, and hardware repos.',
    icon: 'logo-github',
  },
]

export const albertaSatExtraLinks: AlbertaSatLink[] = [
  {
    id: 'about',
    title: 'About AlbertaSat',
    description: 'History from the Canadian Satellite Design Challenge through Ex-Alta missions.',
    href: 'https://albertasat.ca/about-us/',
  },
  {
    id: 'ess',
    title: 'U of A Engineering Students Society listing',
    description: 'Student-group listing with contact email for people interested in joining.',
    href: 'https://www.essualberta.ca/studentgroups/albertasat',
  },
  {
    id: 'folio',
    title: 'U of A Folio: Ex-Alta 2 launch',
    description: 'University coverage of the 2023 launch and Northern SPIRIT partnership.',
    href: 'https://www.ualberta.ca/en/folio/2023/03/satellite-launch-marks-new-milestone-for-made-in-alberta-space-science.html',
  },
  {
    id: 'youalberta',
    title: 'YouAlberta: inside the Ex-Alta 2 launch',
    description: 'Student-facing story on the CRS-27 launch experience.',
    href: 'https://www.ualberta.ca/en/youalberta/2023/03/an-inside-look-at-the-albertasat-ex-alta-2-launch.html',
  },
  {
    id: 'engineering-news',
    title: 'Faculty of Engineering: AlbertaSat alumni presentation',
    description: 'News post linking a student presentation video about Ex-Alta 1 and follow-on work.',
    href: 'https://www.ualberta.ca/en/engineering/about/news/2018/may/video-albertasat-team-alumni-presentation.html',
  },
  {
    id: 'iss-deploy-video',
    title: 'Ex-Alta 1 ISS deployment video',
    description: 'Public multimedia of the CubeSat leaving the International Space Station.',
    href: 'https://www.asc-csa.gc.ca/eng/multimedia/search/video/18173',
  },
  {
    id: 'engineering',
    title: 'U of A Faculty of Engineering',
    description: 'Faculty home — many AlbertaSat contributors study or teach here.',
    href: 'https://www.ualberta.ca/en/engineering/index.html',
  },
]
