import React from 'react'
import { ItemCount } from '../Counter/ItemCount'


 export const Item = ({id, name, artist, type, price, stock, setSelectedItem}) => {
    const selectItem = () => setSelectedItem({name, artist})
     
     return (
        <>
            <h2>{ name }</h2>
            <h2>By: { artist }</h2>
            <h2>Type: { type }</h2>
             <h2>{price}</h2>
             
            <ItemCount stock={stock}/>

            <button onClick={selectItem}>Select</button>
            <hr/>
        </>
    )
}

export default Item