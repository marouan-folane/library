import React, { useState } from "react";

function Funcminuter() {
  const [objet, setobjet] = useState({
    nom: "",
    age: "",
    prenom: "",
    isstudent: false,
    radio:"",
    status: [], 
  });
 
  function hobbies(e) {
    if (!objet.status.includes(e.target.value)) {
      console.log(objet)
     
      let copie=objet.status.map((e)=>{return e})
      setobjet({...objet, status: [copie, e.target.value] });
    } else {
      setobjet({
        ...objet,
        status: objet.status.filter((item) => item !== e.target.value),
      });
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="objet"
        value={objet.nom}
        onChange={(e) => {
          setobjet({ ...objet, nom: e.target.value });
        }}
      />
      <input
        type="number"
        
        placeholder="age"
        value={objet.age}
        onChange={(e) => {
          setobjet({ ...objet, age: e.target.value });
        }}
      />
      is student:
      <input
        type="checkbox"
        checked={objet.isstudent}
        onChange={(e) => {
          setobjet({ ...objet, isstudent: e.target.checked });
        }}
      />
      <input
        type="text"
        placeholder="prenom"
        value={objet.prenom}
        onChange={(e) => {
          setobjet({ ...objet, prenom: e.target.value });
        }}
      />
      teacher:
      <input
        type="radio"
        value="teacher"
        checked={objet.radio === "teacher"}
        name="radio"
        onChange={(e) => {
          setobjet({...objet,radio: e.target.value });
        }}
      />
      student:
      <input
        type="radio"
        value="student"
        checked={objet.radio === "student"}
        name="radio"
        onChange={(e) => {
          setobjet({...objet,radio: e.target.value });
        }}
      />
      <div>
      
         sport:
        <input 
        value="sport" 
        type="checkbox" 
        name="sport" 
        onChange={hobbies} 
        />
        basket:
        <input
          value="basket"
          type="checkbox"
          name="basket"
          onChange={hobbies}
        />
        tennis:
        <input
          value="tennis"
          type="checkbox"
          name="tennis"
          onChange={hobbies}
        />
      </div>
      <div>
        <h1>Name: {objet.nom}</h1>
        <h1>Age: {objet.age}</h1>
        <h1>First Name: {objet.prenom}</h1>
        <h1>Is Student: {objet.isstudent ? "Yes" : "No"}</h1>
        <h1> status:{objet.radio}</h1> 
        <h1>hobbies:{objet.status.join(",")}</h1>
        
       
      </div>
    </div>
  );
}

export default Funcminuter;
