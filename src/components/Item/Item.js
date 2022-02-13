import React, { useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ItemCount } from '../Counter/ItemCount'


export const Item = ({ id, name, artist, genre, type, price, stock }) => {
    const [stockSelected, setStockSelected] = useState(0);
     
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
                     
            <Link to={`/item/${id}`}>Product Detail</Link> 
            </Card.Body>
            </Card>
        </>
    )
}

export default Item