import React, { useState } from 'react';

function InputSample() {
    const margin_style = {
        margin: '20px 30px',
    };

    const border_style = {
        border: '1px solid #000000',
        height: '20px',
    }

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('');
    };

    return (
        <div>
            <input onChange={onChange} value={text} style={margin_style} />
            <button onClick={onReset} name="reset" style={border_style}>초기화</button>
            <div style={margin_style}>
                <b>값: {text}</b>
            </div>
        </div>
    );
}

export default InputSample;
