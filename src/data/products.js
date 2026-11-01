/**
 * Demonstration product catalogue.
 *
 * Prices are in South African Rand (whole rands) and are placeholders — edit
 * `price` freely. Material `priceDelta` values are added to the base price.
 * `images` are keys from the Unsplash library (see ./images.js); colours may
 * set `image` (an index into `images`) to switch the gallery when selected.
 *
 * This shape mirrors the planned database table, so it can later be replaced
 * by a fetch from Supabase without changing the components.
 */

// Shared finish palettes keep naming consistent across the catalogue.
const upholstery = {
  oat: { name: 'Oat Linen', hex: '#D9CDBA' },
  ivory: { name: 'Ivory Bouclé', hex: '#EEE8DC' },
  stone: { name: 'Stone Weave', hex: '#B9B1A3' },
  clay: { name: 'Clay', hex: '#B07F5E' },
  olive: { name: 'Olive', hex: '#6F735F' },
  charcoal: { name: 'Charcoal', hex: '#3A3833' },
  moss: { name: 'Moss Velvet', hex: '#2F5245' },
  cognac: { name: 'Cognac Leather', hex: '#9A5B34' },
  mustard: { name: 'Ochre Velvet', hex: '#B8862E' },
  mist: { name: 'Mist Blue', hex: '#9DB1C4' },
}

const timber = {
  oak: { name: 'Natural Oak', hex: '#C9A97C' },
  smoked: { name: 'Smoked Oak', hex: '#6B4E36' },
  walnut: { name: 'Walnut', hex: '#5C3D2A' },
  ash: { name: 'Whitewashed Ash', hex: '#E1D6C4' },
  black: { name: 'Ebonised Oak', hex: '#2B2723' },
}

const stone = {
  travertine: { name: 'Travertine', hex: '#D8C8AE' },
  marble: { name: 'Bianco Marble', hex: '#ECE9E3' },
}

const m = (name, priceDelta = 0) => ({ name, priceDelta })

