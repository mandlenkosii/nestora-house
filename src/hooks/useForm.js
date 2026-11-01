import { useState } from 'react'
import { validate } from '../utils/validation'

/**
 * Small form helper: controlled values, rule-based validation and an async
 * submit handler (so a Supabase call can be dropped in later unchanged).
 */
export function useForm(initialValues, rules, onSubmit) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [result, setResult] = useState(null)

  const setField = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleChange = (e) => setField(e.target.name, e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const nextErrors = validate(values, rules)
    setErrors(nextErrors)
    const firstInvalid = Object.keys(nextErrors)[0]
    if (firstInvalid) {
      form.querySelector(`[name="${firstInvalid}"]`)?.focus()
      return
    }
    setStatus('submitting')
    try {
      setResult(await onSubmit(values))
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setStatus('idle')
    setResult(null)
  }

  return { values, errors, status, result, setField, handleChange, handleSubmit, reset }
}
