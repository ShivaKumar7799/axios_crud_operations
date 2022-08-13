import React, { useState } from 'react'
import "./Create.css"
import axios from 'axios'
import { Link } from 'react-router-dom';
import Read from './Read';

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [check, setCheckBox] = useState(false);

  const postData = () => {
    axios.post("https://62f7efccab9f1f8e8905fef0.mockapi.io/reactcrud", {
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
          <input id="firstName" type="text" placeholder='First Name' onChange={(event) => setFirstName(event.target.value)} />
        </div>
        <div>
          <label htmlFor='lastName' >Last Name</label>
          <input id='lastName' type="text" placeholder='Last Name' onChange={(event) => setLastName(event.target.value)} />
        </div>
        <div>
          <input id='checkbox' value={check} onChange={(event) => setCheckBox(!check)} type="checkbox" />
          <label htmlFor='checkbox' >I agree to the terms and conditions.</label>
        </div>
        <div style={{display: "flex", justifyContent : "center"}} >
          <Link to = "/read" element = {<Read />} ><input type="button" value="submit" onClick={postData} /> </Link>
        </div>
      </form>
    </div>
  )
}

export default Create