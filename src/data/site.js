/**
 * Site-wide copy and contact details.
 * Contact values are intentionally placeholders — replace with real details.
 */
export const site = {
  name: 'Nestora House',
  tagline: 'Designed for living.',
  announcement: 'Thoughtfully designed furniture. Delivered across South Africa.',
  intro:
    'A contemporary furniture and interior lifestyle brand creating thoughtfully designed pieces and bespoke furniture for homes and commercial spaces across South Africa.',
  contact: {
    phone: '[Phone number]',
    whatsapp: '[WhatsApp number]',
    email: '[Email address]',
    tradeEmail: '[Trade email address]',
    address: '[Showroom address]',
    hours: '[Business hours]',
  },
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Pinterest', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
}

export const mainNav = [
  { label: 'Shop', to: '/shop', mega: true },
  { label: 'Living', to: '/collections/living-room' },
  { label: 'Bedroom', to: '/collections/bedroom' },
  { label: 'Dining', to: '/collections/dining' },
  { label: 'Bespoke', to: '/bespoke' },
  { label: 'Our Story', to: '/our-story' },
]

export const secondaryNav = [
  { label: 'Our Projects', to: '/projects' },
  { label: 'Trade & Commercial', to: '/trade' },
  { label: 'Contact', to: '/contact' },
]

export const budgetRanges = [
  'Under R10,000',
  'R10,000 – R25,000',
  'R25,000 – R50,000',
  'R50,000 – R100,000',
  'R100,000 – R250,000',
  'R250,000+',
]
