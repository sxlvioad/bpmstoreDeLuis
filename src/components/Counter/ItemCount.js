import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';


export const ItemCount = ({stock, setStockSelected}) => {

    const [count, setCount] = useState(0);
    
    useEffect(() => {
        setStockSelected(count)
    }, [count])
    

    const minus = () => {
        if (count <= 0) return
        setCount(count -1)
    }

    const plus = () => {
        if (count >= stock) return
        setCount(count +1)
    }

    return (
        <>
            <div>
                <Button className='stockbtn' variant="primary" onClick={minus} >-</Button>
                <span>{count}</span>
                <Button variant="primary" className='stockbtn' onClick={plus}>+</Button>
            </div>
    
        </>)
};
