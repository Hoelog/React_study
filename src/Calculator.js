import React, { useState } from 'react';

function InputSample_2() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    const onChangeNumber = (e) => {
        const { num1, num2 } = e.target;
    }

    const onPlus = () => {
        // alert(setInputs(num1 + num2));
        alert(num1);
    };

    const onMinus = () => {
        // alert(setInputs(num1 - num2));
    }

    return (
        // <div>
        //     <h1>계산기 연습문제 ➕ ➖</h1>
        //     <input type="number" placeholder="숫자1" value={num1} onChange={onChangeNumber} />
        //     <input type="number" placeholder="숫자2" value={num2} onChange={onChangeNumber} />
        //     <button onClick={onPlus}>+</button>
        //     <button onClick={onMinus}>-</button>
        // </div>
        <div>test</div>
    );
}

export default InputSample_2;
