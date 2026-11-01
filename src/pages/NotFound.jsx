import Button from '../components/common/Button'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <section className="container-wide flex flex-col items-center py-32 text-center lg:py-44">
      <p className="eyebrow">404</p>
      <h1 className="display-lg mt-6">This room is empty.</h1>
      <p className="mt-5 max-w-md text-taupe">The page you were looking for has moved or no longer exists.</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button to="/">Return home</Button>
        <Button to="/shop" variant="outline">
          Shop all furniture
        </Button>
      </div>
    </section>
  )
}
