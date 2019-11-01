import React from 'react';

const DummyButton = ({ text, action }) => {
    return (
        <button onClick={() => console.log('ola')}>{text}</button>
    )

}

export default DummyButton;