import { Link } from 'react-router-dom'
import Image from '../common/Image'
import SectionHeading from '../common/SectionHeading'
import { TextLink } from '../common/Button'
import DemoNotice from '../common/DemoNotice'
import { homeProjectIds, projects } from '../../data/projects'

const spans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7']

export default function ProjectsPreview() {
  const featured = homeProjectIds.map((id) => projects.find((p) => p.id === id))
  return (
    <section className="bg-ivory/60 py-24 lg:py-32">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our projects"
          title="Rooms we love"
          description="A look at how Nestora pieces come together in complete interiors — from calm family living rooms to made-to-measure installations."
          action={<TextLink to="/projects">View all projects</TextLink>}
        />
        <div className="mt-14 grid gap-x-5 gap-y-10 lg:grid-cols-12">
          {featured.map((p, i) => (
            <Link key={p.id} to={`/projects#${p.id}`} className={`group block ${spans[i]}`}>
              <Image
                id={p.images[0]}
                alt={`${p.homeLabel} — ${p.name}`}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="h-[320px] sm:h-[440px] lg:h-[520px]"
                imgClassName="img-zoom"
              />
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl transition-colors group-hover:text-taupe">{p.name}</h3>
                <p className="shrink-0 text-[11px] font-medium uppercase tracking-[0.18em] text-taupe">{p.homeLabel}</p>
              </div>
            </Link>
          ))}
        </div>
        <DemoNotice className="mt-10">Demonstration projects shown with illustrative photography.</DemoNotice>
      </div>
    </section>
  )
}
