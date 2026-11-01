import Button from '../common/Button'
import FormSuccess from './FormSuccess'
import { SelectField, TextAreaField, TextField } from './Fields'
import { useForm } from '../../hooks/useForm'
import { email, minLength, phone, required } from '../../utils/validation'
import { submitContactMessage } from '../../services/enquiries'

const topics = [
  'Product question',
  'Order & delivery',
  'Bespoke furniture',
  'Trade & commercial',
  'After-care & warranty',
  'Something else',
]

const initial = { name: '', email: '', phone: '', topic: '', message: '' }

const rules = {
  name: [required('Your name')],
  email: [required('Email'), email()],
  phone: [phone()],
  topic: [required('Topic')],
  message: [required('Message'), minLength(10, 'Message')],
}

export default function ContactForm() {
  const { values, errors, status, result, handleChange, handleSubmit, reset } = useForm(
    initial,
    rules,
    submitContactMessage,
  )

  if (status === 'success') {
    return (
      <FormSuccess title="Message received" reference={result?.id} onReset={reset} resetLabel="Send another message">
        <p>Thank you, {values.name.split(' ')[0]}. A member of our team will respond within one business day.</p>
      </FormSuccess>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
      <TextField
        label="Your name"
        name="name"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
        autoComplete="name"
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        autoComplete="email"
      />
      <TextField
        label="Phone"
        name="phone"
        type="tel"
        optional
        value={values.phone}
        onChange={handleChange}
        error={errors.phone}
        autoComplete="tel"
      />
      <SelectField
        label="Topic"
        name="topic"
        value={values.topic}
        onChange={handleChange}
        error={errors.topic}
        options={topics}
      />
      <TextAreaField
        label="Message"
        name="message"
        value={values.message}
        onChange={handleChange}
        error={errors.message}
        className="sm:col-span-2"
        placeholder="How can we help?"
      />
      <div className="sm:col-span-2">
        <Button type="submit" arrow disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </Button>
        {status === 'error' && <p className="mt-3 text-[13px] text-red-800">Something went wrong. Please try again.</p>}
      </div>
    </form>
  )
}
