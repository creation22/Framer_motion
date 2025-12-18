import React from 'react'

const Card = () => {
  return (
    <div className=' w-96 rounded-xl border border-gray-400  bg-white p-5 flex flex-col gap-4  '>
      <div className=' flex flex-col gap-1'>
        <div className='text-sm font-mdeium  text-gray-900 '> Card Title </div>
        <p className='text-xs text-gray-500'>Updated two hours ago </p>
      </div>
      <div className=' text-sm  text-gray-700 '>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dfuga, similique architecto? Incidunt, itaque.

      </div>
      <div className='text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer'> 
        View details 
        footer
      </div>
    </div>
  )
}

export default Card
