export type CampusGroup = {
  id: string
  name: string
  shortName: string
  summary: string
  website: string
  contactEmail?: string
  socials: { label: string; href: string }[]
  facts: string[]
}

/**
 * Simple public facts about real U of A–area student groups.
 * This satirical site is not affiliated with any of them.
 */
export const campusGroups: CampusGroup[] = [
  {
    id: 'albertasat',
    name: 'AlbertaSat',
    shortName: 'AlbertaSat',
    summary:
      'A University of Alberta student and faculty group that designs, builds, tests, and operates small satellites (CubeSats), with public outreach and open-source components.',
    website: 'https://albertasat.ca/',
    contactEmail: 'enggasat@ualberta.ca',
    socials: [
      { label: 'Website', href: 'https://albertasat.ca/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/albertasat' },
      { label: 'Instagram', href: 'https://www.instagram.com/alberta_sat/' },
      { label: 'Facebook', href: 'https://www.facebook.com/AlbertaSat' },
      { label: 'GitHub', href: 'https://github.com/AlbertaSat' },
    ],
    facts: [
      'Ex-Alta 1 flew after deployment from the ISS in 2017 (QB50-related work).',
      'Ex-Alta 2 launched March 14, 2023 on SpaceX CRS-27 as part of Northern SPIRIT / Canadian CubeSat Project activity.',
      'Ex-Alta 3 is described by AlbertaSat as an in-development mission with ice/snow imaging and magnetometer goals.',
    ],
  },
  {
    id: 'uastarr',
    name: 'Student Team for Alberta Rocketry Research (STARR / UASTARR)',
    shortName: 'UASTARR',
    summary:
      'An interdisciplinary University of Alberta student rocketry team that designs, builds, and launches high-altitude sounding rockets for competitions, outreach, and hands-on aerospace experience.',
    website: 'https://uastarr.ca/',
    contactEmail: 'uastarr@ualberta.ca',
    socials: [
      { label: 'Website', href: 'https://uastarr.ca/' },
      {
        label: 'ESS listing',
        href: 'https://www.essualberta.ca/studentgroups/starr',
      },
    ],
    facts: [
      'Public materials describe work across airframes, payloads, ground systems, and propulsion projects.',
      'The team promotes STEM outreach and intercollegiate rocketry competition participation.',
      'Contact listed on the ESS student-group page: uastarr@ualberta.ca.',
    ],
  },
]
