import React from 'react';

const StopWatch = ({ hours, minutes, seconds }) => {
    return(
        <div className="watch-wrapper">
            <div className="watch-container">
                <div className="time">
                    <span>{hours}:</span>
                    <span>{minutes}:</span>
                    <span>{seconds}</span>
                </div>
            </div>
        </div>
    );
};

export default StopWatch;