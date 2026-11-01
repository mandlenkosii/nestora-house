export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
  light = false,
  className = '',
}) {
  const centered = align === 'center'
  return (
    <div
      className={`flex flex-col gap-6 ${centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'} ${className}`}
    >
      <div className={centered ? 'max-w-2xl' : 'max-w-2xl'}>
        {eyebrow && <p className={`eyebrow mb-4 ${light ? 'text-sand' : ''}`}>{eyebrow}</p>}
        <h2 className={`display-md ${light ? 'text-ivory' : ''}`}>{title}</h2>
        {description && (
          <p
            className={`mt-5 max-w-xl text-[15px] leading-relaxed ${light ? 'text-ivory/75' : 'text-taupe'} ${centered ? 'mx-auto' : ''}`}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
