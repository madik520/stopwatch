import React from 'react';


const BtnGroup = ({ status, start, stop, wait, reset, resume }) => {
    return(
        <div className="btn-group-wrapper">
            { status === 0 && <button onClick={start}>Start</button> }
            { status === 1 && <button onClick={stop}>Stop</button> }
            { status === 2 && <button onClick={resume}>Resume</button> }
            <button onDoubleClick={wait}>Wait</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default BtnGroup;