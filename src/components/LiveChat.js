import React, { useEffect, useState } from 'react'
import ChartMessage from './ChartMessage'
import { useDispatch, useSelector } from 'react-redux'
import {addMessage} from '../utils/chartSlice'
import { generateRandomMessage, generateRandomName } from '../utils/helper'

const LiveChat = () => {
    const dispatch = useDispatch();
    const chartMessages = useSelector((store)=>store.chart.messages)
    const [liveMessage, setLiveMessage] = useState('')

    useEffect(()=>{
        const i = setInterval(()=>{
            // API Polling
            console.log('API Polling');
            dispatch(addMessage({
                name:generateRandomName(),
                message:generateRandomMessage(20),
            }))

        },500);

        return () => clearInterval(i);
    },[])

  return (
    <>
    <div className='w-full h-[600px] ml-2 p-4 border border-black bg-slate-100 rounded-lg space-y-2 overflow-y-scroll cursor-pointer flex flex-col-reverse'>
       <div> {
            // Disclaimer: Don't use indexes as keys
            chartMessages.map((c,index)=>(
                <ChartMessage 
                    key={index}
                    name={c.name} 
                    message={c.message} 
                />
            ))
        }
        </div>
        
    </div>
    <form 
        className='w-full p-2 ml-2 border border-black flex'
        onSubmit={(e)=>{
            e.preventDefault()
            dispatch(addMessage({
                name:"Vijay",
                message:liveMessage,
            }))
            setLiveMessage('')
        }}
    >
    <input 
        type='text'
        className='w-9/12 border border-black px-2'
        value={liveMessage}
        onChange={(e)=>setLiveMessage(e.target.value)}
    />
    <button className='px-2 mx-2 bg-green-300'>Send</button>
    </form>
    </>
  )
}

export default LiveChat
