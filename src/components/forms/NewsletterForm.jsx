import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { isEmail } from '../../utils/validation'
import { subscribeToNewsletter } from '../../services/enquiries'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle')

  const submit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return setError('Please enter your email address.')
    if (!isEmail(email)) return setError('That doesn’t look like a valid email address.')
    setError('')
    setStatus('submitting')
    await subscribeToNewsletter(email.trim())
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div role="status" className="animate-fade-up border-b border-charcoal/30 pb-5">
        <p className="flex items-center gap-3 font-serif text-2xl">
          <Check size={20} strokeWidth={1.4} /> Thank you for subscribing.
        </p>
        <p className="mt-2 text-[13px] text-taupe">
          We’ll be in touch with <span className="text-charcoal">{email}</span>. (Demonstration — no email has been
          sent.)
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div
        className={`flex items-center border-b pb-1 transition-colors ${error ? 'border-red-800/70' : 'border-charcoal/40 focus-within:border-charcoal'}`}
      >
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError('')
          }}
          placeholder="Your email address"
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? 'newsletter-error' : undefined}
          className="w-full bg-transparent py-3 font-serif text-xl placeholder:text-taupe/60 focus:outline-none sm:text-2xl"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex shrink-0 items-center gap-3 py-3 pl-4 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-taupe disabled:opacity-50"
        >
          {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
          <ArrowRight size={14} strokeWidth={1.5} />
        </button>
      </div>
      {error && (
        <p id="newsletter-error" role="alert" className="mt-2 text-[12px] text-red-800">
          {error}
        </p>
      )}
      <p className="mt-4 text-[12px] text-taupe">
        By subscribing you agree to receive occasional emails. Unsubscribe at any time.
      </p>
    </form>
  )
}
