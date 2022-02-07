import React, { useEffect, useState } from 'react';
import { productAPI } from '../../helpers/promise';

export const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        getItem()
    }, [])

    const getItem = async() => {
        try {
            const result = await productAPI
            setProduct(result)
        } catch (error) {
            console.log({error})
        } finally {
            console.log("Fin")
        }

    }




      return (
          <div className='detailContainer'>
              
            <div className='probemos'>
                  <h1>{product.name && product.name}</h1>
                  <hr/>
                  {product.artist && <h2>By: {product.artist}</h2>}
                  {product.genre && <h2>By: {product.genre}</h2>}
                  {product.type && <h2>By: {product.type}</h2>}
                  {product.price && <h2>By: {product.price}</h2>}
              </div>


              <div>
                  {product.img && <img className='imgDetail' src={product.img} alt='A'/> }
              
              </div>



        </div>
    )
};
