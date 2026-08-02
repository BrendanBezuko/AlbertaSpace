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

/** The crew. */
export const teamMembers: TeamMember[] = [
  {
    id: 'priya-nandra',
    name: 'Dr. Preston Nandra, P.Eng.',
    role: 'Program Lead',
    location: 'Edmonton',
    bio: 'Aerospace systems PhD who learned project management on lease roads before he ever saw a clean room. Keeps the 2030 date on the whiteboard and the coffee pot full. Believes the plan works if the people do.',
    focus: ['Systems engineering', 'The 2030 date', 'Keeping us honest'],
    email: 'preston@albertaspace.example',
    photo: 'team/team-priya-nandra.png',
  },
  {
    id: 'marcus-okello',
    name: 'Dr. Marcus Okello, P.Eng.',
    role: 'Propulsion Lead',
    location: 'Calgary',
    bio: 'Combustion PhD who still talks like a toolpush. Grew up around engines of one kind or another and never stopped wanting them louder. Owns the year-over-year plan: each vehicle a little bigger, each one earned.',
    focus: ['Propulsion', 'Engine testing', 'Scaling up'],
    email: 'marcus@albertaspace.example',
    photo: 'team/team-marcus-okello.png',
  },
  {
    id: 'elise-cardinal',
    name: 'Dr. Eli Cardinal, P.Eng.',
    role: 'Trajectory Lead',
    location: 'Fort McMurray',
    bio: 'Orbital mechanics PhD with mud on the boots. Spends evenings drawing arcs from prairie pads to the lunar near side and mornings checking the math twice. First one to say when a plan is too optimistic, and the last one to give up on it.',
    focus: ['Trajectories', 'Landing sites', 'Guidance'],
    email: 'eli@albertaspace.example',
    photo: 'team/team-elise-cardinal.png',
  },
  {
    id: 'gordon-macrae',
    name: 'Dr. Gordon MacRae, P.Eng.',
    role: 'Field Sites Lead',
    location: 'Lethbridge',
    bio: 'Civil and geotech PhD who knows every gravel clearing between Oyen and Hythe. Builds pads that hold up to static fires and Februaries. Says the land will carry us to the Moon if we treat it right.',
    focus: ['Pads', 'Cold-weather operations', 'Site engineering'],
    email: 'gordon@albertaspace.example',
    photo: 'team/team-gordon-macrae.png',
  },
  {
    id: 'hana-park',
    name: 'Dr. Hank Park, P.Eng.',
    role: 'People & Training Lead',
    location: 'Edmonton',
    bio: 'Industrial engineering PhD who believes the hardest part of a Moon program is taking care of the people building it. Finds a place for every volunteer, and points students at AlbertaSat and UASTARR when campus is the better fit.',
    focus: ['Recruiting', 'Training', 'Campus connections'],
    email: 'hank@albertaspace.example',
    photo: 'team/team-hana-park.png',
  },
  {
    id: 'samir-haddad',
    name: 'Dr. Samir Haddad, P.Eng.',
    role: 'Communications & RF Lead',
    location: 'Red Deer',
    bio: 'Electrical engineering PhD who fell in love with radio as a farm kid pulling in far-away stations after dark. Builds the links that will carry our telemetry — and someday, we hope, a voice — across a quarter million miles.',
    focus: ['RF', 'Ground stations', 'Telling the story'],
    email: 'samir@albertaspace.example',
    photo: 'team/team-samir-haddad.png',
  },
]
