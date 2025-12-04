import Guitar from "../components/Guitar"
import Header from "../components/Header"
import { useCart } from '../hooks/useCart'

function HomePage() {

  const {
     data,
     cart,
     addToCart, 
     removeFromCart, 
     decreaseQuantity, 
     increaseQuantity, 
     clearCart, 
     isEmpty, 
     cartTotal 
  } = useCart()

  return (
    <>
      <Header 
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
      />
      
      <main className="max-w-6xl mx-auto mt-12 px-4">

        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Nuestra Colección
        </h2>

            <div className="flex flex-wrap mt-10 -mx-4">
            {data.map((guitar) => (
                <div key={guitar.id} className="w-full md:w-1/2 lg:w-1/3 px-4">
                <Guitar guitar={guitar} addToCart={addToCart} />
                </div>
            ))}
            </div>


      </main>

      <footer className="bg-gray-900 mt-14 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-white text-center text-xl mt-4">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  )
}

export default HomePage
