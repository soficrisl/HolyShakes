import React, { useState } from 'react';


export default function TextUserInput(props) {
    // Step 1: Initialize state
  return (
    <>
      <div className='flex flex-col items-center justify-center m-4 xl:m-8 space-y-4'>
        
        <label htmlFor="userText" className="block justify-start font-bold text-gray-700">{props.labeltext}</label>
        <input 
          id="userText"
          name={props.name}
          type="text"
          value={props.value}
          onChange={props.handleChange}
          className="mt-2 p-2 border rounded bg-slate-100 w-40 h-10 md:w-60 md:h-24 lg:w-80 lg:h-28 xl:w-80 xl:h-40 "
          placeholder={props.place_holder}
        />
      </div>
    </>
  )
}