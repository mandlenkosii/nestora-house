import { site } from '../../data/site'

export default function AnnouncementBar() {
  return (
    <div className="bg-charcoal text-ivory">
      <p className="container-wide py-2.5 text-center text-[9.5px] tracking-[0.1em] uppercase sm:text-[11px] sm:tracking-[0.18em]">
        {site.announcement}
      </p>
    </div>
  )
}
