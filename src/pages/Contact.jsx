import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Image from '../components/common/Image'
import ContactForm from '../components/forms/ContactForm'
import DemoNotice from '../components/common/DemoNotice'
import { TextLink } from '../components/common/Button'
import { images } from '../data/images'
import { site } from '../data/site'
import { usePageTitle } from '../hooks/usePageTitle'

const details = [
  { icon: Phone, label: 'Telephone', value: site.contact.phone },
  { icon: MessageCircle, label: 'WhatsApp', value: site.contact.whatsapp },
  { icon: Mail, label: 'Email', value: site.contact.email },
  { icon: MapPin, label: 'Showroom', value: site.contact.address },
  { icon: Clock, label: 'Hours', value: site.contact.hours },
]

export default function Contact() {
  usePageTitle('Contact')
  return (
    <>
      <section className="container-wide grid gap-14 pb-20 pt-16 lg:grid-cols-12 lg:pb-28 lg:pt-24">
        <div className="lg:col-span-5">
          <p className="eyebrow">Contact</p>
          <h1 className="display-lg mt-6">We’d love to hear from you.</h1>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-taupe">
            Questions about a piece, an order or a bespoke idea? Send us a message and a member of our team will respond
            within one business day.
          </p>

          <ul className="mt-12 divide-y divide-charcoal/10 border-y border-charcoal/10">
            {details.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-center gap-5 py-4">
                <Icon size={18} strokeWidth={1.3} className="text-taupe" aria-hidden="true" />
                <span className="w-24 text-[11px] uppercase tracking-[0.18em] text-taupe">{label}</span>
                <span className="text-[14px]">{value}</span>
              </li>
            ))}
          </ul>
          <DemoNotice className="mt-4">Contact details are placeholders and will be updated before launch.</DemoNotice>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="bg-ivory p-7 sm:p-10">
            <h2 className="font-serif text-3xl">Send a message</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory/60">
        <div className="container-wide grid gap-px py-20 lg:grid-cols-3 lg:gap-12">
          <div className="py-6">
            <h2 className="font-serif text-2xl">Customer support</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-taupe">
              Help with existing orders, delivery scheduling, product care and after-sales questions. Please have your
              order reference to hand.
            </p>
            <TextLink to="/info/delivery" className="mt-5">
              Delivery &amp; returns
            </TextLink>
          </div>
          <div className="py-6">
            <h2 className="font-serif text-2xl">Bespoke enquiries</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-taupe">
              Planning a made-to-measure piece? Our quotation form lets you share dimensions, materials and inspiration
              images.
            </p>
            <TextLink to="/bespoke#quote" className="mt-5">
              Request a quotation
            </TextLink>
          </div>
          <div className="py-6">
            <h2 className="font-serif text-2xl">Business &amp; trade</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-taupe">
              Hotels, guesthouses, restaurants, offices, developers and interior designers — speak to our trade team
              about volume orders and custom specifications.
            </p>
            <TextLink to="/trade#enquire" className="mt-5">
              Trade enquiries
            </TextLink>
          </div>
        </div>
      </section>

      <Image
        id={images.contact}
        alt="A softly lit living room with a white sofa and gallery wall"
        className="h-[300px] sm:h-[420px]"
      />
    </>
  )
}
