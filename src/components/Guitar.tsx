import type { Guitar } from "../types"

export type GuitarProps = {
    guitar : Guitar, 
    addToCart: (item: Guitar) => void
}

export default function Guitar({ guitar, addToCart }: GuitarProps) {

    const { name, image, description, price } = guitar

    return (
        <div className="flex items-center gap-4 my-6">

            <div className="w-20 shrink-0">
                <img 
                    className="w-full h-auto" 
                    src={`/img/${image}.jpg`} 
                    alt={name}
                />
            </div>

            <div className="flex-1">
                <h3 className="text-black text-xl font-bold uppercase">
                    {name}
                </h3>

                <p className="text-gray-700">{description}</p>

                <p className="font-black text-orange-500 text-2xl">
                    ${price}
                </p>

                <button 
                    type="button"
                    className="bg-gray-900 hover:bg-gray-700 text-white w-full py-2 rounded mt-3 font-bold"
                    onClick={() => addToCart(guitar)}
                >
                    Agregar al Carrito
                </button>
            </div>

        </div>
    )
}
