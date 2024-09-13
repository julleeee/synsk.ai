import React, {useState, useEffect } from 'react';
import './App.css';
import Heading from './components/Heading';
import Input from './components/Input';
import ProgressBar from './components/Progressbar';


function App() {

  const [number, setNumber] = useState< null | number>(null);
  const [clicked, setClicked] = useState<boolean>(false);
  const [progressComplete, setProgressComplete] = useState<boolean>(false);

  useEffect(() => {
    // Reset progress complete status when clicked changes
    setProgressComplete(false);
  }, [clicked]);

  const handleProgressComplete = () => {
    setProgressComplete(true);
  };

  return (
  <>
    <Heading title={"Synsk.AI"} />
    {!clicked && <Input num={number} setNum={setNumber} setClicked={setClicked}/>}
    <ProgressBar clicked={clicked} onComplete={handleProgressComplete} />
    {progressComplete && <p> Tallet du tenkte på var: {number} </p>}
  </>
  )
}

export default App;
