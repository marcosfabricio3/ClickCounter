import './App.css';
import ambarLogo from './images/logo.png';
import Button from './components/button.js';
import Counter from './components/counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1);
  }

  const resetCounter = () => {
    setNumClicks(0);
  }

  return (
    <div className='App'>
      <div className='container-logo'>
        <img 
        className='accountant-logo'
        src={ambarLogo}
        alt='accountant logo' />
      </div>
      <div className='main-Container'>
        <Counter numberOfClicks={numClicks} />
        <Button 
          text='Click'
          clickButton={true}
          handleClick={handleClick}/>
        <Button 
          text='Reset'
          click-button={false}
          handleClick={resetCounter}/>
      </div>
    </div>
  );
}

export default App;
