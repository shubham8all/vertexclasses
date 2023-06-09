import React from 'react';
import '../Styles/SignUpCard.css';

const SignUpOTPCard = () => {
  return (
    <div className='sign-up-card-container'>
    <span className='heading-sign-up'>Sign Up</span>
    <span className='sign-up-enter-otp'>Enter the OTP sent to your Email or Mobile.</span>
      <div className='form-group'>
        <label className='otp-text' htmlFor='password'>OTP*:</label>
        <input type='text' className='sign-up-name' />
      </div>
      <div className='sign-up-buttons'>
        <button className='sign-up-register'>Confirm</button>
      </div>
    </div>
  );
};

export default SignUpOTPCard;
