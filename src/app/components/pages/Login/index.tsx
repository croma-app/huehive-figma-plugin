import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { API_URL, PAGES } from '../../../utils/contants';

import './index.css';
import background from '../../../assets/loginBackground.svg';

export interface LoginProps {
  setActivePage: React.Dispatch<React.SetStateAction<PAGES>>;
}

function generateRandomToken() {
  return uuidv4();
}

const Login = function (props: LoginProps) {
  const {} = props;
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (token) fetchUserInfo();
  }, [token]);

  const fetchUserInfo = () => {
    const intervalId = setInterval(async () => {
      try {
        const res = await fetch(`${API_URL}users/temp_token_login?token=${token}`);

        if (res.status == 200) {
          clearInterval(intervalId);
          const userInfo = await res.json();

          parent.postMessage({ pluginMessage: { type: 'store-user-info', userInfo: JSON.stringify(userInfo) } }, '*');
        } else if (res.status == 500) {
          setError(res.statusText); //TODO Display more userfriendly error messages on login erros
        }
      } catch (error) {
        setError(error.toString()); //TODO Display more userfriendly error messages on login errors
      }
    }, 1 * 1000);

    setTimeout(() => {
      clearInterval(intervalId); //Stop fetching data after 5 minutes of waiting
      setToken(''); //Reset the token to bring back the login screen
    }, 5 * 60 * 1000);
  };

  const onLoginButtonPress = () => {
    const generatedToken = generateRandomToken();
    window.open(`${API_URL}users/figma_token?token=${generatedToken}`);
    setToken(generatedToken);
  };

  const onSignupButtonPress = () => {
    window.open(`${API_URL}users/figma_token?intent=signup&token=${generateRandomToken()}`);
  };

  return (
    <div className="login-container">
      <img src={background} className="background" />
      <div className="login-outer">
        {token == '' ? (
          <div className="login">
            <h1>HueHive</h1>
            <h2>Welcomes You!</h2>
            <p className="intro">
              Just a few steps before you use the power of ChatGPT to generate some awesome colour schemes for your app.
            </p>
            <div className="auth-buttons">
              <button className="login-button" onClick={onLoginButtonPress}>
                Login
              </button>
              <button className="signup-button" onClick={onSignupButtonPress}>
                Sign Up
              </button>
            </div>
          </div>
        ) : (
          <div className="login-loading">
            <p>Waiting to login...</p>
            <a href={`${API_URL}users/figma_token?token=${token}`} target="_blank">
              Page didn't open? click here
            </a>
            <p className="error-message">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
