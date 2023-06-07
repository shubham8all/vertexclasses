import React from 'react'
import {Routes,Route} from 'react-router-dom'
import RouteHome from "./Routes/RouteHome"
import RouteAboutUs from "./Routes/RouteAboutUs"
import RouteCourses from "./Routes/RouteCourses"
import RouteAdmission from "./Routes/RouteAdmission"
import RouteStudentZone from "./Routes/RouteStudentZone"
import RouteJuniorDivision from "./Routes/RouteJuniorDivision"
import NotFound from './Components/Jsx/404'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RouteHome />}/>
        <Route path="/aboutus" element={<RouteAboutUs />}/> 
        <Route path="/courses" element={<RouteCourses />}/> 
        <Route path="/admission" element={<RouteAdmission />}/>
        <Route path="/studentzone" element={<RouteStudentZone />}/>
        <Route path="/junior-division" element={<RouteJuniorDivision />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </>
    );
}