export const products = [
  // ─── LIVING ROOM ────────────────────────────────────────────────────────
  {
    id: 'nh-001',
    slug: 'haven-modular-sofa',
    name: 'The Haven Modular Sofa',
    category: 'living-room',
    type: 'Sectional Sofas',
    price: 28500,
    description:
      'A deep, low-slung modular sofa with feather-wrapped cushions and a generous chaise. Configure it as a corner, an L-shape or a long straight run — the Haven is designed to grow and shift with your living space.',
    images: ['1616486338812-3dadae4b4ace', '1601084881623-cdf9a8ea242c', '1618221639244-c1a8502c0eb9'],
    materials: [m('Performance Linen'), m('Bouclé', 2400), m('Washed Cotton Velvet', 3200)],
    colours: [upholstery.oat, upholstery.ivory, upholstery.stone, upholstery.olive],
    dimensions: { width: 320, depth: 175, height: 78, seatHeight: 42 },
    featured: true,
    bestseller: true,
    isNew: false,
    availability: 'Made to order · 6–8 weeks',
  },
  {
    id: 'nh-002',
    slug: 'solace-three-seater',
    name: 'The Solace Three-Seater',
    category: 'living-room',
    type: 'Three-Seater Sofas',
    price: 19800,
    description:
      'Clean architectural lines softened by a relaxed, loose-cushion seat. The Solace sits on a slim kiln-dried hardwood frame with tapered oak feet for a lighter footprint.',
    images: ['1578500494198-246f612d3b3d', '1519961655809-34fa156820ff'],
    materials: [m('Performance Linen'), m('Brushed Suede', 1800)],
    colours: [upholstery.clay, upholstery.oat, upholstery.charcoal],
    dimensions: { width: 230, depth: 95, height: 80, seatHeight: 44 },
    featured: true,
    bestseller: false,
    isNew: true,
    availability: 'In stock · Delivery in 7–10 days',
  },
  {
    id: 'nh-003',
    slug: 'mira-two-seater',
    name: 'The Mira Two-Seater',
    category: 'living-room',
    type: 'Two-Seater Sofas',
    price: 14900,
    description:
      'A compact, mid-century inspired two-seater with buttoned back cushions and a tailored silhouette. Ideal for apartments, studies and reading corners.',
    images: ['1555041469-a586c61ea9bc', '1550254478-ead40cc54513'],
    materials: [m('Cotton Velvet'), m('Performance Linen', -600)],
    colours: [upholstery.moss, upholstery.oat, upholstery.charcoal],
    dimensions: { width: 172, depth: 88, height: 82, seatHeight: 45 },
    featured: false,
    bestseller: false,
    isNew: false,
    availability: 'In stock · Delivery in 7–10 days',
  },
  {
    id: 'nh-004',
    slug: 'cove-leather-sofa',
    name: 'The Cove Leather Sofa',
    category: 'living-room',
    type: 'Three-Seater Sofas',
    price: 32900,
    description:
      'Full-grain aniline leather that softens and deepens in character with every year of use. Three plump seat cushions rest on a walnut-stained solid timber base.',
    images: ['1540574163026-643ea20ade25', '1600210492493-0946911123ea'],
    materials: [m('Aniline Leather'), m('Semi-Aniline Leather', -2500)],
    colours: [upholstery.cognac, { name: 'Espresso Leather', hex: '#4A3326' }],
    dimensions: { width: 225, depth: 92, height: 79, seatHeight: 43 },
    featured: true,
    bestseller: true,
    isNew: false,
    availability: 'Made to order · 8–10 weeks',
  },
  {
    id: 'nh-005',
    slug: 'meridian-corner-sectional',
    name: 'The Meridian Corner Sectional',
    category: 'living-room',
    type: 'Sectional Sofas',
    price: 34500,
    description:
      'An expansive corner sectional with a low back and wide arms that double as a perch. Built for family evenings and full-house gatherings.',
    images: ['1616047006789-b7af5afb8c20', '1616137466211-f939a420be84'],
    materials: [m('Brushed Suede'), m('Performance Linen', -1500)],
    colours: [upholstery.clay, upholstery.stone],
    dimensions: { width: 295, depth: 220, height: 76, seatHeight: 43 },
    featured: false,
    bestseller: false,
    isNew: true,
    availability: 'Made to order · 6–8 weeks',
  },
  {
    id: 'nh-006',
    slug: 'forma-accent-chair',
    name: 'The Forma Accent Chair',
    category: 'living-room',
    type: 'Accent Chairs',
    price: 8500,
    description:
      'A softly winged accent chair with a high, enveloping back and solid oak legs. Small enough for a bedroom corner, statement enough for the living room.',
    images: ['1634643836960-c345b3c3e998', '1634712282287-14ed57b9cc89'],
    materials: [m('Woven Wool Blend'), m('Bouclé', 900)],
    colours: [upholstery.stone, { ...upholstery.mist, image: 1 }],
    dimensions: { width: 78, depth: 82, height: 98, seatHeight: 44 },
    featured: true,
    bestseller: true,
    isNew: false,
    availability: 'In stock · Delivery in 7–10 days',
  },
  {
    id: 'nh-007',
    slug: 'lune-lounge-chair',
    name: 'The Lune Lounge Chair',
    category: 'living-room',
    type: 'Accent Chairs',
    price: 9800,
    description:
      'Deep button tufting and a gently curved back give the Lune a tailored, slightly couture feel. Finished with turned timber legs.',
    images: ['1616627547584-bf28cee262db', '1586023492125-27b2c045efd7'],
    materials: [m('Cotton Velvet'), m('Performance Linen', -700)],
    colours: [upholstery.mustard, upholstery.oat],
    dimensions: { width: 70, depth: 76, height: 86, seatHeight: 45 },
    featured: false,
    bestseller: false,
    isNew: true,
    availability: 'In stock · Delivery in 7–10 days',
  },
  {
    id: 'nh-008',
    slug: 'arlo-ottoman',
    name: 'The Arlo Ottoman',
    category: 'living-room',
    type: 'Ottomans',
    price: 4800,
    description:
      'A rounded upholstered ottoman that works as a footrest, a spare seat or a soft side table with a tray on top.',
    images: ['1550226891-ef816aed4a98', '1611967164521-abae8fba4668'],
    materials: [m('Bouclé'), m('Performance Linen', -400)],
    colours: [upholstery.mustard, upholstery.ivory, upholstery.stone],
    dimensions: { width: 60, depth: 60, height: 42 },
    featured: false,
    bestseller: true,
    isNew: false,
    availability: 'In stock · Delivery in 7–10 days',
  },

  // ─── BEDROOM ────────────────────────────────────────────────────────────
  {
    id: 'nh-009',
    slug: 'haven-king-bed',
    name: 'The Haven King Bed',
    category: 'bedroom',
    type: 'King Beds',
    price: 24500,
    description:
      'A grounded platform bed in solid oak with a low profile and softly radiused edges. Calm, honest and built to last for decades.',
    images: ['1617325247661-675ab4b64ae2', '1600607687644-c7171b42498f'],
    materials: [m('Solid Oak'), m('Solid Walnut', 4500)],
    colours: [timber.oak, timber.smoked],
    dimensions: { width: 200, depth: 225, height: 35, note: 'Fits a standard SA king mattress (183 × 188 cm)' },
    featured: true,
    bestseller: true,
    isNew: false,
    availability: 'Made to order · 6–8 weeks',
  },
  {
    id: 'nh-010',
    slug: 'sienna-upholstered-bed',
    name: 'The Sienna Upholstered Bed',
    category: 'bedroom',
    type: 'Queen Beds',
    price: 21000,
    description:
      'Channel-quilted from headboard to footboard, the Sienna wraps the mattress in soft upholstery for a hotel-suite feel at home.',
    images: ['1616594039964-ae9021a400a0', '1571508601891-ca5e7a713859'],
    materials: [m('Performance Linen'), m('Cotton Velvet', 1900)],
    colours: [upholstery.ivory, upholstery.stone, upholstery.charcoal],
    dimensions: { width: 172, depth: 215, height: 120, note: 'Fits a standard SA queen mattress (152 × 188 cm)' },
    featured: true,
    bestseller: false,
    isNew: true,
    availability: 'Made to order · 6–8 weeks',
  },
  {
    id: 'nh-011',
    slug: 'linden-queen-bed',
    name: 'The Linden Queen Bed',
    category: 'bedroom',
    type: 'Queen Beds',
    price: 17500,
    description:
      'A tall, softly winged headboard and slim upholstered base give the Linden a classic, gently tailored presence.',
    images: ['1588046130717-0eb0c9a3ba15', '1616486029423-aaa4789e8c9a'],
    materials: [m('Performance Linen'), m('Bouclé', 1600)],
    colours: [upholstery.ivory, upholstery.oat],
    dimensions: { width: 168, depth: 212, height: 135, note: 'Fits a standard SA queen mattress (152 × 188 cm)' },
    featured: false,
    bestseller: false,
    isNew: false,
    availability: 'Made to order · 6–8 weeks',
  },
  {
    id: 'nh-012',
    slug: 'arc-upholstered-headboard',
    name: 'The Arc Upholstered Headboard',
    category: 'bedroom',
    type: 'Upholstered Headboards',
    price: 7200,
    description:
      'Wall-mounted, horizontally panelled and generously padded. The Arc transforms an existing bed base into something considered.',
    images: ['1631049307264-da0ec9d70304', '1616627561950-9f746e330187'],
    materials: [m('Performance Linen'), m('Cotton Velvet', 1100)],
    colours: [upholstery.stone, upholstery.charcoal, upholstery.oat],
    dimensions: { width: 190, depth: 8, height: 110, note: 'Made to width for queen, king and super-king beds' },
    featured: false,
    bestseller: true,
    isNew: false,
    availability: 'Made to order · 4–5 weeks',
  },
  {
    id: 'nh-013',
    slug: 'oslo-bedside-table',
    name: 'The Oslo Bedside Table',
    category: 'bedroom',
    type: 'Bedside Tables',
    price: 3600,
    description:
      'A neat single-drawer bedside table on splayed legs, with an open shelf for books and evening rituals.',
    images: ['1522771739844-6a9f6d5f14af', '1532372320572-cda25653a26d'],
    materials: [m('Oak Veneer'), m('Solid Oak', 1200)],
    colours: [{ name: 'White & Oak', hex: '#EFEBE4' }, timber.oak],
    dimensions: { width: 45, depth: 38, height: 52 },
    featured: false,
    bestseller: false,
    isNew: false,
    availability: 'In stock · Delivery in 7–10 days',
  },
  {
    id: 'nh-014',
    slug: 'willow-bedside-table',
    name: 'The Willow Bedside Table',
    category: 'bedroom',
    type: 'Bedside Tables',
    price: 4200,
    description:
      'A round, pedestal-style bedside table with a hand-carved drawer front. Pairs naturally with rattan and natural linen.',
    images: ['1617098474202-0d0d7f60c56b', '1499933374294-4584851497cc'],
    materials: [m('Solid Mahogany'), m('Lacquered Ash', -300)],
    colours: [timber.walnut, { ...timber.ash, image: 1 }],
    dimensions: { width: 42, depth: 42, height: 55 },
    featured: false,
    bestseller: false,
    isNew: true,
    availability: 'In stock · Delivery in 7–10 days',
  },

  // ─── DINING ─────────────────────────────────────────────────────────────
  {
    id: 'nh-015',
    slug: 'oakline-dining-table',
    name: 'The Oakline Dining Table',
    category: 'dining',
    type: 'Dining Tables',
    price: 18500,
    description:
      'A substantial solid oak dining table with a softly bevelled edge and a trestle-inspired base. Seats eight comfortably, ten at a squeeze.',
    images: ['1615066390971-03e4e1c36ddf', '1604578762246-41134e37f9cc'],
    materials: [m('Solid Oak'), m('Solid Walnut', 5200)],
    colours: [timber.oak, timber.smoked, timber.black],
    dimensions: { width: 220, depth: 100, height: 76 },
    featured: true,
    bestseller: true,
    isNew: false,
    availability: 'Made to order · 6–8 weeks',
  },
  {
    id: 'nh-016',
    slug: 'atelier-dining-chair',
    name: 'The Atelier Dining Chair',
    category: 'dining',
    type: 'Dining Chairs',
    price: 4200,
    description:
      'An upholstered dining chair with a gently wrapped back and solid ash legs. Comfortable enough to linger long after dessert.',
    images: ['1598300042247-d088f8ab3a91', '1616486701797-0f33f61038ec'],
    materials: [m('Woven Wool Blend'), m('Performance Linen', -300)],
    colours: [upholstery.stone, upholstery.oat, upholstery.charcoal],
    dimensions: { width: 52, depth: 56, height: 86, seatHeight: 47 },
    featured: true,
    bestseller: false,
    isNew: false,
    availability: 'In stock · Delivery in 7–10 days',
  },
  {
    id: 'nh-017',
    slug: 'sola-round-dining-table',
    name: 'The Sola Round Dining Table',
    category: 'dining',
    type: 'Dining Tables',
    price: 14800,
    description:
      'A sculptural pedestal base beneath a generous round top. Made for conversation — everyone at the table can see everyone else.',
    images: ['1615875474908-f403116f5287', '1533090481720-856c6e3c1fdc'],
    materials: [m('Limewashed Oak'), m('Travertine Top', 6500)],
    colours: [timber.ash, stone.travertine],
    dimensions: { width: 130, depth: 130, height: 75 },
    featured: false,
    bestseller: false,
    isNew: true,
    availability: 'Made to order · 6–8 weeks',
  },
  {
    id: 'nh-018',
    slug: 'cassia-dining-set',
    name: 'The Cassia Dining Set',
    category: 'dining',
    type: 'Dining Sets',
    price: 36500,
    description:
      'An oak dining table paired with six upholstered Cassia chairs. A complete, coordinated dining room in a single delivery.',
    images: ['1602872030219-ad2b9a54315c', '1544457070-4cd773b4d71e'],
    materials: [m('Table + 6 Chairs'), m('Table + 8 Chairs', 7800)],
    colours: [
      { name: 'Ivory & Oak', hex: '#EAE2D3' },
      { name: 'Stone & Smoked Oak', hex: '#8E8576' },
    ],
    dimensions: { width: 200, depth: 95, height: 76, note: 'Chair: W 50 × D 55 × H 82 cm' },
    featured: false,
    bestseller: true,
    isNew: false,
    availability: 'Made to order · 8–10 weeks',
  },
  {
    id: 'nh-019',
    slug: 'rowan-dining-chair',
    name: 'The Rowan Dining Chair',
    category: 'dining',
    type: 'Dining Chairs',
    price: 3900,
    description:
      'An all-timber chair with a curved backrest and pegged joinery. Simple, durable and quietly beautiful.',
    images: ['1611269154421-4e27233ac5c7', '1577140917170-285929fb55b7'],
    materials: [m('Solid Oak'), m('Solid Walnut', 900)],
    colours: [timber.oak, timber.walnut],
    dimensions: { width: 48, depth: 50, height: 80, seatHeight: 46 },
    featured: false,
    bestseller: false,
    isNew: false,
    availability: 'In stock · Delivery in 7–10 days',
  },

  // ─── TABLES & SURFACES ──────────────────────────────────────────────────
  {
    id: 'nh-020',
    slug: 'terra-coffee-table',
    name: 'The Terra Coffee Table',
    category: 'tables',
    type: 'Coffee Tables',
    price: 7900,
    description:
      'A low, sculpted coffee table with a waterfall profile and softened corners. Available in a cast-stone finish or honed travertine.',
    images: ['1616593871468-2a9452218369', '1550581190-9c1c48d21d6c'],
    materials: [m('Cast Stone'), m('Honed Travertine', 4800)],
    colours: [{ name: 'Chalk', hex: '#E7E1D6' }, stone.travertine],
    dimensions: { width: 120, depth: 60, height: 35 },
    featured: true,
    bestseller: true,
    isNew: false,
    availability: 'In stock · Delivery in 7–10 days',
  },
  {
    id: 'nh-021',
    slug: 'forma-side-table',
    name: 'The Forma Side Table',
    category: 'tables',
    type: 'Side Tables',
    price: 3800,
    description:
      'A C-shaped side table that slides beneath the sofa to hold a laptop, a coffee or a stack of books. Solid oak with a hidden magazine shelf.',
    images: ['1611486212557-88be5ff6f941', '1583847268964-b28dc8f51f92'],
    materials: [m('Solid Oak'), m('Solid Walnut', 700)],
    colours: [timber.oak, timber.walnut],
    dimensions: { width: 50, depth: 35, height: 60 },
    featured: false,
    bestseller: false,
    isNew: true,
    availability: 'In stock · Delivery in 7–10 days',
  },
  {
    id: 'nh-022',
    slug: 'nesta-nesting-tables',
    name: 'The Nesta Nesting Tables',
    category: 'tables',
    type: 'Side Tables',
    price: 5400,
    description: 'A set of three graduated tables that tuck neatly into one another. Fan them out when guests arrive.',
    images: ['1611486212355-d276af4581c0'],
    materials: [m('Walnut Veneer'), m('Solid Walnut', 1800)],
    colours: [timber.walnut, timber.oak],
    dimensions: { width: 48, depth: 40, height: 50, note: 'Largest table shown; set of three' },
    featured: false,
    bestseller: false,
    isNew: false,
    availability: 'In stock · Delivery in 7–10 days',
  },
  {
    id: 'nh-023',
    slug: 'alder-console-table',
    name: 'The Alder Console Table',
    category: 'tables',
    type: 'Console Tables',
    price: 9600,
    description:
      'A slender two-drawer console in solid oak on fine steel legs. Designed for entrance halls and the back of a floating sofa.',
    images: ['1530018607912-eff2daa1bac4', '1617104424032-b9bd6972d0e4'],
    materials: [m('Solid Oak'), m('Smoked Oak', 900)],
    colours: [timber.oak, timber.smoked],
    dimensions: { width: 140, depth: 35, height: 78 },
    featured: false,
    bestseller: true,
    isNew: false,
    availability: 'In stock · Delivery in 7–10 days',
  },
  {
    id: 'nh-024',
    slug: 'strata-tv-stand',
    name: 'The Strata TV Stand',
    category: 'tables',
    type: 'TV Stands',
    price: 12400,
    description:
      'A long, low media unit with push-to-open doors and cable management built in. Clean lines keep the focus on the room.',
    images: ['1616627781431-23b776aad6b2', '1493809842364-78817add7ffb'],
    materials: [m('Oak Veneer'), m('Solid Oak', 3600)],
    colours: [timber.oak, { name: 'Ivory Lacquer', hex: '#F1EDE5', image: 1 }],
    dimensions: { width: 180, depth: 42, height: 50 },
    featured: false,
    bestseller: false,
    isNew: true,
    availability: 'In stock · Delivery in 7–10 days',
  },

  // ─── HOME ACCESSORIES ───────────────────────────────────────────────────
  {
    id: 'nh-025',
    slug: 'halo-round-mirror',
    name: 'The Halo Round Mirror',
    category: 'accessories',
    type: 'Mirrors',
    price: 3200,
    description:
      'A generous round mirror framed in a slim band of natural oak. Bounces light deep into entrance halls and dining rooms.',
    images: ['1618220252344-8ec99ec624b1', '1556020685-ae41abfc9365'],
    materials: [m('Ø 80 cm'), m('Ø 100 cm', 900)],
    colours: [timber.oak, { name: 'Brushed Brass', hex: '#B08D57' }],
    dimensions: { width: 80, depth: 3, height: 80 },
    featured: false,
    bestseller: true,
    isNew: false,
    availability: 'In stock · Delivery in 3–5 days',
  },
  {
    id: 'nh-026',
    slug: 'sol-woven-mirror',
    name: 'The Sol Woven Mirror',
    category: 'accessories',
    type: 'Mirrors',
    price: 2800,
    description:
      'A hand-woven rattan frame around a round mirror. Adds warmth and texture above sideboards and consoles.',
    images: ['1618219908412-a29a1bb7b86e'],
    materials: [m('Natural Rattan')],
    colours: [{ name: 'Natural', hex: '#C8A877' }],
    dimensions: { width: 70, depth: 4, height: 70 },
    featured: false,
    bestseller: false,
    isNew: true,
    availability: 'In stock · Delivery in 3–5 days',
  },
  {
    id: 'nh-027',
    slug: 'alma-table-lamp',
    name: 'The Alma Table Lamp',
    category: 'accessories',
    type: 'Lamps',
    price: 2600,
    description:
      'A tripod oak base beneath a pleated linen drum shade. Casts a warm, diffused glow that softens any corner.',
    images: ['1517991104123-1d56a6e81ed9'],
    materials: [m('Oak & Linen')],
    colours: [
      { name: 'Natural Linen', hex: '#EDE3D0' },
      { name: 'Sand Linen', hex: '#CDBB9E' },
    ],
    dimensions: { width: 35, depth: 35, height: 58 },
    featured: false,
    bestseller: false,
    isNew: false,
    availability: 'In stock · Delivery in 3–5 days',
  },
  {
    id: 'nh-028',
    slug: 'arc-floor-lamp',
    name: 'The Arc Floor Lamp',
    category: 'accessories',
    type: 'Lamps',
    price: 4900,
    description:
      'A powder-coated steel floor lamp with an adjustable dome shade. Precise task lighting for reading chairs and desks.',
    images: ['1507473885765-e6ed057f782c'],
    materials: [m('Powder-coated Steel')],
    colours: [
      { name: 'Graphite', hex: '#55575A' },
      { name: 'Bone', hex: '#E8E2D6' },
    ],
    dimensions: { width: 40, depth: 60, height: 150 },
    featured: false,
    bestseller: false,
    isNew: false,
    availability: 'In stock · Delivery in 3–5 days',
  },
  {
    id: 'nh-029',
    slug: 'dune-woven-rug',
    name: 'The Dune Woven Rug',
    category: 'accessories',
    type: 'Rugs',
    price: 6800,
    description:
      'A finely woven rug with a softly faded border pattern and knotted fringe. Brings quiet texture underfoot.',
    images: ['1600166898405-da9535204843'],
    materials: [m('160 × 230 cm'), m('200 × 300 cm', 3400)],
    colours: [{ name: 'Sand & Gold', hex: '#CDBE9C' }],
    dimensions: { width: 160, depth: 230, height: 1 },
    featured: false,
    bestseller: false,
    isNew: true,
    availability: 'In stock · Delivery in 3–5 days',
  },
  {
    id: 'nh-030',
    slug: 'kiln-ceramic-vessels',
    name: 'Kiln Ceramic Vessels',
    category: 'accessories',
    type: 'Decorative Objects',
    price: 1450,
    description:
      'A set of four hand-thrown stoneware vessels with a speckled glaze and raw clay base. Each piece varies slightly.',
    images: ['1610701596007-11502861dcfa', '1612196808214-b8e1d6145a8c'],
    materials: [m('Glazed Stoneware')],
    colours: [{ name: 'Speckled Cream', hex: '#EDE6D9' }],
    dimensions: { width: 12, depth: 12, height: 14, note: 'Largest vessel shown; set of four' },
    featured: false,
    bestseller: true,
    isNew: false,
    availability: 'In stock · Delivery in 3–5 days',
  },
  {
    id: 'nh-031',
    slug: 'stem-bud-vases',
    name: 'Stem Bud Vases',
    category: 'accessories',
    type: 'Decorative Objects',
    price: 890,
    description: 'Matte porcelain bud vases for a single branch or a few dried stems. Sold as a pair.',
    images: ['1490312278390-ab64016e0aa9', '1581783342308-f792dbdd27c5'],
    materials: [m('Matte Porcelain')],
    colours: [{ name: 'Chalk White', hex: '#F2F0EB' }],
    dimensions: { width: 9, depth: 9, height: 22 },
    featured: false,
    bestseller: false,
    isNew: false,
    availability: 'In stock · Delivery in 3–5 days',
  },
]

