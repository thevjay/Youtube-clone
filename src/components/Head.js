import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions,setShowSuggestions] = useState(false)
  
  const searchCache = useSelector((store)=> store.search)
  const dispatch = useDispatch();

  /**
   * SearchCache = {
   *  "iphone":["iphone 11","iphone 14"]
   * }
   * 
   * searchQuery = iphone
   */

  useEffect(()=>{
    //API call on 

    // make an api call after ever key press
    // but if the differenc between 2 API calls is < 200ms
    // declare the API call
    // 

    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{
        console.log("API call",searchQuery)
        getSearchSuggestions()
      }
    },200);

    return () => {
      clearTimeout(timer);
    }

  },[searchQuery])

  /**
   * i
   * if press key - i
   * - render the component
   * - useEffect();
   * - start timer => make api call after 200 ms
   * 
   * 
   * key - ip
   * - destroy the component(useEffect return menthod)
   * - render the component
   * - useEffect()
   * - start timer => make api call after 200 ms
   * 
   * 
   * 
   * setTimerout(200) - make an API call 
   * 
   * setTimerout - decline 
   */

  const getSearchSuggestions = async () =>{
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
    const json = await data.json();
    //console.log(json[0])
    setSuggestions(json[1])

    //Update the cache
    dispatch(cacheResults({
      [searchQuery]:json[1],
    }))
  }


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
        <div>

          <input 
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
            className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' 
            type='text'
          />
        <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>Search</button>
        </div>
        { showSuggestions && (<div className='fixed bg-white py-2 px-3 w-[37rem] rounded-lg shadow-lg border border-gray-100'>
          <ul>
            {suggestions.map((s)=>(
              <li key={s} className='py-2 shadow-sm hover:bg-gray-100 cursor-pointer'>{s}</li>
            ))}
            
          </ul>
        </div>
        )}
      </div>

      <div className='col-span-1'>
        <img alt='user' className='h-11' src='https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png'/>
      </div>
    </div>
  )
}

export default Head
