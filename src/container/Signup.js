import React,{useState} from 'react'

export default function Home() {
    const [name,setName]=useState("demo")
    function change(){
        setName("react")
    }
  return (
    <div>
        <h1>{name}</h1>
        <p><input name='email' placeholder='Email'/></p>
        <p><input name="password" placeholder='password'/></p>
        <button onClick={()=>setName("angular")}>submit</button>
    </div>
  )
}