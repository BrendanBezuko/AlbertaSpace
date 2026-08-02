export type ResourceLink = {
  id: string
  title: string
  description: string
  href: string
  source: string
  kind: 'video' | 'article' | 'organization' | 'government'
}

export type VideoResource = {
  id: string
  title: string
  description: string
  youtubeId?: string
  href: string
  source: string
}

export const featuredVideos: VideoResource[] = [
  {
    id: 'albertasat-alumni',
    title: 'AlbertaSat team alumni presentation',
    description:
      'University of Alberta engineering students review how the team designed and built Ex-Alta 1 and discuss follow-on mission work. Source: U of A Faculty of Engineering news / YouTube.',
    youtubeId: 'wLF1pL6pzso',
    href: 'https://youtu.be/wLF1pL6pzso',
    source: 'University of Alberta Faculty of Engineering',
  },
  {
    id: 'ex-alta-1-deploy',
    title: 'Ex-Alta 1 deployed from the ISS',
    description:
      'Public multimedia of the University of Alberta CubeSat deployment from the International Space Station (May 2017).',
    href: 'https://www.asc-csa.gc.ca/eng/multimedia/search/video/18173',
    source: 'asc-csa.gc.ca multimedia',
  },
  {
    id: 'ex-alta-2-inside',
    title: 'An inside look at the AlbertaSat Ex-Alta 2 launch',
    description:
      'YouAlberta feature on the Northern SPIRIT launch and student teamwork around Ex-Alta 2 / SpaceX CRS-27 (March 2023).',
    href: 'https://www.ualberta.ca/en/youalberta/2023/03/an-inside-look-at-the-albertasat-ex-alta-2-launch.html',
    source: 'University of Alberta',
  },
]

/** Links to campus / student org materials. */
export const resourceLinks: ResourceLink[] = [
  {
    id: 'albertasat',
    title: 'AlbertaSat',
    description:
      'Official site for the U of A student/faculty CubeSat group — missions, outreach, and updates.',
    href: 'https://albertasat.ca/',
    source: 'AlbertaSat',
    kind: 'organization',
  },
  {
    id: 'uastarr',
    title: 'UASTARR / STARR',
    description:
      'Student Team for Alberta Rocketry Research — sounding rockets, competitions, and STEM outreach.',
    href: 'https://uastarr.ca/',
    source: 'UASTARR',
    kind: 'organization',
  },
  {
    id: 'ex-alta-3',
    title: 'Ex-Alta 3 mission',
    description:
      'AlbertaSat’s current development mission page (ice/snow imaging and magnetometer goals, per their site).',
    href: 'https://albertasat.ca/ex-alta-3/',
    source: 'AlbertaSat',
    kind: 'article',
  },
  {
    id: 'ex-alta-2',
    title: 'Ex-Alta 2 mission',
    description:
      'AlbertaSat page for the CubeSat launched March 14, 2023 on SpaceX CRS-27.',
    href: 'https://albertasat.ca/ex-alta-2/',
    source: 'AlbertaSat',
    kind: 'article',
  },
  {
    id: 'ex-alta-1',
    title: 'Ex-Alta 1 mission',
    description:
      'AlbertaSat’s first flown CubeSat page (QB50-era work; deployed from the ISS in 2017).',
    href: 'https://albertasat.ca/ex-alta-1/',
    source: 'AlbertaSat',
    kind: 'article',
  },
  {
    id: 'albertasat-github',
    title: 'AlbertaSat on GitHub',
    description: 'Public repositories related to AlbertaSat missions and tools.',
    href: 'https://github.com/AlbertaSat',
    source: 'AlbertaSat',
    kind: 'organization',
  },
  {
    id: 'albertasat-linkedin',
    title: 'AlbertaSat on LinkedIn',
    description: 'Public LinkedIn company page for AlbertaSat updates.',
    href: 'https://www.linkedin.com/company/albertasat',
    source: 'AlbertaSat',
    kind: 'organization',
  },
  {
    id: 'albertasat-instagram',
    title: 'AlbertaSat on Instagram',
    description: 'Photos and short updates from @alberta_sat.',
    href: 'https://www.instagram.com/alberta_sat/',
    source: 'AlbertaSat',
    kind: 'organization',
  },
  {
    id: 'albertasat-facebook',
    title: 'AlbertaSat on Facebook',
    description: 'Public Facebook page for AlbertaSat posts.',
    href: 'https://www.facebook.com/AlbertaSat',
    source: 'AlbertaSat',
    kind: 'organization',
  },
  {
    id: 'starr-ess',
    title: 'STARR ESS student group page',
    description:
      'Engineering Students’ Society listing for STARR with a public contact email.',
    href: 'https://www.essualberta.ca/studentgroups/starr',
    source: 'U of A ESS',
    kind: 'organization',
  },
  {
    id: 'folio-launch',
    title: 'U of A Folio: Ex-Alta 2 launch',
    description: 'University coverage of the 2023 Ex-Alta 2 launch.',
    href: 'https://www.ualberta.ca/en/folio/2023/03/satellite-launch-marks-new-milestone-for-made-in-alberta-space-science.html',
    source: 'University of Alberta Folio',
    kind: 'article',
  },
  {
    id: 'ualberta-engineering',
    title: 'U of A Faculty of Engineering',
    description:
      'Faculty home page — many AlbertaSat and STARR contributors study or teach in Engineering.',
    href: 'https://www.ualberta.ca/en/engineering/index.html',
    source: 'University of Alberta',
    kind: 'organization',
  },
]
