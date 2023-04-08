import { useState,useEffect } from 'react'
import './App.css'

export default function App() {
  const [time,settime] = useState('')
  const [gmttime,setgmttime] = useState('')
  const [esttime,setesttime] = useState('')

  useEffect(() => {

    // componentDidMount
    const interval = setInterval(() => {
    const now = new Date()

      // componentDidUpdate
      settime(now.toLocaleDateString('en-US',{ weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })+' '+now.toLocaleTimeString())
      
      setgmttime(now.toLocaleString('en-US', {weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'GMT'}))
      
      setesttime(now.toLocaleDateString('en-US',{ weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })+' '+now.toLocaleTimeString('en-US',{timeZone:'America/New_York'}))
    },1000)

    // componentWillUnmount
    return () => clearInterval(interval);
  
  },[])
  
  return (
    <div className='time-container'>
    <div className='time'>
      {time} IST
      <br/>
      {gmttime} GMT
      <br/>
      {esttime} EST
    </div>
  </div>
  )
}
