import React, { useState } from 'react'
import { Item } from '../Item/Item'

const items = [
    { id: "1", name: "No Hay Mañana", artist: "HECTOR OAKS", genre: "Techno", type: "Album", price: "$14.99" },
    { id: "2", name: "Hypnotic therapy", artist: "EGOTOT", genre: "Techno", type: "EP", price: "$7" },
    { id: "3", name: "Polyhedral", artist: "MARCO BRUNO", genre: "Techno", type: "EP", price: "$5" },
    { id: "4", name: "Crackland", artist: "BLAME THE MONO", genre: "Techno", type: "Track", price: "$1" }
    
]

const ItemListContainer = () => {

    const [selectedItem, setSelectedItem] = useState(null)

    return (
        <>
            <h1>Last Releases</h1>
            <hr />
            
            <h3>Selected Products</h3>
            <p>{selectedItem ? selectedItem.name : "Ninguno"}</p>
            <p>{selectedItem ? selectedItem.artist : "Ninguno"}</p>
            <hr/>
            {items.map(({id, name, artist, type, price}) => (
                <Item key={id} id={id} name={name} artist={artist} type={type} price={price} setSelectedItem={setSelectedItem}/>
            ))}
        </>
    )
}

export default ItemListContainer