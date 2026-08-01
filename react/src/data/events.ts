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

/** Entirely fictional satirical events. */
export const programEvents: ProgramEvent[] = [
  {
    id: '2026-stack-reveal',
    title: '2026 Stack Reveal',
    date: '2026-09-12',
    time: '7:00 p.m. – 10:00 p.m. MT',
    locationId: 'buffalo-trail',
    venue: 'Buffalo Trail Observation Site (near Oyen)',
    audience: 'Anyone who can clap on countdown',
    summary:
      'We unveil the first rocket we claim is “too small to be our last.” Bring earplugs for the rhetoric.',
    host: 'Marcus Okello',
  },
  {
    id: 'static-fire-saturday',
    title: 'Static Fire Saturday (conceptual)',
    date: '2026-10-03',
    time: '9:30 a.m. – 4:00 p.m. MT',
    locationId: 'pakowki-quiet',
    venue: 'Pakowki Lake Quiet Zone (near Manyberries)',
    audience: 'Propulsion fans, photographers of heat haze',
    summary:
      'A fictional hot-fire day where the only thing guaranteed to ignite is confidence.',
    host: 'Gordon MacRae',
  },
  {
    id: 'bigger-than-last-year',
    title: 'Bigger-Than-Last-Year Design Review',
    date: '2027-01-16',
    time: 'Friday 4:00 p.m. – Sunday noon MT',
    locationId: 'redwillow-range',
    venue: 'Redwillow Range Staging Ground (near Hythe)',
    audience: 'Structures maximalists',
    summary:
      'If your CAD model is shorter than last year’s, you are presenting a stool. Escalation is the only agenda item.',
    host: 'Marcus Okello',
  },
  {
    id: 'cislunar-slide-night',
    title: 'Cislunar Slide Night',
    date: '2028-11-07',
    time: '6:00 p.m. – 9:00 p.m. MT',
    locationId: 'edmonton-hub',
    venue: 'Edmonton Program Hub (fictional downtown venue)',
    audience: 'Trajectory poets',
    summary:
      'Forty-seven slides about getting to the Moon by 2030. Slide forty-eight is just the word ARRIVE.',
    host: 'Elise Cardinal',
  },
  {
    id: 'dress-rehearsal-2029',
    title: '2029 Dress Rehearsal Broadcast',
    date: '2029-08-20',
    time: '11:00 a.m. – 4:00 p.m. MT',
    locationId: 'birch-mountains-overlook',
    venue: 'Birch Mountains Overlook (north of Fort McKay)',
    audience: 'Livestream enjoyers',
    summary:
      'Practice landing commentary for a landing that has not happened yet. Bring your own suspense.',
    host: 'Samir Haddad',
  },
  {
    id: 'moon-2030-watch',
    title: 'Moon 2030 Watch Party',
    date: '2030-07-20',
    time: 'All day MT (allegedly)',
    locationId: 'clearwater-bench',
    venue: 'Clearwater Bench Field Lab (near Nordegg)',
    audience: 'Everyone who believed the roadmap',
    summary:
      'The big one. Soft landing preferred. Soft commitment unavailable. Flags optional; bold claims mandatory.',
    host: 'Dr. Priya Nandra',
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
