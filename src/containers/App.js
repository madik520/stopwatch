import React, { useState, useEffect } from 'react';
import StopWatch from '../components/stopwatch';
import BtnGroup from '../components/BtnGroup';


const App = () => {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  const [active, setActive] = useState(false);
  
  useEffect(() => {
    let timerId = null;
    let hour = 0,
        min = 0,
        sec = 0;
    if(active){
      timerId = setInterval(() => {
        sec++;
        if(sec === 60){
          min++;
          sec = 0;
        }
        if(min === 60){
          hour++;
          min = 0
        }
         setTime({ h: hour, m: min, s: sec });
      }, 100);
    }else{
      clearInterval(timerId);
    }
    return () => {
      clearInterval(timerId);
    }
  }, [active]);
  const startTick = () => {
    setActive(true);
  };
  const waitTick = () => {
    setActive(false);
  }
  const stopTick = () => {
    setActive(false);
    setTime({ h: 0, m: 0, s: 0 });
  }

  return (
    <div className="wrapper">
      <BtnGroup start={startTick} active={active} stop={stopTick} wait={waitTick} />
      <StopWatch 
      hours={time.h >= 10 ? time.h : "0" + time.h} 
      minutes={time.m >= 10 ? time.m : "0" + time.m} 
      seconds={time.s >= 10 ? time.s : "0" + time.s } 
      />
    </div>
  );
}

export default App;
