import { products } from "../data/products";

export const productsAPI = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products[1])
    }, 2000);
})

export const productAPI = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products[0])
    }, 2000);
})