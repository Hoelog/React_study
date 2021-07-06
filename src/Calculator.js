import React, { useState } from 'react';

function Calculator() {
    const [ num1, setNum1 ] = useState('');
    const [ num2, setNum2 ] = useState('');

    const onChange_num1 = (e) => {
        setNum1(e.target.value);
    };

    const onChange_num2 = (e) => {
        setNum2(e.target.value);

    };
    const plus = (e) => {(
        alert(parseInt(num1) +parseInt(num2))
    )};

    const minus = (e) => {(
        alert(parseInt(num1) - parseInt(num2))
    )};

    return (
        <div>
            <input name="num1" type="number" onChange={onChange_num1} value={num1}/>
            <input name="num2" type="number" onChange={onChange_num2} value={num2}/>
            <button onClick={ plus }>+</button>
            <button onClick={ minus }>-</button>
        </div>
    )

}
export default Calculator;
