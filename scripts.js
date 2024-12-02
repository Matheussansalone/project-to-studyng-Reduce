



const card = [
    { productName: 'abobora', pricePerKg: 5, kg: 1 },
    { productName: 'pepino', pricePerKg: 3.55, kg: 1.3 },
    { productName: 'limão', pricePerKg: 1.2, kg: 2 },
    { productName: 'abacate', pricePerKg: 5.4, kg: 1.67 },
    { productName: 'morango', pricePerKg: 11.9, kg: 3 },
]

const finalValue = card.reduce((acc, value) => {

    const result = value.pricePerKg * value.kg
    return acc + result
}, 0)

console.log(`a sua compra ficou um total de: ${finalValue}`)