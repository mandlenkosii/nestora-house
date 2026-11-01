import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const CartContext = createContext(null)

const STORAGE_KEY = 'nestora-cart-v1'

/** A cart line is unique per product + colour + material combination. */
const lineKey = (productId, colour, material) => [productId, colour, material].join('|')

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage(STORAGE_KEY, [])
  const [lastAdded, setLastAdded] = useState(null)

  const addItem = useCallback(
    (product, { colour, material, quantity = 1, unitPrice, image } = {}) => {
      const colourName = colour ?? product.colours[0]?.name
      const materialName = material ?? product.materials[0]?.name
      const key = lineKey(product.id, colourName, materialName)
      const line = {
        key,
        productId: product.id,
        slug: product.slug,
        name: product.name,
        type: product.type,
        image: image ?? product.images[0],
        colour: colourName,
        material: materialName,
        unitPrice: unitPrice ?? product.price,
        quantity,
      }
      setItems((prev) => {
        const existing = prev.find((i) => i.key === key)
        if (existing) {
          return prev.map((i) => (i.key === key ? { ...i, quantity: Math.min(i.quantity + quantity, 20) } : i))
        }
        return [...prev, line]
      })
      setLastAdded({ ...line, at: Date.now() })
    },
    [setItems],
  )

  const updateQuantity = useCallback(
    (key, quantity) => {
      setItems((prev) =>
        quantity < 1
          ? prev.filter((i) => i.key !== key)
          : prev.map((i) => (i.key === key ? { ...i, quantity: Math.min(quantity, 20) } : i)),
      )
    },
    [setItems],
  )

  const removeItem = useCallback((key) => setItems((prev) => prev.filter((i) => i.key !== key)), [setItems])

  const clearCart = useCallback(() => setItems([]), [setItems])

  const value = useMemo(() => {
    const count = items.reduce((sum, i) => sum + i.quantity, 0)
    const subtotal = items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0)
    return {
      items,
      count,
      subtotal,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      lastAdded,
      dismissLastAdded: () => setLastAdded(null),
    }
  }, [items, addItem, updateQuantity, removeItem, clearCart, lastAdded])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>')
  return ctx
}
