import React from 'react'
import {Routes,Route} from 'react-router-dom'
import RouteHome from "./Routes/RouteHome"
import RouteHomeStudent from "./Routes/RouteHomeStudent"
import RouteAboutUs from "./Routes/RouteAboutUs"
import RouteCourses from "./Routes/RouteCourses"
import RouteAdmission from "./Routes/RouteAdmission"
import RouteStudentZone from "./Routes/RouteStudentZone"
import RouteJuniorDivision from "./Routes/RouteJuniorDivision"
import NotFound from './Components/Jsx/404'
import RouteSignUp from './Routes/RouteSignUp'
import RouteSignUpSuccess from './Routes/RouteSignUpSuccess'
import RouteSignUpOTP from './Routes/RouteSignUpOTP'
import RouteSignIn from './Routes/RouteSignIn'
import RouteForgetPassword from './Routes/RouteForgetPassword'
import RouteSetNewPassword from './Routes/RouteSetNewPassword'
import RoutePasswordChangedSuccessfully from './Routes/RoutePasswordChangedSuccessfully'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RouteHome />}/>
        <Route path="/home-student" element={<RouteHomeStudent />}/>
        <Route path="/aboutus" element={<RouteAboutUs />}/> 
        <Route path="/courses" element={<RouteCourses />}/> 
        <Route path="/admission" element={<RouteAdmission />}/>
        <Route path="/studentzone" element={<RouteStudentZone />}/>
        <Route path="/junior-division" element={<RouteJuniorDivision />}/>
        <Route path="/sign-up" element={<RouteSignUp />}/>
        <Route path="/otp" element={<RouteSignUpOTP />}/>
        <Route path="/sign-in" element={<RouteSignIn />}/>
        <Route path="/successfully-registered" element={<RouteSignUpSuccess />}/>
        <Route path="/reset-password" element={<RouteForgetPassword />}/>
        <Route path="/set-new-password" element={<RouteSetNewPassword />}/>
        <Route path="/password-changed-successfully" element={<RoutePasswordChangedSuccessfully />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </>
    );
}

