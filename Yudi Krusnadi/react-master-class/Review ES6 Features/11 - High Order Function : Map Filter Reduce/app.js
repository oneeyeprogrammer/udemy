const fruits = [
    {
        id: 1,
        name: "grape",
        price: 10000,
    },
    {
        id: 2,
        name: "apple",
        price: 15000,
    },
    {
        id: 3,
        name: "orange",
        price: 20000,
    },
];

const namaFruits = fruits.map((elements) => elements.name);
const priceFruits = fruits
    .filter((elements) => elements.price > 10000)
    .map((elements) => elements.name);
const nameFruits = fruits.find((elements) => elements.price === 10000);
const totalPrice = fruits.reduce(
    (accumulative, currentValue) => accumulative + currentValue.price,
    0
);

console.log(namaFruits);
console.log(priceFruits);
console.log(nameFruits);
console.log(totalPrice);
