import { useCart } from "../hooks/useCart"
import Header from "../components/Header"
import { countries, paymentMethods } from '../data/db'
import { useState } from "react"

export default function Checkout() {

  const { cart, cartTotal, isEmpty } = useCart()

  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [postal, setPostal] = useState("")
  const [payment, setPayment] = useState("")
  const [errors, setErrors] = useState<string[]>([])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const newErrors = []

    if (!name.trim()) newErrors.push("El nombre es obligatorio")
    if (!lastName.trim()) newErrors.push("El apellido es obligatorio")
    if (!email.trim() || !email.includes("@")) newErrors.push("Email inválido")
    if (!country.trim()) newErrors.push("Seleccione un país")
    if (!city.trim()) newErrors.push("La ciudad es obligatoria")
    if (!address.trim()) newErrors.push("La dirección es obligatoria")
    if (!postal.trim()) newErrors.push("El código postal es obligatorio")
    if (!payment.trim()) newErrors.push("Seleccione un método de pago")

    setErrors(newErrors)

    if (newErrors.length === 0) {
      alert("Comprando...")
    }
  }

  return (
    <>
      <Header 
        cart={cart}
        cartTotal={cartTotal}
        isEmpty={isEmpty}
        removeFromCart={() => {}}
        decreaseQuantity={() => {}}
        increaseQuantity={() => {}}
        clearCart={() => {}}
      />

      <main className="max-w-6xl mx-auto mt-10 px-4">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Checkout
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Información del Cliente
            </h3>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">

              {errors.length > 0 && (
                <ul className="bg-red-100 text-red-700 p-3 rounded-lg">
                  {errors.map((err, i) => (
                    <li key={i}>• {err}</li>
                  ))}
                </ul>
              )}

              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="text"
                placeholder="Apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <h3 className="text-2xl font-bold text-gray-800 pt-6">
                Dirección de Envío
              </h3>

              <select 
                name="countries"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Seleccione un País</option>
                {countries.map(country => (
                  <option 
                    key={country.code}
                    value={country.code}
                  >
                    {country.name}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Ciudad"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="text"
                placeholder="Dirección"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <input
                type="text"
                placeholder="Código Postal"
                value={postal}
                onChange={(e) => setPostal(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />

              <select
                name="paymentMethod"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Método de pago</option>
                {paymentMethods.map((method) => (
                  <option 
                    key={method.id}
                    value={method.id}
                  >
                    {method.card}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-bold mt-4 hover:bg-gray-800 transition"
              >
                Finalizar Compra
              </button>

            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              Resumen del Pedido
            </h3>

            {isEmpty ? (
              <p className="mt-3 text-gray-700">Tu carrito está vacío.</p>
            ) : (
              <div className="mt-5 p-5 border border-gray-300 rounded-lg">

                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 font-semibold">Producto</th>
                      <th className="py-2 font-semibold">Cant.</th>
                      <th className="py-2 font-semibold">Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cart.map(item => (
                      <tr key={item.id} className="border-b">
                        <td className="py-2">{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>${item.quantity * item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <p className="text-right mt-4 text-2xl font-extrabold text-gray-900">
                  Total: ${cartTotal}
                </p>

              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
