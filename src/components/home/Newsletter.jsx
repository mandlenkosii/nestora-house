import NewsletterForm from '../forms/NewsletterForm'

export default function Newsletter() {
  return (
    <section className="bg-ivory py-24 lg:py-28">
      <div className="container-wide grid items-end gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">The Nestora letter</p>
          <h2 className="display-lg mt-6">A little inspiration for your home.</h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-taupe">
            New collections, styling notes and the occasional early invitation — sent thoughtfully, never often.
          </p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  )
}
