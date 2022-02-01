import React, { useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap';
import { ItemCount } from '../Counter/ItemCount'


export const Item = ({ id, name, artist, genre, type, price, stock, setSelectedItem }) => {
    const [stockSelected, setStockSelected] = useState(0);
    const selectItem = () => setSelectedItem({id, name, artist, stock:stockSelected})
     
     return (
        <>
            <Card className='card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                Artist:{artist}
            </Card.Text>
                <ListGroup variant="flush">
                         <ListGroup.Item>Type:{type}</ListGroup.Item>
                         <ListGroup.Item>Genre:{genre}</ListGroup.Item>
                         <ListGroup.Item>Price:{ price }</ListGroup.Item>
                     </ListGroup>
                     <ItemCount stock={stock} setStockSelected={setStockSelected} />
                     
            <Button variant="primary" onClick={selectItem}>Select</Button>
            </Card.Body>
            </Card>
        </>
    )
}

export default Item