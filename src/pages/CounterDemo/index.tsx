import React from 'react';
import {useState} from "react";


interface IProps {

}

function Counter(props: IProps) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => {setCount(count - 1)}}>-</button>
            <span>{count}</span>
            <button onClick={() => {setCount(count + 1)}}>+</button>
        </div>
    )
}


export default Counter
