import React from 'react';
import Login from "../Container/Login/Login";
import RegistrationForm from '../Container/RegistrationForm/RegistrationForm';

const routes = [
    {
      path : '/',
      exact : true,
      main: () => <Login/>
  },
  {
      path: '/Registration',
      exact: false,
      main: () => <RegistrationForm/>
  }
]

export default routes;