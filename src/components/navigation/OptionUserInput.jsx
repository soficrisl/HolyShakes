import React from 'react';

export default function TextUserInput({ options,id, labeltext, name, handleChange}) {
  return (
    <>
      <div className='flex flex-col items-center justify-center space-y-4 m-4 xl:m-8'>
        <label  htmlFor={id} className="block justify-start font-bold text-gray-700">{labeltext}</label>
        
        <select
          id={id}
          name={name}
          className="mt-2 p-2 border rounded bg-slate-100 w-40 md:w-60 lg:w-80 xl:w-80"
          onChange={handleChange}
        >
          <option value="">Opciones</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </>
  );
}