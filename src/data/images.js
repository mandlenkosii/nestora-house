/**
 * Central image library.
 *
 * Every photograph on the site is referenced from here, so replacing the
 * demonstration photography with Nestora House's own product shoots means
 * editing this one file. Values are Unsplash photo IDs (royalty-free under
 * the Unsplash License). To use local assets later, swap the `img()` helper
 * for an import or a path in /public.
 */

const UNSPLASH = 'https://images.unsplash.com/photo-'

export function img(id, width = 1200, quality = 75) {
  if (!id) return ''
  if (id.startsWith('http') || id.startsWith('/')) return id
  return `${UNSPLASH}${id}?auto=format&fit=crop&w=${width}&q=${quality}`
}

/** Responsive srcSet for large editorial images. */
export function srcSet(id, widths = [640, 960, 1400, 2000]) {
  if (!id || id.startsWith('/')) return undefined
  return widths.map((w) => `${img(id, w)} ${w}w`).join(', ')
}

export const images = {
  // Brand & editorial
  hero: '1633505899118-4ca6bd143043',
  intro: '1632829882891-5047ccc421bc',
  philosophy: '1601084881623-cdf9a8ea242c',
  workshopTools: '1426927308491-6380b6a9936f',
  workshop: '1505798577917-a65157d3320a',
  craftedChair: '1549497538-303791108f95',
  bespokeJoinery: '1622372738946-62e02505feb3',

  // Collection banners / homepage category cards
  collectionShop: '1600494448850-6013c64ba722',
  collectionLiving: '1618221195710-dd6b41faaea6',
  collectionBedroom: '1617098900591-3f90928e8c54',
  collectionDining: '1617806118233-18e1de247200',
  collectionTables: '1615874694520-474822394e73',
  collectionAccessories: '1617806265182-7b3f847f0b75',

  // Our Story
  storyHero: '1600566753086-00f18fb6b3ea',
  storyPhilosophy: '1604014237800-1c9102c219da',
  storyDesign: '1590725121839-892b458a74fe',
  storyMaterials: '1567225557594-88d73e55f2cb',
  storyVision: '1616137422495-1e9e46e2aa77',

  // Trade & commercial
  tradeHero: '1611892440504-42a792e24d32',
  tradeHotel: '1582719478250-c89cae4dc85b',
  tradeRestaurant: '1517248135467-4c7edcad34c4',
  tradeOffice: '1497366811353-6870744d04b2',
  tradeGuesthouse: '1631048730670-ff5cd0d08f15',

  // Bespoke inspiration gallery
  inspireSofa: '1631679706909-1844bbd07221',
  inspireSofaTwo: '1600607687939-ce8a6c25118c',
  inspireBed: '1560185893-a55cbc8c57e8',
  inspireDining: '1519710164239-da123dc03ef4',
  inspireChair: '1567538096630-e0c55bd6374c',
  inspireLiving: '1567767292278-a4f21aa2d36e',

  // Contact
  contact: '1600210491369-e753d80a41f3',
}
