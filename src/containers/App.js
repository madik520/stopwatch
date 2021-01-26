import React, { useState, useEffect } from 'react';
import StopWatch from '../components/stopwatch';
import BtnGroup from '../components/BtnGroup';

const App = () => {
  const [hours, setHours] = useState(0);
  const [min, setMinutes] = useState(0);
  const [sec, setSeconds] = useState(0);
  const [active, setActive] = useState(false)

  useEffect(() => {
    let timer = active ? setInterval(() => {
      setSeconds(sec + 1);
      if(sec === 3) {
        setMinutes(min + 1);
        setSeconds(0);
      }else if(min === 3){
        setHours(hours + 1);
        setMinutes(0);
      }
    }, 1000) : setSeconds(sec);
    return () => {
      clearInterval(timer);
    }
  }, [active, hours, min, sec]);
  
  const StartTick = () => {
    setActive(true);
  };
  const StopTick = () => {
    setActive(false);
  }
  console.log(`min: ${min} sec: ${sec}`);
  return (
    <div className="wrapper">
      <BtnGroup start={StartTick} active={active} stop={StopTick} />
      <StopWatch 
      hours={hours > 9 ? hours : "0" + hours} 
      minutes={min > 9 ? min : "0" + min} 
      seconds={sec > 9 ? sec : "0" + sec } 
      />
    </div>
  );
}

export default App;