/** Shared copy for product detail sections, keyed by collection. */
export const productCare = {
  'living-room': {
    craftsmanship:
      'Frames are built from kiln-dried hardwood and engineered timber, corner-blocked and glued for strength. Seat cushions combine high-resilience foam with a feather-and-fibre wrap for comfort that holds its shape.',
    care: 'Plump and rotate cushions weekly. Vacuum upholstery with a soft brush attachment. Blot spills immediately with a clean, dry cloth and keep out of prolonged direct sunlight.',
  },
  bedroom: {
    craftsmanship:
      'Bed frames are constructed with reinforced centre rails and solid timber slats. Upholstered pieces are hand-finished, with seams and panels aligned by hand.',
    care: 'Dust timber with a soft dry cloth. Vacuum upholstered headboards regularly and spot-clean with a mild, water-based upholstery cleaner after testing on a hidden area.',
  },
  dining: {
    craftsmanship:
      'Tabletops are selected for grain and finished with a hard-wearing, food-safe oil or lacquer. Chairs use traditional mortise-and-tenon joints for long-term stability.',
    care: 'Use coasters and placemats. Wipe with a damp cloth and dry immediately. Re-oil oiled finishes once or twice a year to maintain their depth and protection.',
  },
  tables: {
    craftsmanship:
      'Each surface is chosen for its natural character. Stone is honed and sealed; timber is sanded through progressive grits before finishing by hand.',
    care: 'Natural stone is porous — wipe spills promptly, avoid acidic cleaners and reseal annually. Timber should be kept away from direct heat sources.',
  },
  accessories: {
    craftsmanship:
      'Our accessories are made in small batches with natural materials, so slight variations in colour, glaze and texture are part of their character.',
    care: 'Dust gently with a soft dry cloth. Rugs should be vacuumed regularly without a beater bar and professionally cleaned when required.',
  },
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCollection(slug) {
  return products.filter((p) => p.category === slug)
}

export function getFeaturedProducts(limit = 8) {
  return products.filter((p) => p.featured).slice(0, limit)
}

export function getRelatedProducts(product, limit = 4) {
  const sameCategory = products.filter((p) => p.category === product.category && p.id !== product.id)
  const others = products.filter((p) => p.category !== product.category && p.bestseller)
  return [...sameCategory, ...others].slice(0, limit)
}

export function searchProducts(query, list = products) {
  const q = query.trim().toLowerCase()
  if (!q) return list
  return list.filter((p) =>
    [p.name, p.type, p.category, p.description, ...p.materials.map((x) => x.name), ...p.colours.map((c) => c.name)]
      .join(' ')
      .toLowerCase()
      .includes(q),
  )
}
