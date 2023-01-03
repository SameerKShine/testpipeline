import React ,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom"

// import Alert from 'react-bootstrap/Alert';
import "./login.css"
const LoginForm = () => {
  
  let navigate = useNavigate();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const handleEmail=(e)=>{setEmail(e.target.value)}
    const handlePassword=(e)=>{setPassword(e.target.value)}

const  handleLogIn= async(e)=>{

e.preventDefault();

if(!email){
   alert("Please enter your email")
}else if(!password){
    alert("Please enter your password")
}


  const res = await fetch("http://localhost:2500/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email:email,
      password:password
    })      
   
  })
// console.log(res)
  const data  = await res.json() 
  // console.log(res.status)
  if(res.status === 422 || !data){
    window.alert("User not Found !!!")

  }
  if(res.status === 202) {
    // console.log(data)
    console.log("success")
    let token = data.token
    // console.log(data.token)
    localStorage.setItem('token', token);
    return navigate("/profile/"+token);
  }


 }
  return (
   <>
     <Form>
     <Form.Label><strong>Log In :-</strong></Form.Label>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={handleEmail}  value={email} />
      
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={handlePassword} value={password} />
    </Form.Group>
  
    <Button variant="primary" onClick={handleLogIn}>
      Submit
    </Button>
  </Form>
   </>
  )
}

export default LoginForm