"use client"
import { Product } from "@/types/product"
interface Props{
    products: Product[]
    onAdd: (product:Product)=>void
}

export default function ProductList({products, onAdd}: Props) {
    return (
        <div className="grid grid-cols-3 gap-6 mt-6">
            {products.map((product) => (
                <div key={product.id} className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-gray-600">Price: ${product.price}</p>
                    <button
                        onClick={()=>onAdd(product)}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                    >Add to Cart</button>
                    
                </div>
            ))}
        </div>
    )
}