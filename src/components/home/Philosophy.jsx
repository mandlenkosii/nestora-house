const pillars = [
  {
    title: 'Thoughtful design',
    text: 'Proportion, comfort and function come first. Every line has a reason to be there.',
  },
  {
    title: 'Quality materials',
    text: 'Kiln-dried hardwoods, natural stone, performance linens and full-grain leathers chosen to age well.',
  },
  {
    title: 'Craftsmanship',
    text: 'Pieces are finished by hand, with the kind of attention that only shows up over years of use.',
  },
  {
    title: 'Comfort',
    text: 'Deep seats, supportive cushions and generous scale. Furniture should invite you to stay.',
  },
  {
    title: 'Timeless aesthetics',
    text: 'A quiet, neutral language that outlasts trends and settles naturally into any home.',
  },
]

export default function Philosophy() {
  return (
    <section className="container-wide py-28 lg:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Our philosophy</p>
        <h2 className="display-lg mt-6">
          Designed with intention.
          <br />
          <em className="italic text-taupe">Made to be lived in.</em>
        </h2>
      </div>
      <ul className="mt-20 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
        {pillars.map((p, i) => (
          <li key={p.title} className="border-t border-charcoal/20 pt-6">
            <span className="font-serif text-lg italic text-taupe">0{i + 1}</span>
            <h3 className="mt-3 font-serif text-2xl">{p.title}</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-taupe">{p.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
