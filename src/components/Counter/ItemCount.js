import React, { useState } from 'react';


export const ItemCount = ({stock}) => {

    const [count, setCount] = useState(0);

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
                <button className='stockbtn' onClick={minus}>-</button>
                <span>{count}</span>
                <button className='stockbtn' onClick={plus}>+</button>
            </div>
    
        </>)
};
