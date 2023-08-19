import React, { useState } from 'react';
import { API_URL, PAGES } from '../../../utils/contants';
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
          const res = await fetch(API_URL + 'users/temp_token_login?token=' + token, { mode: 'no-cors' });
          const mackRes = {
            user: {
              id: 10,
              email: 'bhuwanchandra.it@gmail.com',
              full_name: 'Bhuwan Joshi',
              uid: '101056040371510830413',
              avatar_url: 'https://lh3.googleusercontent.com/a/AGNmyxZNMWFJhv_NVi7DICzM4YwfeaWV-CjS8UNhigRP=s96-c',
              created_at: '2023-04-07T16:41:02.084Z',
              updated_at: '2023-04-07T16:41:02.084Z',
              username: 'late.snow.1218',
              device_id: null,
              temp_login_token: 'c749e461a8c3bb24668e9da5cce739b65b49a67dd27adcf0490204e43512a9fa',
              temp_login_token_expires_at: '2023-08-16T15:20:42.450Z',
            },
            userToken: 'YJPWqVR5riuxkixAcyd8',
          };
          parent.postMessage({ pluginMessage: { type: 'store-user-info', userInfo: JSON.stringify(mackRes) } }, '*');
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
        <div>
          Copy from <a href="https://huehive.co/users/figma_token">huehive profile page</a>.
        </div>
      </form>
    </div>
  );
};

export default Login;
