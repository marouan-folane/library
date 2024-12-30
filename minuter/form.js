import React, { useState } from "react";
import Book from "../book";


function Form() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const database = [
    { name: "user1", pass: "pass1" },
  ];

  const errorMessages = {
    name: "Sorry, your name is incorrect.",
    pass: "Sorry, your password is incorrect.",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = database.find((item) => item.name === name);
    if (data) {
      if (data.pass !== pass) {
        setErrors({ name: "pass", message: errorMessages.pass });
      } else {
        setIsSubmit(true);
      }
    } else {
      setErrors({ name: "name", message: errorMessages.name });
    }
  };

  const renderError = (fieldName) => {
    if (fieldName === errors.name) {
      return <div style={{ color: "white",marginTop:"10px" }}>{errors.message}</div>;
    }
    return null;
  };
  const input={
    width:"300px",
    height:"30px" ,
    border:"1px solid black",
    borderRadius:"30px",
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",


  }
  const button={
    width:"200px",
    height:"30px" ,
    border:"1px solid black",
    borderRadius:"30px",
    backgroundColor:"blue",
    color:"white",
    fontSize:"10px",
    alignItems:"center",
    textAlign:"center"
  }
 const formin={
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    textAlignLast: "center",

    marginTop: "20px",
    width: "900px",
   
    position: "absolute",
    top: "5%",
    left: "14%",
   alignItems:"center",
   justifyContent:"center",
    height: "500px",
    margin: "auto",
    backgroundImage: `url("images/bgbook.jpeg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",

    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    fontFamily:"times",
    fontSize:"20px",
    color:"white",
    borderRadius:"30px",
    padding:"60px",
    textAlign:"center",
 }
  const renderForm = (
    <>
    <form onSubmit={handleSubmit} style={formin}>
        <h2 style={{color:"white",fontSize:"50px"}}>login</h2>

      <div>
        <label>Username:</label>
        <input
        style={input}
          name="uname"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {renderError("name")}
      </div>
      <div>
        <label>Password:</label>
        <input
        style={input}
          name="upass"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        {renderError("pass")}
      </div>
      <button type="submit" style={button}>Submit</button>
    </form></>
  );

  const renderSuccess = (
   <>
  

   <Book/>
   </>
  );

  return <div>{isSubmit ? renderSuccess : renderForm}</div>;
}

export default Form;
