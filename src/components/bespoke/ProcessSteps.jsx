const steps = [
  {
    title: 'Share your inspiration',
    text: 'Send us photographs, sketches or a description of what you have in mind, along with the dimensions of your space.',
  },
  {
    title: 'Choose your materials and finishes',
    text: 'We guide you through timbers, stone, fabrics, leathers and finishes — with physical samples available on request.',
  },
  {
    title: 'Confirm your design and quotation',
    text: 'You receive a detailed drawing and a written quotation. Production begins only once you have approved both.',
  },
  {
    title: 'We manufacture your furniture',
    text: 'Your piece is made to order by skilled craftspeople, with progress updates shared along the way.',
  },
  {
    title: 'Quality checking and delivery',
    text: 'Every piece is inspected by hand before it is carefully wrapped, delivered and placed in your home.',
  },
]

export default function ProcessSteps() {
  return (
    <ol className="grid gap-px overflow-hidden bg-charcoal/15 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <li key={s.title} className="flex flex-col bg-ivory-light p-8 lg:min-h-[320px]">
          <span className="font-serif text-5xl italic text-sand">{String(i + 1).padStart(2, '0')}</span>
          <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-taupe">Step {i + 1}</p>
          <h3 className="mt-6 font-serif text-2xl leading-tight">{s.title}</h3>
          <p className="mt-4 text-[14px] leading-relaxed text-taupe">{s.text}</p>
        </li>
      ))}
    </ol>
  )
}
