import React from 'react'
// import Navbar from '../Components/Jsx/Navbar'
// import Footer from '../Components/Jsx/Footer'
import SignUpOTP from '../Components/Jsx/SignUpOTP'
import SignUpSuccess from '../Components/Jsx/SignUpSuccess'
import ResetYourPasswordVerification from '../Components/Jsx/ResetYourPasswordVerification'
import ResetYourPasswordConfirm from '../Components/Jsx/ResetYourPasswordConfirm'
import ResetPasswordConfirmation from '../Components/Jsx/ResetPasswordConfirmation'

const RouteSignUp = () => {
  return (
    <>
    {/* <Navbar /> */}
    <SignUpOTP />
    <SignUpSuccess />
    <ResetYourPasswordVerification />
    <ResetYourPasswordConfirm />
    <ResetPasswordConfirmation />
    {/* <Footer /> */}
    </>
  )
}

export default RouteSignUp