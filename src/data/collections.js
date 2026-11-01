import { images } from './images'

/**
 * Collections drive the collection routes, navigation, mega menu and the
 * homepage category cards. `types` are the sub-categories used by filters
 * and must match the `type` field on products.
 */
export const collections = [
  {
    slug: 'living-room',
    name: 'Living Room',
    shortName: 'Living',
    tagline: 'Gathered, grounded, made for lingering.',
    description:
      'Generous sofas, sculpted accent chairs and soft ottomans, shaped for long conversations and slow Sunday afternoons.',
    image: images.collectionLiving,
    types: ['Sectional Sofas', 'Two-Seater Sofas', 'Three-Seater Sofas', 'Accent Chairs', 'Ottomans'],
  },
  {
    slug: 'bedroom',
    name: 'Bedroom',
    shortName: 'Bedroom',
    tagline: 'Quiet rooms for restful days.',
    description:
      'Upholstered beds, tailored headboards and considered bedside pieces that turn the bedroom into a retreat.',
    image: images.collectionBedroom,
    types: ['King Beds', 'Queen Beds', 'Upholstered Headboards', 'Bedside Tables'],
  },
  {
    slug: 'dining',
    name: 'Dining',
    shortName: 'Dining',
    tagline: 'Tables worth gathering around.',
    description:
      'Solid timber tables and comfortable, upholstered chairs for everyday meals and long, unhurried dinners.',
    image: images.collectionDining,
    types: ['Dining Tables', 'Dining Chairs', 'Dining Sets'],
  },
  {
    slug: 'tables',
    name: 'Tables & Surfaces',
    shortName: 'Tables',
    tagline: 'Surfaces with presence.',
    description:
      'Coffee, side and console tables in stone, timber and oak veneers. Grounding pieces that anchor a room.',
    image: images.collectionTables,
    types: ['Coffee Tables', 'Side Tables', 'Console Tables', 'TV Stands'],
  },
  {
    slug: 'accessories',
    name: 'Home Accessories',
    shortName: 'Accessories',
    tagline: 'The finishing layer.',
    description: 'Mirrors, lighting, rugs and handmade objects that complete a space and give it a sense of character.',
    image: images.collectionAccessories,
    types: ['Mirrors', 'Lamps', 'Rugs', 'Decorative Objects'],
  },
]

export function getCollection(slug) {
  return collections.find((c) => c.slug === slug)
}

/** The bespoke service is shown alongside collections on the homepage. */
export const bespokeCard = {
  name: 'Bespoke Furniture',
  tagline: 'Made around your vision.',
  image: images.workshopTools,
  to: '/bespoke',
}
