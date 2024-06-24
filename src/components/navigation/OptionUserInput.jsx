import React from 'react';

export default function TextUserInput({ options, labeltext, id}) {
  return (
    <>
      <div className='flex flex-col items-center justify-center space-y-4 m-4 xl:m-8'>
        <label  for={id} className="block justify-start font-bold text-gray-700">{labeltext}</label>
        
        <select
          id={id}
          name={id}
          className="mt-2 p-2 border rounded bg-white w-40 lg:w-60 xl:w-80"
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