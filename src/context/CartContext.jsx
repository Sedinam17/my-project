import { useEffect, useState } from 'react'
import { CartContext } from './cartContext.js'

function readSavedCart() {
  try {
    const savedCart = JSON.parse(window.localStorage.getItem('adorn-aura-cart') || '[]')
    return Array.isArray(savedCart) ? savedCart : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readSavedCart)

  useEffect(() => {
    window.localStorage.setItem('adorn-aura-cart', JSON.stringify(items))
  }, [items])

  function addToCart(product, quantity) {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...currentItems, { ...product, quantity }]
    })
  }

  function updateQuantity(productId, quantity) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    )
  }

  function removeFromCart(productId) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId))
  }

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, itemCount, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}