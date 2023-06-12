import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SignIn from './SignIn';

const Logout = () => {
  const navigate = useNavigate();

  const performLogout = async () => {
    try {
      const res = await fetch('/logout', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        console.log('Student has logged out');
        navigate('/sign-in'); // Redirect to the sign-in page after logout
      } else {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    performLogout();
  }, []);

  return (
    <>
    <SignIn />
    </>
  );
};

export default Logout;
