import React from 'react'

const ChartMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm px-2 space-x-2' >
      <img
        className='h-8'
        alt='user'
        src='https://cdn-icons-png.flaticon.com/128/64/64572.png'
       />
       <span className='font-bold px-2'>{name}</span>
       <span>{message}</span>
    </div>
  )
}

export default ChartMessage
