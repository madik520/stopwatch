import React from 'react';


const BtnGroup = ({ active = false, start, stop, wait, reset }) => {
    return(
        <div className="btn-group-wrapper">
            { active === false ? <button onClick={start}>Start</button> : <button onClick={stop}>Stop</button>}
            <button onClick={wait}>Wait</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default BtnGroup;