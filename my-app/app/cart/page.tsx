"use client"
import { useCartStore } from "@/store/cartStore"

export default function CartPage() {
  const cart = useCartStore((state) => state.cart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold">Cart Page</h1>
      <p className="mt-4">Items in Cart: {cart.length}</p>

      <div className="mt-6">
        {cart.map((item) => (
          <div
            key={item.cartItemId}   // ✅ unique key
            className="bg-white p-4 rounded shadow mb-3 flex justify-between items-center"
          >
            <span>
              {item.name} - ${item.price}
            </span>

            <button
              onClick={() => removeFromCart(item.cartItemId)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}