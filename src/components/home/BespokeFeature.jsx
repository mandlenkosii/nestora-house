import Image from '../common/Image'
import Button from '../common/Button'
import { images } from '../../data/images'

const steps = ['Share your inspiration', 'Choose materials & finishes', 'We make it, by hand, for you']

export default function BespokeFeature() {
  return (
    <section className="overflow-hidden bg-charcoal text-ivory">
      <div className="container-wide grid items-center gap-16 py-24 lg:grid-cols-12 lg:gap-10 lg:py-32">
        <div className="relative lg:col-span-7">
          <Image
            id={images.workshopTools}
            alt="A wall of well-used woodworking hand tools in a furniture workshop"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[5/4] w-[86%]"
          />
          <Image
            id={images.craftedChair}
            alt="A handmade timber chair lit by a single spotlight"
            width={700}
            responsive={false}
            className="absolute -bottom-12 right-0 aspect-[4/5] w-[40%] border-[10px] border-charcoal"
          />
        </div>

        <div className="lg:col-span-5 lg:pl-10">
          <p className="eyebrow text-sand">Bespoke furniture</p>
          <h2 className="display-lg mt-6">Made around your vision.</h2>
          <p className="mt-8 text-[16px] leading-relaxed text-ivory/75">
            Some spaces call for something different. Discover our bespoke furniture service and create pieces tailored
            to your space, style and requirements.
          </p>
          <ol className="mt-10 space-y-4 border-t border-ivory/15 pt-8">
            {steps.map((s, i) => (
              <li key={s} className="flex items-baseline gap-5">
                <span className="font-serif text-lg italic text-sand">0{i + 1}</span>
                <span className="text-[15px] text-ivory/85">{s}</span>
              </li>
            ))}
          </ol>
          <Button to="/bespoke" variant="sand" arrow className="mt-12">
            Explore bespoke furniture
          </Button>
        </div>
      </div>
    </section>
  )
}
