import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useProducts from '../../hooks/useProducts'
import { Item } from '../Item/Item'



const ItemListContainer = () => {

    const { id } = useParams()
    const { products } = useProducts();
    console.log(products)


    const filterProducts= products.filter(({genre})=> genre === id)

    return (
        <>
            <h1>Last Releases</h1>
            <hr />
            <div className='card-grid'>
                {!id &&
                    products.map((product) => (
                <Item key={product.id} {...product} />
            
                    ))}
            </div>
            <div className='card-grid'>
                {id &&
                    filterProducts.map((product) => {
                        return (
                            <Item key={product.id} {...product} />
                        )
                    })
                }
                
            </div>
            



        </>
    )
}

export default ItemListContainer