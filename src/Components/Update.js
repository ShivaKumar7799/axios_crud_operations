import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Update() {
  const [id, setId] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState('');
  const [check, setCheckBox] = useState(false);

  console.log(check, "stic")
  
  useEffect(() => {
    setId(localStorage.getItem("Id"), "id value")
    setFirstName(localStorage.getItem("First Name"))
    setLastName(localStorage.getItem("Last Name"));
    setCheckBox(localStorage.getItem("Checkbox value") === "true" ? true : false);
  }, [])

  const updateApiData = () => {
    axios.put(`https://62f7efccab9f1f8e8905fef0.mockapi.io/reactcrud/${id}` , {
       firstName,
       lastName,
       check
    })
  }
  return (
    <div style={{display : "flex", justifyContent : "center"}} >
      <form className="create-form" >
        <div>
          <label htmlFor='firstName' >First Name</label>
          <input id="firstName" value={firstName} type="text" placeholder='First Name' onChange={(event) => setFirstName(event.target.value)} />
        </div>
        <div>
          <label htmlFor='lastName' >Last Name</label>
          <input id='lastName' value={lastName} type="text" placeholder='Last Name' onChange={(event) => setLastName(event.target.value)} />
        </div>
        <div>
          <input id='checkbox' checked={check} onChange={(event) => setCheckBox(!check)} type="checkbox" />
          <label htmlFor='checkbox' >I agree to the terms and conditions.</label>
        </div>
        <div style={{display: "flex", justifyContent : "center"}} >
          <Link to = "/read" ><input type="button" value="submit" onClick={updateApiData} /></Link>
        </div>
      </form>
    </div>
  )
}

export default Update