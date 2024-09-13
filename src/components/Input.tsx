import React, { useState } from 'react';

type InputProps = {
  num: number | null;
  setNum: React.Dispatch<React.SetStateAction<number | null>>;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

const Input = ({ num, setNum, setClicked }: InputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = Number(inputValue);
    if (!isNaN(value)) {
      setNum(value);
      setClicked(true)
    } else {
      console.error('Invalid number input');
    }
  };

  return (
  <>
    <p> Tenk på et tall </p>
    <form onSubmit={handleSubmit}>
      <input type="number" value={inputValue} onChange={handleInputChange}/>
      <button type="submit"> Tenk </button>
    </form> 
 </>
  )
}

export default Input