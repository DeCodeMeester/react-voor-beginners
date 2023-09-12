import { useState, useEffect } from 'react';

function useClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => { setTime(new Date()) }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();

  return [hours, minutes, seconds].join(':');
}

export default useClock;
