import React, { useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);
    // 위에 작성된 한줄을 풀어쓴다면, 아래 세줄로 작성할 수 있다.
    // const number = useState(0)[0];
    // const numberArray = useState(0);
    // const setNumber = numberArray[1];
    const onIncrease = () => {
        console.log('+1');
        setNumber(number+1);
        console.log(number);
    }
    const onDecrease = () => {
        console.log('-1');
        setNumber(number-1);
        console.log(number);

    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter;