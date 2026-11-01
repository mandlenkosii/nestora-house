import Button from '../common/Button'
import FormSuccess from '../forms/FormSuccess'
import ImageUpload from '../forms/ImageUpload'
import { SelectField, TextAreaField, TextField } from '../forms/Fields'
import { useForm } from '../../hooks/useForm'
import { email, minLength, phone, required } from '../../utils/validation'
import { submitQuoteRequest } from '../../services/enquiries'
import { budgetRanges } from '../../data/site'

const furnitureCategories = [
  'Sofa or sectional',
  'Accent chair',
  'Bed or headboard',
  'Dining table',
  'Dining chairs',
  'Coffee or side table',
  'Console or sideboard',
  'Built-in joinery / shelving',
  'Other',
]

const materialOptions = [
  'Solid oak',
  'Walnut',
  'Ash / light timber',
  'Natural stone / travertine',
  'Linen or cotton fabric',
  'Bouclé',
  'Velvet',
  'Leather',
  'Not sure — please advise',
]

const initial = {
  fullName: '',
  email: '',
  phone: '',
  category: '',
  material: '',
  colour: '',
  dimensions: '',
  budget: '',
  description: '',
  images: [],
}

const rules = {
  fullName: [required('Full name')],
  email: [required('Email address'), email()],
  phone: [required('Phone number'), phone()],
  category: [required('Furniture category')],
  material: [required('Preferred material')],
  budget: [required('Budget range')],
  description: [required('Design description'), minLength(20, 'Design description')],
}

/**
 * Bespoke quotation request. Values map 1:1 to the planned `quote_requests`
 * table; `images` is an array of { file, url } ready for storage upload.
 */
export default function QuoteForm() {
  const { values, errors, status, result, handleChange, setField, handleSubmit, reset } = useForm(
    initial,
    rules,
    submitQuoteRequest,
  )

  if (status === 'success') {
    return (
      <FormSuccess
        title="Your request has been received"
        reference={result?.id}
        onReset={reset}
        resetLabel="Start a new request"
      >
        <p>
          Thank you, {values.fullName.split(' ')[0]}. Our design team will review your brief
          {values.images.length > 0 &&
            ` and ${values.images.length} inspiration image${values.images.length > 1 ? 's' : ''}`}{' '}
          and contact you within two business days to discuss your {values.category.toLowerCase()}.
        </p>
      </FormSuccess>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-14">
      <fieldset className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
        <legend className="mb-8 font-serif text-2xl">1. Your details</legend>
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          error={errors.fullName}
          autoComplete="name"
          className="sm:col-span-2"
        />
        <TextField
          label="Email address"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          autoComplete="email"
        />
        <TextField
          label="Phone number"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
          autoComplete="tel"
          placeholder="e.g. 082 123 4567"
        />
      </fieldset>

      <fieldset className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
        <legend className="mb-8 font-serif text-2xl">2. Your piece</legend>
        <SelectField
          label="Furniture category"
          name="category"
          value={values.category}
          onChange={handleChange}
          error={errors.category}
          options={furnitureCategories}
        />
        <SelectField
          label="Preferred material"
          name="material"
          value={values.material}
          onChange={handleChange}
          error={errors.material}
          options={materialOptions}
        />
        <TextField
          label="Preferred colour"
          name="colour"
          optional
          value={values.colour}
          onChange={handleChange}
          placeholder="e.g. warm oat, smoked oak"
        />
        <TextField
          label="Approximate dimensions"
          name="dimensions"
          optional
          value={values.dimensions}
          onChange={handleChange}
          placeholder="e.g. W 280 × D 100 cm"
          hint="Width × depth × height, or the size of the space"
        />
        <SelectField
          label="Budget range (ZAR)"
          name="budget"
          value={values.budget}
          onChange={handleChange}
          error={errors.budget}
          options={budgetRanges}
          className="sm:col-span-2"
        />
        <TextAreaField
          label="Design description"
          name="description"
          value={values.description}
          onChange={handleChange}
          error={errors.description}
          className="sm:col-span-2"
          rows={6}
          placeholder="Describe the piece, how you’ll use it, the room it’s for and anything you love (or don’t) about pieces you’ve seen."
        />
      </fieldset>

      <fieldset>
        <legend className="mb-8 font-serif text-2xl">3. Inspiration</legend>
        <ImageUpload label="Inspiration images" value={values.images} onChange={(files) => setField('images', files)} />
      </fieldset>

      <div className="border-t border-charcoal/15 pt-8">
        <p className="mb-8 max-w-xl text-[13px] leading-relaxed text-taupe">
          Please note: your final quotation will depend on the agreed specifications, materials and manufacturing
          requirements. Submitting this form does not commit you to an order.
        </p>
        <Button type="submit" arrow disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending request…' : 'Request a quotation'}
        </Button>
        {status === 'error' && <p className="mt-3 text-[13px] text-red-800">Something went wrong. Please try again.</p>}
      </div>
    </form>
  )
}
