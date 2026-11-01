import { testimonials } from '../../data/testimonials'
import DemoNotice from '../common/DemoNotice'

export default function Testimonials() {
  return (
    <section className="bg-olive py-24 text-ivory lg:py-32">
      <div className="container-wide">
        <p className="eyebrow text-center text-ivory/70">In their words</p>
        <ul className="mt-14 grid gap-14 lg:grid-cols-3 lg:gap-12">
          {testimonials.map((t, i) => (
            <li key={i} className="flex flex-col border-t border-ivory/25 pt-8">
              <blockquote className="flex-1 font-serif text-[1.6rem] leading-snug">“{t.quote}”</blockquote>
              <p className="mt-8 text-[12px] uppercase tracking-[0.18em] text-ivory/70">
                {t.name} — {t.detail}
              </p>
            </li>
          ))}
        </ul>
        <DemoNotice light className="mt-12 justify-center">
          Placeholder testimonials for demonstration purposes — not verified customer reviews.
        </DemoNotice>
      </div>
    </section>
  )
}
