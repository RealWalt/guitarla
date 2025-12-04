import type { CartItem, Guitar } from "../types"
import { useNavigate } from "react-router-dom"

type HeaderProps = {
    cart: CartItem[]
    removeFromCart: (id: Guitar['id']) => void
    decreaseQuantity: (id: Guitar['id']) => void
    increaseQuantity: (id: Guitar['id']) => void
    clearCart: () => void
    isEmpty: boolean
    cartTotal: number 
}

export default function Header({cart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal} : HeaderProps) {

    const navigate = useNavigate()

    return (
        <header className="py-5 bg-[url('/img/header.jpg')] bg-cover bg-center relative bg-black/70 bg-blend-overlay">
            <div className="max-w-6xl mx-auto px-4">

                <div className="flex flex-col md:flex-row items-center justify-between">

                    <div className="w-3/4 md:w-1/4">
                        <a href="/">
                            <img 
                                className="w-full h-auto" 
                                src="/img/logo.svg" 
                                alt="logo"
                            />
                        </a>
                    </div>

                    <nav className="mt-5 md:mt-0 flex justify-end w-full md:w-1/2">

                        <div className="relative group cursor-pointer">
                            <img 
                                src="/img/carrito.png" 
                                alt="carrito" 
                                className="w-8"
                            />

                            <div className="hidden group-hover:block absolute right-0 top-full mt-2 bg-white p-4 shadow-xl min-w-[300px] z-50 rounded-md">

                                {isEmpty ? (
                                    <p className="text-center text-gray-700">El carrito está vacío</p>
                                ) : (
                                <>
                                    <table className="w-full text-left text-gray-700 border-collapse">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="py-2">Img</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cant.</th>
                                                <th></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {cart.map(guitar => (
                                                <tr key={guitar.id} className="border-b">
                                                    <td className="py-2">
                                                        <img 
                                                            className="w-10 h-auto" 
                                                            src={`/img/${guitar.image}.jpg`}
                                                            alt={guitar.name}
                                                        />
                                                    </td>
                                                    <td>{guitar.name}</td>
                                                    <td className="font-bold">${guitar.price}</td>


                                                    <td>
                                                        <div className="flex items-center gap-3">
                                                            <button
                                                                type="button"
                                                                className="bg-black text-white px-2 py-1 rounded"
                                                                onClick={() => decreaseQuantity(guitar.id)}
                                                            >
                                                                -
                                                            </button>

                                                            {guitar.quantity}

                                                            <button
                                                                type="button"
                                                                className="bg-black text-white px-2 py-1 rounded"
                                                                onClick={() => increaseQuantity(guitar.id)}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        <button
                                                            className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded"
                                                            onClick={() => removeFromCart(guitar.id)}
                                                        >
                                                            X
                                                        </button>
                                                    </td>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <p className="text-right mt-3">
                                        Total pagar: <span className="font-bold">${cartTotal}</span>
                                    </p>
                                </>
                                )}


                                <button
                                    className="bg-black text-white w-full mt-3 py-2 rounded"
                                    onClick={() => navigate('/checkout')}
                                >
                                    Checkout
                                </button>

                                <button
                                    className="bg-black text-white w-full mt-3 py-2 rounded"
                                    onClick={clearCart}
                                >
                                    Vaciar Carrito
                                </button>
                            </div>
                        </div>

                    </nav>

                </div>

            </div>
        </header>
    )
}
