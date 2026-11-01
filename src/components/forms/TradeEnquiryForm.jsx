import Button from '../common/Button'
import FormSuccess from './FormSuccess'
import { SelectField, TextAreaField, TextField } from './Fields'
import { useForm } from '../../hooks/useForm'
import { email, minLength, phone, required } from '../../utils/validation'
import { submitTradeEnquiry } from '../../services/enquiries'
import { budgetRanges } from '../../data/site'

const businessCategories = [
  'Hotel',
  'Guesthouse / B&B',
  'Restaurant / Café',
  'Office / Workplace',
  'Property developer',
  'Interior designer / Architect',
  'Other',
]

const quantities = ['1 – 10 pieces', '11 – 50 pieces', '51 – 150 pieces', '150+ pieces', 'Not sure yet']

const initial = {
  businessName: '',
  contactPerson: '',
  email: '',
  phone: '',
  businessCategory: '',
  quantity: '',
  budget: '',
  description: '',
}

const rules = {
  businessName: [required('Business name')],
  contactPerson: [required('Contact person')],
  email: [required('Email'), email()],
  phone: [required('Phone number'), phone()],
  businessCategory: [required('Business category')],
  quantity: [required('Estimated quantity')],
  budget: [required('Budget range')],
  description: [required('Project description'), minLength(20, 'Project description')],
}

export default function TradeEnquiryForm() {
  const { values, errors, status, result, handleChange, handleSubmit, reset } = useForm(
    initial,
    rules,
    submitTradeEnquiry,
  )

  if (status === 'success') {
    return (
      <FormSuccess title="Thank you for your enquiry" reference={result?.id} onReset={reset}>
        <p>
          Our trade team will review your project details and contact {values.contactPerson.split(' ')[0]} within two
          business days to discuss specifications, timelines and pricing.
        </p>
      </FormSuccess>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
      <TextField
        label="Business name"
        name="businessName"
        value={values.businessName}
        onChange={handleChange}
        error={errors.businessName}
        autoComplete="organization"
      />
      <TextField
        label="Contact person"
        name="contactPerson"
        value={values.contactPerson}
        onChange={handleChange}
        error={errors.contactPerson}
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
        value={values.phone}
        onChange={handleChange}
        error={errors.phone}
        autoComplete="tel"
        placeholder="e.g. 082 123 4567"
      />
      <SelectField
        label="Business category"
        name="businessCategory"
        value={values.businessCategory}
        onChange={handleChange}
        error={errors.businessCategory}
        options={businessCategories}
      />
      <SelectField
        label="Estimated furniture quantity"
        name="quantity"
        value={values.quantity}
        onChange={handleChange}
        error={errors.quantity}
        options={quantities}
      />
      <SelectField
        label="Budget range"
        name="budget"
        value={values.budget}
        onChange={handleChange}
        error={errors.budget}
        options={budgetRanges}
        className="sm:col-span-2"
      />
      <TextAreaField
        label="Project description"
        name="description"
        value={values.description}
        onChange={handleChange}
        error={errors.description}
        className="sm:col-span-2"
        placeholder="Tell us about the space, the number of rooms or covers, the look you’re after and your timeline."
      />
      <div className="sm:col-span-2">
        <Button type="submit" arrow disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Submit enquiry'}
        </Button>
        {status === 'error' && <p className="mt-3 text-[13px] text-red-800">Something went wrong. Please try again.</p>}
      </div>
    </form>
  )
}
