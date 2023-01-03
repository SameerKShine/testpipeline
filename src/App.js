import './App.css';
import React from "react"
import NavNavbar from "./components/navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './components/loginForm/LoginForm';
import {Route,Routes} from "react-router-dom"
import Home from "./components/home/Home"
import SignUp from "./components/signUp/SignUp"
import Profile from "./components/profiles/Profiles"
import UpdateProfile from "./components/updateProfile/UpdateProfile"
import ErrorPage from "./components/errorPage/ErrorPage"
import ProfileRouting from './components/profiles/ProfileRouting';
function App() {
 

  return (
    <>
      <NavNavbar />
      
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/signup" element={<SignUp/>}/>
     <Route element={<ProfileRouting/>}>
          <Route path="/profile/:id" element={<Profile/>}/> 
          <Route path="/profile" element={<Profile/>}/> 
      </Route>
      <Route element={<ProfileRouting/>}>
      <Route path="/update/:id" element={<UpdateProfile/>}/>
      <Route path="/update" element={<UpdateProfile/>}/>
      </Route>
      <Route path="*" element={<ErrorPage/>} />
    </Routes>

    </>
  );
}

export default App;
