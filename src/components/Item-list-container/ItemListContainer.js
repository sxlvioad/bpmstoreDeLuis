import React, { useState } from 'react'
import { Item } from '../Item/Item'

const items = [
    { id: "1", name: "No Hay Mañana", artist: "HECTOR OAKS", genre: "Techno", type: "Album", price: "$14.99", stock:"10" },
    { id: "2", name: "Hypnotic therapy", artist: "EGOTOT", genre: "Techno", type: "EP", price: "$7", stock:"10" },
    { id: "3", name: "Polyhedral", artist: "MARCO BRUNO", genre: "Techno", type: "EP", price: "$5", stock:"10" },
    { id: "4", name: "Crackland", artist: "BLAME THE MONO", genre: "Techno", type: "Track", price: "$1", stock:"10" }
    
]

const ItemListContainer = () => {

    const [selectedItem, setSelectedItem] = useState(null)

    return (
        <>
            <h1>Last Releases</h1>
            <hr />
            
            <h3>Selected Products</h3>
            <p>{selectedItem ? selectedItem.name : ""}</p>
            <p>{selectedItem ? selectedItem.artist : ""}</p>
            <hr/>
            {items.map(({id, name, artist, type, price, stock}) => (
                <Item key={id} id={id} name={name} artist={artist} type={type} price={price} stock={stock} setSelectedItem={setSelectedItem}/>
            ))}
        </>
    )
}

export default ItemListContainer