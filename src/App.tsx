
import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket , setSocket] = useState<WebSocket>();
  const inputRef = React.useRef<HTMLInputElement>(null);
  function sendMessage() {
    if(!socket || !inputRef.current) {
      return;
    }
    const message  =  inputRef.current.value;

    socket.send(message);
  }
  
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080')
    setSocket(ws)
    ws.onmessage = (e) => {
      alert(e.data)
    }
  },[])
 
 return <div>
       <div>
         <input ref={inputRef} type="text" placeholder="Send Message" />
         <button onClick={sendMessage}>Send</button>
       </div>
 </div>
}

export default App
