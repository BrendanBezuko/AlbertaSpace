export type ProgramEvent = {
  id: string
  title: string
  date: string
  time: string
  locationId: string
  venue: string
  audience: string
  summary: string
  host: string
}

export const programEvents: ProgramEvent[] = [
  {
    id: '2026-stack-reveal',
    title: '2026 Stack Reveal',
    date: '2026-09-12',
    time: '7:00 p.m. – 10:00 p.m. MT',
    locationId: 'buffalo-trail',
    venue: 'Buffalo Trail Observation Site (near Oyen)',
    audience: 'Everyone — families welcome',
    summary:
      'Our first vehicle, out in the open where the neighbours can see it. It is small, and it is ours. Come meet the crew, kick the tires, and stay for the stars.',
    host: 'Marcus Okello',
  },
  {
    id: 'static-fire-saturday',
    title: 'Static Fire Saturday',
    date: '2026-10-03',
    time: '9:30 a.m. – 4:00 p.m. MT',
    locationId: 'pakowki-quiet',
    venue: 'Pakowki Lake Quiet Zone (near Manyberries)',
    audience: 'Anyone who likes engines',
    summary:
      'A day at the pad watching an engine do what we built it to do. Hearing protection provided; there will be coffee going all day.',
    host: 'Gordon MacRae',
  },
  {
    id: 'bigger-than-last-year',
    title: '2027 Vehicle Design Review',
    date: '2027-01-16',
    time: 'Friday 4:00 p.m. – Sunday noon MT',
    locationId: 'redwillow-range',
    venue: 'Redwillow Range Staging Ground (near Hythe)',
    audience: 'Builders and the curious',
    summary:
      'A weekend of honest engineering: what flew, what failed, and what next year’s vehicle needs to carry. Hard questions encouraged.',
    host: 'Marcus Okello',
  },
  {
    id: 'cislunar-slide-night',
    title: 'Road to the Moon: Trajectory Night',
    date: '2028-11-07',
    time: '6:00 p.m. – 9:00 p.m. MT',
    locationId: 'edmonton-hub',
    venue: 'Edmonton Program Hub (downtown)',
    audience: 'Anyone who wonders how you get there from here',
    summary:
      'An evening walking through the path from a prairie pad to the lunar surface, one burn at a time. Plain language, real math, no rush.',
    host: 'Eli Cardinal',
  },
  {
    id: 'dress-rehearsal-2029',
    title: '2029 Dress Rehearsal Broadcast',
    date: '2029-08-20',
    time: '11:00 a.m. – 4:00 p.m. MT',
    locationId: 'birch-mountains-overlook',
    venue: 'Birch Mountains Overlook (north of Fort McKay)',
    audience: 'Everyone at home or on the hill',
    summary:
      'A full run-through of landing day — comms, telemetry, and commentary — a year before the real thing. Practice is how the dream stays a plan.',
    host: 'Samir Haddad',
  },
  {
    id: 'moon-2030-watch',
    title: 'Moon 2030 Watch Party',
    date: '2030-07-20',
    time: 'All day MT',
    locationId: 'clearwater-bench',
    venue: 'Clearwater Bench Field Lab (near Nordegg)',
    audience: 'Everyone who ever wished us well',
    summary:
      'The big one. If we have done our jobs, this is the day we watch something built in Alberta touch the Moon — together, on the land where it started.',
    host: 'Preston Nandra',
  },
]

export function formatEventDate(isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00`)
  return new Intl.DateTimeFormat('en-CA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}
