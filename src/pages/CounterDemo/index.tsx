import React, {MutableRefObject, useEffect, useRef} from 'react';
import {useState} from "react";
import styles from './index.module.scss'


interface IProps {

}

function Counter(props: IProps) {
    const [count, setCount] = useState(1);
    const [overflow, setOverflow] = useState(false);
    const text = "溢出？".repeat(count)
    const textRef: MutableRefObject<any | undefined> = useRef();

    const reduceCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    };

    useEffect(() => {
        const node = textRef.current;
        const clientHeight = node.clientHeight;
        const scrollHeight = node.scrollHeight;
        console.log(clientHeight, scrollHeight, overflow);
        if (clientHeight < scrollHeight) {
            setOverflow(true)
        }
    }, [overflow]);

    return (

        <div className={styles.content}>

            <button onClick={() => {
                setCount(count + 1)
            }}>+
            </button>
            <p key={text} className={styles.textOverflow} ref={textRef} data-customer={''}>
                {text}
            </p>
            <span>{count}</span>
            <button onClick={reduceCount}>-
            </button>
        </div>
    )
}


export default Counter
