import { useId } from 'react'
import { ChevronDown } from 'lucide-react'

function Field({ label, error, hint, optional, children, id, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-[11px] font-medium uppercase tracking-[0.18em] text-taupe">
        {label}
        {optional && <span className="ml-2 normal-case tracking-normal text-taupe/70">(optional)</span>}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-[12px] text-red-800" role="alert">
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${id}-hint`} className="mt-2 text-[12px] text-taupe/80">
            {hint}
          </p>
        )
      )}
    </div>
  )
}

function useFieldProps({ name, error, hint }) {
  const id = `${useId()}-${name}`
  return {
    id,
    a11y: {
      id,
      name,
      'aria-invalid': error ? 'true' : undefined,
      'aria-describedby': error ? `${id}-error` : hint ? `${id}-hint` : undefined,
    },
  }
}

export function TextField({ label, name, error, hint, optional, className, type = 'text', ...props }) {
  const { id, a11y } = useFieldProps({ name, error, hint })
  return (
    <Field label={label} error={error} hint={hint} optional={optional} id={id} className={className}>
      <input type={type} className="field-input" {...a11y} {...props} />
    </Field>
  )
}

export function TextAreaField({ label, name, error, hint, optional, className, rows = 5, ...props }) {
  const { id, a11y } = useFieldProps({ name, error, hint })
  return (
    <Field label={label} error={error} hint={hint} optional={optional} id={id} className={className}>
      <textarea rows={rows} className="field-input resize-y" {...a11y} {...props} />
    </Field>
  )
}

export function SelectField({
  label,
  name,
  error,
  hint,
  optional,
  className,
  options,
  placeholder = 'Please select',
  ...props
}) {
  const { id, a11y } = useFieldProps({ name, error, hint })
  return (
    <Field label={label} error={error} hint={hint} optional={optional} id={id} className={className}>
      <div className="relative">
        <select
          className={`field-input cursor-pointer appearance-none pr-8 ${props.value ? '' : 'text-taupe/60'}`}
          {...a11y}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="text-charcoal">
              {o}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          strokeWidth={1.4}
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-taupe"
        />
      </div>
    </Field>
  )
}
