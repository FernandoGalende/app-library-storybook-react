import React from 'react';

const Button = ({ text, action }) => {
    return (
        <button onClick={() => console.log('yehaaa')}>{text}</button>
    )
}

export default Button;