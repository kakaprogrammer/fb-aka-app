import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  const [state, dispatch] = useStateValue();

  const onSignin = () => {
    //Sign in
    auth
      .signInWithPopup(provider)
      .then((result) => {
        //console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        });
        console.log('User: ', result.user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png" alt=""/>
        <img src="https://vectorlogo4u.com/wp-content/uploads/2019/11/Facebook-Vector-Logo-720x340.png" alt=""/>
      </div>
      <Button onClick={onSignin}>
        Đăng nhập
      </Button>
    </div>
  )
}

export default Login
