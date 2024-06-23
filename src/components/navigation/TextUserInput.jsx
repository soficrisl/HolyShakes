import React, { useState } from 'react';


export default function TextUserInput(props) {
    // Step 1: Initialize state
  const [userInput, setUserInput] = useState('');

  // Step 3: Update the state
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };
  return (
    <>
      <div className='flex flex-col items-center justify-center space-y-4'>
        
        <label htmlFor="userText" className="block justify-start font-bold text-gray-700">{props.labeltext}</label>
        <input 
          id="userText"
          type="text"
          value={userInput}
          onChange={handleInputChange}
          className="mt-2 p-2 border rounded bg-slate-100 w-40 lg:w-60 lg:h-28 xl:w-80 xl:h-40"
          placeholder={props.place_holder}
        />
      </div>
    </>
  )
}