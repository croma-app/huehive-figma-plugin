import React, { useState } from 'react';
import { API_URL, PAGES } from '../../../utils/contants';
import './index.css';
export interface LoginProps {
  setActivePage: React.Dispatch<React.SetStateAction<PAGES>>;
}
const Login = function (props: LoginProps) {
  const {} = props;
  const [token, setToken] = useState('');
  return (
    <div className="login">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await fetch(API_URL + 'users/temp_token_login?token=' + token);
          const userInfo = await res.json();
          parent.postMessage({ pluginMessage: { type: 'store-user-info', userInfo: JSON.stringify(userInfo) } }, '*');
        }}
      >
        <h3>Login page</h3>
        <input
          value={token}
          onChange={(e) => {
            setToken(e.target.value);
          }}
          required
          placeholder="Huehive login token"
        />
        <button type="submit">Submit </button>
        <div >
          <p className='login-text'>
            Copy login token from{' '}
            <a href="https://huehive.co/users/figma_token" target="_blank">
              HueHive
            </a>
          </p>
          <p className='sign-up-text'>
            <a href="https://huehive.co/users/sign_up" target="_blank">Sign up </a><span>if you don't have an account on HueHive</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
