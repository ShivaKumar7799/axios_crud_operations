import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Read() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios.get("https://62f7efccab9f1f8e8905fef0.mockapi.io/reactcrud").then(
      (resp) => setApiData(resp.data)
    )
  },[])

  const setData = (data) => {
   let {id, firstName, lastName, check} = data;
   localStorage.setItem("Id", id);
   localStorage.setItem("First Name", firstName);
   localStorage.setItem("Last Name", lastName);
   localStorage.setItem("Checkbox value", check)
  }

  const getData = () => {
    axios.get("https://62f7efccab9f1f8e8905fef0.mockapi.io/reactcrud").then((resp) => {
      setApiData(resp.data)
    })
  }

  const deleteData = (id) => {
      axios.delete(`https://62f7efccab9f1f8e8905fef0.mockapi.io/reactcrud/${id}`).then(() => {
        getData();
      })
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Checked or Not</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {apiData?.map((item,index) => 
        {
          return <tr key={item.id} >
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.check ? "checked" : "unchecked"}</td>
                    <td style={{cursor : "pointer"}} onClick={() => setData(item)} >
                      <Link to='/update'>Update</Link>
                    </td>
                    <td style={{cursor : "pointer"}} onClick={() => deleteData(item.id)} >Delete</td>
                </tr>
        }
          )}
        </tbody>
      </table>
    </>
  )
}

export default Read