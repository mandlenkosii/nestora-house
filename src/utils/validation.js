const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
// South African numbers: 0XX XXX XXXX or +27 XX XXX XXXX (spaces, dashes and brackets allowed)
const PHONE_RE = /^(\+27|0)[1-9]\d{8}$/

export const isEmail = (v) => EMAIL_RE.test(String(v).trim())
export const isPhone = (v) => PHONE_RE.test(String(v).replace(/[\s\-()]/g, ''))

/**
 * Runs a map of rules against form values.
 * rules: { field: [(value, values) => errorMessage | undefined, ...] }
 */
export function validate(values, rules) {
  const errors = {}
  for (const [field, checks] of Object.entries(rules)) {
    for (const check of checks) {
      const message = check(values[field], values)
      if (message) {
        errors[field] = message
        break
      }
    }
  }
  return errors
}

export const required = (label) => (v) =>
  (Array.isArray(v) ? v.length === 0 : !String(v ?? '').trim()) ? `${label} is required.` : undefined

export const email = () => (v) => (v && !isEmail(v) ? 'Please enter a valid email address.' : undefined)

export const phone = () => (v) =>
  v && !isPhone(v) ? 'Please enter a valid South African number, e.g. 082 123 4567.' : undefined

export const minLength = (n, label) => (v) =>
  v && String(v).trim().length < n ? `${label} should be at least ${n} characters.` : undefined
