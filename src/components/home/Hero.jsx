import Image from '../common/Image'
import Button from '../common/Button'
import { images } from '../../data/images'

export default function Hero() {
  return (
    <section className="relative flex h-[calc(100svh-118px)] min-h-[560px] max-h-[980px] items-end overflow-hidden">
      <Image
        id={images.hero}
        alt="A light-filled contemporary living room with cream sofas, a natural timber block coffee table and an olive tree by the window"
        priority
        className="absolute inset-0"
        imgClassName="scale-[1.02]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/50 to-charcoal/10 sm:bg-gradient-to-r sm:from-charcoal/65 sm:via-charcoal/25 sm:to-transparent"
        aria-hidden="true"
      />

      <div className="container-wide relative pb-14 sm:pb-20 lg:pb-24">
        <div className="max-w-[640px] text-ivory">
          <p className="eyebrow animate-fade-up text-ivory/80">Nestora House · Designed for living</p>
          <h1 className="display-xl mt-6 animate-fade-up [animation-delay:120ms]">
            Spaces Worth <em className="font-normal italic text-ivory">Coming Home</em> To.
          </h1>
          <p className="mt-7 max-w-[520px] animate-fade-up text-[16px] leading-relaxed text-ivory/85 [animation-delay:240ms] sm:text-[17px]">
            Discover thoughtfully designed furniture and bespoke pieces created to bring comfort, character and timeless
            elegance into your home.
          </p>
          <div className="mt-10 flex animate-fade-up flex-col gap-3 [animation-delay:360ms] sm:flex-row">
            <Button to="/shop" variant="light" arrow>
              Explore the Collection
            </Button>
            <Button to="/bespoke" variant="ghostLight">
              Create Your Custom Piece
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
