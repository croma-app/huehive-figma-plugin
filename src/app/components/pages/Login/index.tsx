import React, { useEffect, useState } from 'react';
import { API_URL, PAGES } from '../../../utils/contants';

import './index.css';
import background from '../../../assets/loginBackground.svg';

export interface LoginProps {
  setActivePage: React.Dispatch<React.SetStateAction<PAGES>>;
}

function generateRandomToken() {
  const randomValues = new Uint8Array(128);
  window.crypto.getRandomValues(randomValues);

  // Convert the Uint8Array to a base64 string
  const base64String = btoa(String.fromCharCode.apply(null, randomValues));

  return base64String;
}

const Login = function (props: LoginProps) {
  const {} = props;
  const [token, setToken] = useState('');

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
        }
      } catch {}
    }, 4000);
  };

  const onLoginButtonPress = () => {
    const generatedToken = generateRandomToken();
    window.open(`${API_URL}users/figma_token?token=${generatedToken}`);
    setToken(generatedToken);
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
            <button onClick={onLoginButtonPress}>Login</button>
          </div>
        ) : (
          <div className="login-loading">
            <p>Waiting to login...</p>
            <a href={`${API_URL}users/figma_token?token=${token}`} target="_blank">
              Page didn't open? click here
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
