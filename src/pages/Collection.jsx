import { Link, useParams, useSearchParams } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import CollectionView from '../components/collections/CollectionView'
import { collections, getCollection } from '../data/collections'
import { getProductsByCollection } from '../data/products'
import { pluralise } from '../utils/format'
import { usePageTitle } from '../hooks/usePageTitle'
import NotFound from './NotFound'

export default function Collection() {
  const { slug } = useParams()
  const [params] = useSearchParams()
  const collection = getCollection(slug)
  usePageTitle(collection?.name)

  if (!collection) return <NotFound />

  const items = getProductsByCollection(slug)
  const type = params.get('type')
  const initialTypes = type && collection.types.includes(type) ? [type] : []

  return (
    <>
      <PageHero
        image={collection.image}
        alt={`${collection.name} collection`}
        eyebrow={`Collection · ${pluralise(items.length, 'piece')}`}
        title={collection.name}
        description={collection.description}
      />

      <nav aria-label="Collections" className="border-b border-charcoal/10">
        <ul className="container-wide flex gap-8 overflow-x-auto py-4 text-[12px] uppercase tracking-[0.16em] [scrollbar-width:none]">
          {collections.map((c) => (
            <li key={c.slug} className="shrink-0">
              <Link
                to={`/collections/${c.slug}`}
                aria-current={c.slug === slug ? 'page' : undefined}
                className={`link-underline ${c.slug === slug ? 'text-charcoal' : 'text-taupe hover:text-charcoal'}`}
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <CollectionView
        key={`${slug}-${type ?? ''}`}
        products={items}
        typeGroups={[{ label: 'Category', types: collection.types }]}
        initialTypes={initialTypes}
        searchLabel={`Search ${collection.name.toLowerCase()}`}
      />
    </>
  )
}
