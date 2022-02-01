import React, { useEffect, useState } from 'react'
import { products } from '../../data/products'
import { productsAPI } from '../../helpers/promise'
import { Item } from '../Item/Item'



const ItemListContainer = () => {

    const [selectedItem, setSelectedItem] = useState(null)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async() => {
        try {
            const result = await productsAPI
            setProducts(result)
        } catch (error) {
            console.log({error})
        } finally {
            console.log("Fin")
        }

    }

    return (
        <>
            <h1>Last Releases</h1>
            <hr />
            
            <h3>Selected Products</h3>
            <p>{selectedItem && selectedItem.name}</p>
            <p>{selectedItem && selectedItem.artist}</p>
            <p>Stock Seleccionado: { selectedItem && selectedItem.stock }</p>
            <hr />
            <div className='card-grid'>
            {products.map((product) => (
                <Item key={product.id} {...product} setSelectedItem={setSelectedItem}/>
            
            ))}
            </div>
        </>
    )
}

export default ItemListContainer