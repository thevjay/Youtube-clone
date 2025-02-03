import React, { useMemo, useState } from 'react' 
import { findPrime } from '../utils/helper'

const Demo = () => {

    const [text,setText] = useState(0);
    const [isDarkTheme,setIsDarkTheme] = useState(false);

    
    // heavy operation

    const prime = useMemo(() => findPrime(text),[text])
    const v = 20;

  return (
    <div className={`m-4 p-2 w-96 h-96 border border-black ${isDarkTheme ? 'bg-red-400 text-white' : ''}`}>
        <div>
            <button className='m-10 p-2 bg-green-600' onClick={()=> setIsDarkTheme(!isDarkTheme)}>Toggle {v}</button>
        </div>
      <div>
        <input 
            type='number' 
            className='border border-black w-73'
            value={text} onChange={(e)=>setText(e.target.value)} 
        />
      </div>
      <div>
        <h1 className='mt-4 font-bold text-xl'>nth Prime : {prime}</h1>
      </div>
    </div>
  )
}

export default Demo
