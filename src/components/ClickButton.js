import React, { useContext } from 'react';
import { Context } from '../App';
 
const ClickButton = () => {

    const [onOff, setOnOff] = useContext(Context);

    return (
        <button onClick={ () => setOnOff(!onOff) }>
            {onOff? "Turn On": "Turn Off"}
        </button>
    )
}

export default ClickButton;