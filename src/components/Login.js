import React from 'react';
import {useHistory} from 'react-router-dom';
import * as auth from '../utils/auth.js';
import AuthPage from './AuthPage';

function Login({setLocation, handleLogin, setAppEmail, openNotice}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password){
      return;
    }
    auth.authorize(password, email)
    .then((data) => {
      if (data.token){
        setAppEmail(email);
        setEmail('');
        setPassword('');
        handleLogin();
        history.push('/');
    }
    })
    .catch((err) => {
      openNotice(false);
      console.log(err)
    });
  }

  React.useEffect(()=> {
    setLocation('/sign-in');
  },[setLocation]);
  return (
    <AuthPage
      email={email}
      password={password}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      title="Вход"
      buttonTitle="Войти"
      onSubmit={handleSubmit}
    />
  )
}

export default Login;
