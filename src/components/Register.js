import React from 'react';
import AuthPage from './AuthPage';
import {useHistory} from 'react-router-dom';
import * as auth from '../utils/auth.js';
import {Link} from 'react-router-dom';

function Register({setLocation, openNotice}) {
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
      auth.register(password, email)
      .then((res) => {
         if(res){
            history.push('/sign-in');
            openNotice(true);
        } else {
          openNotice(false);
          }
      });
  }
  React.useEffect(()=> {
    setLocation('/sign-up')
  },[setLocation]);
return (
  <AuthPage
    email={email}
    password={password}
    handleEmailChange={handleEmailChange}
    handlePasswordChange={handlePasswordChange}
    title="Регистрация"
    buttonTitle="Зарегистрироваться"
    onSubmit={handleSubmit}
    children={<Link className="auth__link" to="/sign-in">Уже зарегистрированы? Войти</Link>}
  />
);

}


export default Register;
