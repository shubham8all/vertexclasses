import React from 'react'
import {Routes,Route} from 'react-router-dom'
import RouteHome from "./Routes/RouteHome"
import RouteAboutUs from "./Routes/RouteAboutUs"
import RouteAdmission from "./Routes/RouteAdmission"
import RouteStudentZone from "./Routes/RouteStudentZone"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RouteHome />}/>
        <Route path="/aboutus" element={<RouteAboutUs />}/> 
        <Route path="/admission" element={<RouteAdmission />}/>
        <Route path="/studentzone" element={<RouteStudentZone />}/>
      </Routes>
    </>
    );
}

