import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import CollectionView from '../components/collections/CollectionView'
import { collections } from '../data/collections'
import { products } from '../data/products'
import { images } from '../data/images'
import { usePageTitle } from '../hooks/usePageTitle'

const typeGroups = collections.map((c) => ({ label: c.name, types: c.types }))

export default function Shop() {
  usePageTitle('Shop All')
  const [params] = useSearchParams()
  const query = params.get('q') ?? ''

  return (
    <>
      <PageHero
        image={images.collectionShop}
        alt="A bright, neutral living room with cream sofas and a natural stone coffee table"
        eyebrow={`${products.length} pieces`}
        title={query ? `Results for “${query}”` : 'Shop all furniture'}
        description="Sofas, beds, tables and finishing pieces — designed to work together and made to last."
        height="sm"
      />
      <CollectionView
        key={query}
        products={products}
        typeGroups={typeGroups}
        initialQuery={query}
        searchLabel="Search all furniture"
      />
    </>
  )
}
