import axios from 'axios';
import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {useNavigate,useParams} from "react-router-dom"
import "./Profiles.css"
const Profiles = () => {
  const [user_data, setUserData] = useState('')
  let navigate = useNavigate();
  let {id}= useParams()
  
  useEffect(()=>{
  async function fetchData() {
    // You can await here
    if(!id){
      return navigate("/login")
    }
      await axios.get(`http://localhost:2500/getProfile/${id}`)
  .then((res)=>{console.log(res)
    setUserData(res.data.data)}
  )
   .catch((err)=>{
    navigate("not_found")
   })
  }
  fetchData();
  },[])
  console.log(user_data)
  // for logOut :-
  function handleLogOut(e){
e.preventDefault();
// localStorage.removeItem("token");
 localStorage.clear();
 console.log(localStorage)
if(localStorage.length ===0 ){
  return navigate("/login");
}
  }
  // for update profile :-
 async function handleUpdate (e){
  e.preventDefault()
  
  //     await axios.get(`http://localhost:2500/getProfile/${id}`)
  // .then((res)=>{console.log(res)
    return navigate("/update/"+id)}
  // )
  //  .catch((err)=>{
  //   navigate("not_found")
  //  })
  // }
  return (
   <div className="cont">
   <Card style={{ width: '40rem' }} >
      <Card.Img variant="top" src="https://images.pexels.com/photos/9129725/pexels-photo-9129725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title><strong>Profile:-</strong></Card.Title>
        <Form.Group className="mb-3">
        <Form.Label>First Name :-</Form.Label>
        <Form.Control placeholder="Admin" value={user_data.firstName} disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last Name :-</Form.Label>
        <Form.Control placeholder="admin" value={user_data.lastName} disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email :-</Form.Label>
        <Form.Control type="email" placeholder="admin@panel.com" value={user_data.email} disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>password :-</Form.Label>
        <Form.Control type="password" placeholder="Password" disabled />
      </Form.Group>
        <Button variant="primary" onClick={handleUpdate}>Edit Profile</Button>
        <Button className="right" variant="warning" onClick={handleLogOut}>Log Out</Button>
      </Card.Body>
    </Card>
   </div>
  )
}

export default Profiles