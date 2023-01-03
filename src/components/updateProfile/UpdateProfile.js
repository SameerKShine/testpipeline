import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {useNavigate,useParams} from "react-router-dom"

import "./UpdateProfile.css"
const UpdateProfile = () => {
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

  async function updateProfile(e){
e.preventDefault()
if(!id){
  return navigate("/login")
}
  }
  return (
    <div className="cont">
   <Card style={{ width: '40rem' }} >
      <Card.Img variant="top" src="https://images.pexels.com/photos/9129725/pexels-photo-9129725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title><strong>Profile:-</strong></Card.Title>
        <Form.Group className="mb-3">
        <Form.Label>First Name :-</Form.Label>
        <Form.Control placeholder="Admin" value={user_data.firstName}  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Last Name :-</Form.Label>
        <Form.Control placeholder="admin"  value={user_data.lastName} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email :-</Form.Label>
        <Form.Control type="email" placeholder="admin@panel.com"  value={user_data.email} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>password :-</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
      </Form.Group>
        <Button variant="primary" onClick={updateProfile} >Update Profile</Button>
      </Card.Body>
    </Card>
   </div>
  )
}

export default UpdateProfile