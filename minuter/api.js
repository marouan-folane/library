import axios from 'axios'
import React,{useEffect, useState} from 'react'

function Api() {
 const[user,setuser]=useState([])
 useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{setuser(res.data)})
 },[user])
  return (
    <div>
        {user.map((elt,index)=>{
            return(
            <h1 key={index}> {elt.name} <button >click</button></h1>) 
        })}
      
    </div>
  )
}

export default Api
