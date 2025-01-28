import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>

      <div className='flex col-span-1'>
        <img 
          onClick={() => toggleMenuHandler()} 
          className='h-11 cursor-pointer' 
          alt='menu' 
          src='https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg'
        />
        <a href='/'>
          <img className='h-11 mx-2' alt='yt-logo' src='https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png'/>
        </a>
      </div>

      <div className='col-span-10 px-10'>
        <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text'/>
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>Search</button>
      </div>

      <div className='col-span-1'>
        <img alt='user' className='h-11' src='https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png'/>
      </div>
    </div>
  )
}

export default Head
