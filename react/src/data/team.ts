export type TeamMember = {
  id: string
  name: string
  role: string
  location: string
  bio: string
  focus: string[]
  email: string
  photo: string
}

/** Fictional satirical crew — not real people. */
export const teamMembers: TeamMember[] = [
  {
    id: 'priya-nandra',
    name: 'Dr. Preston Nandra, P.Eng.',
    role: 'Chief Lunar Optimist & Systems PhD',
    location: 'Edmonton (in lore)',
    bio: 'PhD in aerospace systems, ticketed engineer, lease-road graduate school. Sets the 2030 Moon date in every meeting agenda and treats a boldface roadmap like translunar injection.',
    focus: ['2030 Moon', 'Systems engineering', 'Morale burns'],
    email: 'preston@albertaspace.example',
    photo: 'team/team-priya-nandra.png',
  },
  {
    id: 'marcus-okello',
    name: 'Dr. Marcus Okello, P.Eng.',
    role: 'VP of Bigger Rockets',
    location: 'Calgary (in lore)',
    bio: 'Combustion PhD who still talks like a toolpush. Owns the 2026+ escalation rule: each vehicle must intimidate its predecessor. Thrust charts labeled “not enough.”',
    focus: ['Propulsion', 'Scale', 'Pad swagger'],
    email: 'marcus@albertaspace.example',
    photo: 'team/team-marcus-okello.png',
  },
  {
    id: 'elise-cardinal',
    name: 'Dr. Eli Cardinal, P.Eng.',
    role: 'Director of Trajectories',
    location: 'Fort McMurray (in lore)',
    bio: 'Orbital mechanics PhD with mud on the boots. Draws arcs from prairie pads to the lunar near side. When asked about delta-v, answers “yes.”',
    focus: ['Trajectories', 'Landing sites', 'Guidance'],
    email: 'eli@albertaspace.example',
    photo: 'team/team-elise-cardinal.png',
  },
  {
    id: 'gordon-macrae',
    name: 'Dr. Gordon MacRae, P.Eng.',
    role: 'Head of Field Pads',
    location: 'Lethbridge (in lore)',
    bio: 'Civil/geotech PhD who scouts fictional gravel clearings for increasingly large static fires. Claims the wind is a free attitude-control system.',
    focus: ['Pads', 'Cold ops', 'Site engineering'],
    email: 'gordon@albertaspace.example',
    photo: 'team/team-gordon-macrae.png',
  },
  {
    id: 'hana-park',
    name: 'Dr. Hank Park, P.Eng.',
    role: 'Crew Manifest & Training Lead',
    location: 'Edmonton (in lore)',
    bio: 'Industrial engineering PhD who recruits fictional talent for a fictional stack. Points admirers of real hardware toward AlbertaSat and UASTARR — with clear “not us” signage.',
    focus: ['Recruiting', 'Training', 'Campus pointers'],
    email: 'hank@albertaspace.example',
    photo: 'team/team-hana-park.png',
  },
  {
    id: 'samir-haddad',
    name: 'Dr. Samir Haddad, P.Eng.',
    role: 'Comms, Countdown & RF',
    location: 'Red Deer (in lore)',
    bio: 'Electrical engineering PhD who writes press releases that declare victory before liftoff. Practices “Moon by 2030” in twelve emotional registers over the radio.',
    focus: ['RF', 'Countdowns', 'Catchphrases'],
    email: 'samir@albertaspace.example',
    photo: 'team/team-samir-haddad.png',
  },
]
