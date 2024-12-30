import React, { useState } from 'react'

function Exofinal() {
    const[form,setform]=useState({
        name:"",
        pass:"",
        prenom:"",
        age:"",
        isstudent:"",
        hobies:[]
    })
    const database=[
        {name:"marouane",pass:"1234",}
    ]
    const errors={
        name:"name wrong",
        age:"wrong",
        pass:"pass incorect",
        isstudent:"falied",
        hobies:"soory not same hobies"
    }
    const[isSubmit,setIsSubmit]=useState(false)
    const [error,seterror]=useState({})
   function handle(e){
    e.preventDefault()
    const data=database.find((item)=>item.name===form.name)
    console.log(data)
    if (data) {
        if (data.pass !== form.pass) {
          seterror({ name: "pass", message: errors.pass });
        } else {
          setIsSubmit(true);
        }
      } else {
        seterror({ name: "name", message: errors.name });
      }
   

   
        
    } 
    // const hobiese=(e)=>{
    //     if(!form.hobies.includes(e.target.value)){
    //         let copie=form.hobies.map((e)=>{ return e})
    //         setform({...form,hobies:[copie,e.target.value]})
    //         if(!form.hobies.includes("tennis","basket")){
    //             seterror({name:"hobie",message:errors.hobies})

    //         }

          
    //     }else{
    //         setform({...form,hobies:form.hobies.filter((item)=>{return item!==e.target.value})})
    //     }
    

   
   function rendereror(name){
    if(name!==error.name){
        return <div style={{color:"red"}}>{error.message}</div>
    }
   }
   const Failed=(
    <div>
      <form onSubmit={handle}>
       <input  type='text' placeholder='name' value={form.name} onChange={(e)=>{setform({...form,name:e.target.value})}}/>
       {rendereror("name")}
       <input  type='text' placeholder='pass' value={form.pass} onChange={(e)=>{setform({...form,pass:e.target.value})}}/>
       {rendereror("pass")}
       <input  type='text' placeholder='prenom' value={form.prenom} onChange={(e)=>{setform({...form,prenom:e.target.value})}}/>
       {/* <input  type='text' placeholder='age' value={form.age} onChange={(e)=>{setform({...form,age:e.target.value})}}/>
       fotball:<input  type='checkbox' value="fotball"onChange={hobiese}/>
       basket:<input  type='checkbox'  value="basket" onChange={hobiese}/>
       tennis:<input  type='checkbox'  value="tennis" onChange={hobiese}/>
       {rendereror("hobie")} */}

      <input type='radio' value="teacher" checked={form.isstudent==="teacher"}
        onChange={(e)=>{setform({...form,isstudent:e.target.value})}}/> teacher
          student:<input type='radio' value="student" checked={form.isstudent==="student"}
        onChange={(e)=>{setform({...form,isstudent:e.target.value})}}/>
        <input type='submit' value="click" />
      </form>
    </div>
   )
   const success=(
    <div>
        <h1>hello {form.name} your age is {form.age} and hobbie {form.hobies.join(",")}</h1>
    </div>
   )
  return (
  <div>
    {isSubmit?success:Failed}
  </div>
    
  )}


export default Exofinal
