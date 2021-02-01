import React, { useState, useEffect } from 'react';
import StopWatch from '../components/stopwatch';
import BtnGroup from '../components/BtnGroup';


const App = () => {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  const [interv, setInterv] = useState(false);
  const [status, setStatus] = useState(0);
  /* status:
     0 = start,
     1 = stop,
     2 = resume
  */

  let hour = time.h,
      min = time.m,
      sec = time.s;

  useEffect(() => {
    let timerId;
    if(interv === true){
      timerId = setInterval(run, 100);
    }else{
      clearInterval(timerId);
    }
    return  () => {
      clearInterval(timerId);
    }
  })

  const startTick = () => {
    setStatus(1);
    setInterv(true);
  };
  const run = () => {
    sec++;
    if(sec === 60){
      min++;
      sec = 0;
    }
    if(min === 60){
      hour++;
      min = 0
    }
    return setTime({ h: hour, m: min, s: sec });
  };

  const stopTick = () => {
    setStatus(0);
    setInterv(false);
    setTime({ h: 0, m: 0, s: 0 }); 
  }
  const resumeTick = () => {
    return startTick();
  }
  const waitTick = () => {
    let secondClick = false;
    let duration  = 300;
    if(!secondClick){
        setTimeout(() => {
          secondClick = true;
        }, duration);
        setStatus(2);
        setInterv(false);
    }else{
        secondClick = false;
    }
  }
  const resetClick = () => {
    setInterv(false);
    setTime({ h: 0, m: 0, s: 0 }); 
    startTick();
  }

  return (
    <div className="wrapper">
      <BtnGroup 
      start={startTick} 
      status={status} 
      stop={stopTick} 
      reset={resetClick} 
      wait={waitTick} 
      resume={resumeTick}
      />
      <StopWatch 
      hours={time.h >= 10 ? time.h : "0" + time.h} 
      minutes={time.m >= 10 ? time.m : "0" + time.m} 
      seconds={time.s >= 10 ? time.s : "0" + time.s } 
      />
    </div>
  );
}

export default App;
