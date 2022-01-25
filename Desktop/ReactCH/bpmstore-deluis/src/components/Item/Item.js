import React from 'react'


 export const Item = ({id, name, artist, type, price, setSelectedItem}) => {
    const selectItem = () => setSelectedItem({name, artist})
     
     return (
        <>
            <h2>{ name }</h2>
            <h2>By: { artist }</h2>
            <h2>Type: { type }</h2>
            <h2>{price}</h2>
            <button onClick={selectItem}>Select</button>
            <hr/>
        </>
    )
}

export default Item