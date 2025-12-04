import type { Guitar } from '../types'
import type { Countries } from '../types'

export const paymentMethods = [
    {
        id: 'card_1',
        card: 'Visa'
    },
    {
        id: 'card_2',
        card: 'Mastercard'
    }
]

export const countries : Countries[]= [
    { 
        code: 'US',
        name: 'United States'
    },
    {
        code: 'MX',
        name: 'Mexico'
    },
    {
        code: 'PYG',
        name: 'Paraguay'
    },
    {
        code: 'ARG',
        name: 'Argentina'
    },
    {
        code: 'BRZ',
        name: 'Brazil'
    }
]

export const db : Guitar[] = [
    {
        id: 1,
        name: 'Lukather',
        image: 'guitarra_01',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 299,
    },
    {
        id: 2,
        name: 'SRV',
        image: 'guitarra_02',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 349,
    },
    {
        id: 3,
        name: 'Borland',
        image: 'guitarra_03',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 329,
    },
    {   
        id: 4,
        name: 'VAI',
        image: 'guitarra_04',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 299,
    },
    {
        id: 5,
        name: 'Thompson',
        image: 'guitarra_05',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 399,
    },
    {
        id: 6,
        name: 'White',
        image: 'guitarra_06',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 329,
    },
    {
        id: 7,
        name: 'Cobain',
        image: 'guitarra_07',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 349,
    },
    {
        id: 8,
        name: 'Dale',
        image: 'guitarra_08',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 379,
    },
    {
        id: 9,
        name: 'Krieger',
        image: 'guitarra_09',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 289,
    },
    {
        id: 10,
        name: 'Campbell',
        image: 'guitarra_10',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 349,
    },
    {
        id: 11,
        name: 'Reed',
        image: 'guitarra_11',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 399,
    },
    {
        id: 12,
        name: 'Hazel',
        image: 'guitarra_12',
        description: 'Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.',
        price: 379,
    },
  ]