import React from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {

  const [text, setText] = React.useState('Initial Text');

  //Method to update text
  const [counter, setCounter] = React.useState(0);
  const updateText = () => {
    setText('Updated Text'+ counter);
    setCounter(counter+1);
    console.log('Text is now: '+ text);
  };

  //Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const offsetX = (window.innerWidth / 2 - e.clientX) / 50;
      const offsetY = (window.innerHeight / 2 - e.clientY) / 50;
      document.querySelector('.background').style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="container">
      <img src="/img/background1.png" alt="Background" className="background"/>
      <div className="content">
        <div className="screenshots">
          <img src="/img/screenshot2.png" alt="Screenshot 2" className="screenshot" />
          <img src="/img/screenshot1.png" alt="Screenshot 1" className="screenshot" />
          {/* //! Add more as needed */}
        </div>
        <div className="text" onClick={updateText}>
          {text}
        </div>
      </div>
      <img src="/img/bar.png" alt="Bottom bar" className="bar" />
    </div>
  );
}

export default App;