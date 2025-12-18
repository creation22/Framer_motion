import React from 'react'

const InputField = () => {
  return (
    <div  className='flex flex-col gap-1.5 w-80'>
      <label htmlFor="" className='text-sm font-medium text-gray-700'>Email</label>
      <input type="text"
      placeholder='you@example.com' 
      className='
      h-11 
      px-4 
      rounded-xl
      border
      border-gray-300
      text-sm 
      placeholder:text-gray-400
      focus:outline-none
      focus:border-blue-600
      focus:ring-2
      focus:ring-blue-600/20
      '/>
      <p className='text-xs text-gray-500'>We'll never share your email </p>
    </div>
  )
}

export default InputField
