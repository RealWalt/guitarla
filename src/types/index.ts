export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type Countries = {
    code: string
    name: string
}

export type CartItem = Guitar & {
    quantity: number
}


