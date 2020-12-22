import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import counter from './Counter.module.css';

let sint;

function Counter(props, ref) {
  let [currentValue, setCurrentValue] = useState(0);
  let [title, setTitle] = useState('');

  useImperativeHandle(ref, () => ({
    stop: stop,
  }));

  useEffect(() => {
    sint = setInterval(() => {
      setCurrentValue(val => val + 1);
    }, 1000);

    return () => {
      clearInterval(sint);
    }
  }, []);

  function stop() {
    clearInterval(sint);
  }
  
  function increase() {
    let newValue = currentValue + 1;
    setCurrentValue(newValue);
  }

  function updateTitle() {
    setTitle('Current value is ' + currentValue);
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>{currentValue}</p>
      <button id={counter.name} className={`${counter.button} ${counter.button1}`} onClick={increase}>submit</button>
      <button className={counter.button} onClick={updateTitle}>Show title</button>
    </div>
  )
}

export default forwardRef(Counter);