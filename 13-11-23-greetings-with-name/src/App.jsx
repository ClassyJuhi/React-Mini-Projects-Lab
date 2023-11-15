
import React, { useState, useEffect } from 'react';
import helloImage from './assets/hello.png';
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [greeting, setGreeting] = useState('Good Morning');

  useEffect(() => {
    const updateGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting('Good Morning');
      } else if (currentHour >= 12 && currentHour < 17) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    };

    updateGreeting();
  }, []);


  return (
    <div className="mainContainer">
      <h1 className='header'>A Hearty Welcome Awaits You!</h1>
      <input 
      type="text"
      className='enterName' 
      id='userName'
      placeholder='Enter Your Name'
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="display">
      {inputValue && <>
            <p>
              {`${greeting}, ${inputValue}`}
            </p>
            <img src={helloImage} alt="Hello" className="helloImage" />
          </>}
      </div>
    </div>
  )
}

export default App
