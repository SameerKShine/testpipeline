import React from "react"
import {Navigate,Outlet,useParams} from "react-router-dom"
const ProfileRouting = () => {

let data = localStorage.token;
let {id}= useParams()
//   if(data)
   console.log(id)
  return(
<>
{data?
<Outlet/>

    : <> <Navigate to='/login'/></>}
</>
  )
}

export default ProfileRouting