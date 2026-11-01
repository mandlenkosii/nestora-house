import { useState } from 'react'
import PageHero from '../components/common/PageHero'
import Image from '../components/common/Image'
import Button from '../components/common/Button'
import DemoNotice from '../components/common/DemoNotice'
import { projectCategories, projects } from '../data/projects'
import { images } from '../data/images'
import { usePageTitle } from '../hooks/usePageTitle'

function ProjectCard({ project, index }) {
  const [active, setActive] = useState(0)
  const wide = index % 3 === 0
  return (
    <article id={project.id} className={`scroll-mt-28 ${wide ? 'md:col-span-2' : ''}`}>
      <div className={`relative overflow-hidden bg-ivory ${wide ? 'aspect-[4/3] md:aspect-[21/9]' : 'aspect-[4/3]'}`}>
        {project.images.map((id, i) => (
          <Image
            key={id}
            id={id}
            alt={`${project.name} — photograph ${i + 1}`}
            sizes={wide ? '100vw' : '(min-width: 768px) 50vw, 100vw'}
            className={`absolute inset-0 transition-opacity duration-700 ${i === active ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        {project.images.length > 1 && (
          <div className="absolute bottom-4 right-4 flex gap-1.5">
            {project.images.map((id, i) => (
              <button
                key={id}
                onClick={() => setActive(i)}
                aria-label={`Show photograph ${i + 1} of ${project.name}`}
                aria-pressed={i === active}
                className={`h-8 w-8 text-[11px] transition-colors ${i === active ? 'bg-ivory-light text-charcoal' : 'bg-charcoal/50 text-ivory hover:bg-charcoal/70'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className={`mt-5 grid gap-3 ${wide ? 'md:grid-cols-[1fr_1.2fr] md:gap-12' : ''}`}>
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-taupe">
            {project.category} · {project.location}
          </p>
          <h2 className="mt-2 font-serif text-3xl">{project.name}</h2>
        </div>
        <p className="text-[15px] leading-relaxed text-taupe">{project.description}</p>
      </div>
    </article>
  )
}

export default function Projects() {
  usePageTitle('Our Projects')
  const [category, setCategory] = useState('All')
  const visible = category === 'All' ? projects : projects.filter((p) => p.category === category)

  return (
    <>
      <PageHero
        image={images.collectionLiving}
        alt="A warm, contemporary living room with timber accents and floor-to-ceiling windows"
        eyebrow="Our projects"
        title="Interiors, considered."
        description="A portfolio of rooms furnished and made by Nestora House — from calm family homes to fully bespoke installations."
      />

      <section className="container-wide py-16 lg:py-24">
        <div className="flex flex-col gap-6 border-b border-charcoal/10 pb-6 md:flex-row md:items-center md:justify-between">
          <div role="tablist" aria-label="Filter projects by category" className="-mx-1 flex flex-wrap gap-2">
            {projectCategories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={c === category}
                onClick={() => setCategory(c)}
                className={`mx-1 border px-4 py-2 text-[12px] uppercase tracking-[0.14em] transition-colors ${c === category ? 'border-charcoal bg-charcoal text-ivory' : 'border-charcoal/20 hover:border-charcoal'}`}
              >
                {c}
              </button>
            ))}
          </div>
          <DemoNotice>Demonstration projects with illustrative photography.</DemoNotice>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-20 md:grid-cols-2">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      <section className="bg-ivory py-24 text-center">
        <div className="container-wide">
          <h2 className="display-md mx-auto max-w-2xl">Planning a project of your own?</h2>
          <p className="mx-auto mt-5 max-w-xl text-taupe">
            Whether it’s a single room or a full development, we’d love to hear about it.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/bespoke#quote">Start a bespoke project</Button>
            <Button to="/trade" variant="outline">
              Trade enquiries
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
