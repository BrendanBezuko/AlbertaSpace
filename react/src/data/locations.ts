export type ProgramLocation = {
  id: string
  name: string
  region: string
  nearestTown: string
  lat: number
  lng: number
  image: string
  summary: string
  activities: string[]
}

/** Illustrative field sites in sparsely populated parts of Alberta. */
export const programLocations: ProgramLocation[] = [
  {
    id: 'buffalo-trail',
    name: 'Buffalo Trail Observation Site',
    region: 'Special Area No. 2',
    nearestTown: 'Oyen',
    lat: 51.3524,
    lng: -110.4871,
    image: 'locations/loc-buffalo-trail.png',
    summary:
      'A quiet prairie bench used for night-sky outreach, amateur radio downlink practice, and portable ground-station drills far from city light pollution.',
    activities: ['Public stargazing', 'CubeSat beacon listening', 'Educator workshops'],
  },
  {
    id: 'pakowki-quiet',
    name: 'Pakowki Lake Quiet Zone',
    region: 'Southeast Alberta',
    nearestTown: 'Manyberries',
    lat: 49.4012,
    lng: -110.9185,
    image: 'locations/loc-pakowki-quiet.png',
    summary:
      'An open grassland corridor reserved for low-interference RF tests and seasonal Earth-observation calibration flights over uniform terrain.',
    activities: ['RF quiet testing', 'Sensor calibration', 'Industry demos'],
  },
  {
    id: 'clearwater-bench',
    name: 'Clearwater Bench Field Lab',
    region: 'West-central Alberta',
    nearestTown: 'Nordegg',
    lat: 52.4718,
    lng: -116.0789,
    image: 'locations/loc-clearwater-bench.png',
    summary:
      'A forest-edge staging area for wildfire-monitoring pilots, linking satellite products with on-the-ground fuel and smoke observations.',
    activities: ['Wildfire EO pilots', 'Field validation', 'Partner briefings'],
  },
  {
    id: 'redwillow-range',
    name: 'Redwillow Range Staging Ground',
    region: 'Peace Country',
    nearestTown: 'Hythe',
    lat: 55.3416,
    lng: -119.6124,
    image: 'locations/loc-redwillow-range.png',
    summary:
      'A remote northern staging pad for cold-weather hardware shakedowns and winter operations training with industry and college partners.',
    activities: ['Cold-weather trials', 'Logistics drills', 'College co-ops'],
  },
  {
    id: 'sand-river-spur',
    name: 'Sand River Spur Relay Point',
    region: 'Lakeland',
    nearestTown: 'Cold Lake',
    lat: 54.7122,
    lng: -110.2148,
    image: 'locations/loc-sand-river-spur.png',
    summary:
      'A spare gravel spur used for mobile ground-segment pop-ups and connectivity experiments serving remote communities.',
    activities: ['Mobile ground stations', 'Connectivity pilots', 'Community demos'],
  },
  {
    id: 'birch-mountains-overlook',
    name: 'Birch Mountains Overlook',
    region: 'Northeast Alberta',
    nearestTown: 'Fort McKay',
    lat: 57.6125,
    lng: -112.0841,
    image: 'locations/loc-birch-mountains.png',
    summary:
      'A boreal overlook for northern Earth-observation showcases and conversations with communities about land, water, and industrial monitoring.',
    activities: ['Northern EO showcases', 'Community sessions', 'Partner tours'],
  },
  {
    id: 'edmonton-hub',
    name: 'Edmonton Program Hub',
    region: 'Capital Region',
    nearestTown: 'Edmonton',
    lat: 53.5461,
    lng: -113.4938,
    image: 'locations/loc-edmonton-hub.png',
    summary:
      "Urban convening point for industry nights, student meetups, and partnership conversations — the city counterpart to the program's remote field sites.",
    activities: ['Industry nights', 'Student meetups', 'Partner briefings'],
  },
]

export function mapsExternalUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps?q=${lat},${lng}`
}
