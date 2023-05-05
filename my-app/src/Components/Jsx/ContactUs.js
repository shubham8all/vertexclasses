import React from 'react'
import '../Styles/ContactUs.css'
import ContactUsImage from '../svgs/contactUs.svg'
import Button from './Button'

const ContactUs = () => {
  return (
    <>
        <p className='contact-us-heading'>Contact Us</p>
        <div className='divider'>
            <div className='contactus-left'>
                <img src={ContactUsImage} alt="Man on cloud"/>
            </div>
            <div>
                <form className='contactus-right'>
                {/* <div> */}
                    <label>Name</label>
                    <input type='name' placeholder='Enter Your Name Here!' id='name'></input>
                    {/* </div> */}
                    <br />
                    {/* <div> */}
                    <label>Mobile No</label>
                    <input type='name' placeholder='Enter Your Mobile Number Here!' id='name'></input>
                    {/* </div> */}
                    <br />
                    {/* <div> */}
                    <label>Message</label>
                    <input type='name' placeholder='Enter Your Message Here!' id='message'></input>
                    {/* </div> */}
                </form>
                <div style={{marginLeft:"17.5rem",marginTop:"1rem"}}>
                <Button buttonName="Send ➤" />
                </div>
            </div>
        </div>
        <div className='lower-section-contactus'>.</div>
    </>
  )
}

export default ContactUs