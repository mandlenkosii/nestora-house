import PageHero from '../components/common/PageHero'
import Button from '../components/common/Button'
import Image from '../components/common/Image'
import SectionHeading from '../components/common/SectionHeading'
import ProcessSteps from '../components/bespoke/ProcessSteps'
import InspirationGallery from '../components/bespoke/InspirationGallery'
import QuoteForm from '../components/bespoke/QuoteForm'
import { images } from '../data/images'
import { site } from '../data/site'
import { usePageTitle } from '../hooks/usePageTitle'

const offerings = [
  ['Made to measure', 'Sized precisely for alcoves, bay windows, open-plan rooms and awkward corners.'],
  ['Your materials', 'Choose from our timbers, stones, fabrics and leathers — or supply your own (COM).'],
  ['Residential & commercial', 'From a single statement piece to furnishing an entire guesthouse.'],
]

export default function Bespoke() {
  usePageTitle('Bespoke Furniture')
  return (
    <>
      <PageHero
        image={images.bespokeJoinery}
        alt="Custom timber joinery with a ribbed oak island and glass-fronted display cabinet"
        eyebrow="Bespoke furniture"
        title="Your vision. Our craftsmanship."
        description="From the first inspiration to the final detail, we create furniture designed around your space, preferences and lifestyle."
        height="lg"
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button to="/bespoke#quote" variant="light" arrow>
            Request a quotation
          </Button>
          <Button to="/bespoke#process" variant="ghostLight">
            How it works
          </Button>
        </div>
      </PageHero>

      <section className="container-wide grid gap-14 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-5">
          <p className="eyebrow">Made for you</p>
          <h2 className="display-md mt-6">Furniture that fits — your room, your life, your taste.</h2>
          <p className="mt-6 text-[16px] leading-relaxed text-taupe">
            Our bespoke service exists for the pieces you can’t find anywhere else: the sofa that fills a wall
            perfectly, the dining table that seats exactly twelve, the headboard in a fabric you fell in love with.
          </p>
          <ul className="mt-10 divide-y divide-charcoal/15 border-y border-charcoal/15">
            {offerings.map(([title, text]) => (
              <li key={title} className="py-5">
                <p className="font-serif text-xl">{title}</p>
                <p className="mt-1 text-[14px] text-taupe">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:col-span-6 lg:col-start-7">
          <Image
            id={images.workshop}
            alt="Craftsmen cutting timber in the workshop"
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="aspect-[3/4]"
          />
          <Image
            id={images.craftedChair}
            alt="A handmade timber chair"
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="mt-16 aspect-[3/4]"
          />
        </div>
      </section>

      <section id="process" className="scroll-mt-24 bg-ivory/60 py-24 lg:py-32">
        <div className="container-wide">
          <SectionHeading
            eyebrow="How it works"
            title="Five considered steps"
            description="A clear, collaborative process — so you know exactly what you are getting, and when."
          />
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="container-wide py-24 lg:py-32">
        <SectionHeading
          eyebrow="Inspiration"
          title="What we can make for you"
          description="Sofas, beds, dining tables, chairs and fitted joinery — each piece shaped by your brief."
        />
        <div className="mt-14">
          <InspirationGallery />
        </div>
        <p className="mt-6 text-[12px] text-taupe">Inspiration imagery is illustrative.</p>
      </section>

      <section id="quote" className="scroll-mt-24 border-t border-charcoal/10 bg-ivory-light py-24 lg:py-32">
        <div className="container-wide grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow">Request a quotation</p>
              <h2 className="display-md mt-6">Tell us about your piece.</h2>
              <p className="mt-6 text-[15px] leading-relaxed text-taupe">
                Share as much or as little as you know. We’ll come back to you with questions, material suggestions and
                an indicative price range.
              </p>
              <div className="mt-10 border-l border-sand pl-5 text-[13px] leading-relaxed text-taupe">
                <p className="text-charcoal">About pricing</p>
                <p className="mt-1">
                  Every bespoke piece is quoted individually. The final quotation will depend on your specifications,
                  chosen materials and manufacturing requirements.
                </p>
              </div>
              <p className="mt-8 text-[13px] text-taupe">Prefer to talk? WhatsApp us on {site.contact.whatsapp}.</p>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
