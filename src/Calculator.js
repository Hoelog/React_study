import React, { useState } from 'react';

function InputSample_2() {
    const [inputs, setNumber] = useState(0);

    const { num1, num2 } = inputs;

    const onPlus = () => {
        console.log(setNumber(total => num1 + num2));

    };

    const onMinus = () => {
        console.log(setNumber(num1 - num2));
    }

    return (
        <div>
            <h1>계산기 연습문제 ➕ ➖</h1>
            <input name="num1" type="number" placeholder="숫자1" value={num1} />
            <input name="num2" type="number" placeholder="숫자2" value={num2} />
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
            <div>
            </div>
        </div>
    );
}

export default InputSample_2;
