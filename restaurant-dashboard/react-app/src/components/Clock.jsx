import { useState, useEffect } from 'react';
import React from 'react';

function Clock(){
    const [date, setDate] = useState(new Date());
    
    function refreshClock() {
      setDate(new Date());
    }  useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []);  return (
      <span>
        {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })}
      </span>
    );
  }

export default Clock