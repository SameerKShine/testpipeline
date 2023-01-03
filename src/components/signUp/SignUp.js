import axios from 'axios';
import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate} from "react-router-dom"

const SignUp = () => {
  const navigate = useNavigate()
const [firstName,setFirstname]=useState("")
const [lastName,setLastname]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const handleFirstName=(e)=>{setFirstname(e.target.value)}
const handleLastName=(e)=>{setLastname(e.target.value)}
const handleEmail=(e)=>{setEmail(e.target.value)}
const handlePassword=(e)=>{setPassword(e.target.value)}
  const handleSignUp = async (e) => {
    console.log('firstName',firstName)
    
    // e.preventDefault()
    if(!firstName){
      alert("Please enter your firstName")
    }
    else if(!lastName){
      alert("Please enter your lastName")
    }else if(!email){
      alert("Please enter your email")
    }else if(!password){
      alert("please enter your password")
    }
    await axios.post("http://localhost:2500/signup",{
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password
    })
      .then((res) => {
        console.log(res)
      alert("login successfully")
     return navigate("/login")
      }

      )
      .catch((err) => {
        console.log(err)
        // navigate("not_found")
      })
  }
  return (
    <>
      <Form>
        <Form.Label><strong>Sign Up :-</strong></Form.Label>
        <Row>
          <Col>
            <Form.Control placeholder="First name" onChange={handleFirstName} value={firstName}/>
          </Col>
          <Col>
            <Form.Control placeholder="Last name" onChange={handleLastName} value={lastName} />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Form.Control type="email" placeholder="Email" onChange={handleEmail}  value={email} />
          </Col>
          <Col>
            <Form.Control type="password" placeholder="Password" onChange={handlePassword} value={password} />
          </Col>
        </Row>
        <br></br>
        {/* <Form.Label>Upload your profile</Form.Label>
        <Form.Control type="file" /> */}
        <br></br>
        <Button variant="primary"  onClick={handleSignUp}>
          Submit
        </Button>
      </Form>
    </>
  )
}

export default SignUp