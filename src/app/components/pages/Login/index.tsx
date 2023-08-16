import React from 'react';
import { PAGES } from '../../../utils/contants';
export interface LoginProps {
  setActivePage: React.Dispatch<React.SetStateAction<PAGES>>;
}
const Login = function (props: LoginProps) {
  const {} = props;
  return (
    <div className="login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ postMessage: parent.postMessage });
          parent.postMessage({ pluginMessage: { type: 'create-login', token: 'test' } }, '*');
        }}
      >
        <h3>Login page</h3>
        <input placeholder="Huehive login token" />
        <button type="submit">Submit </button>
        <div>
          Copy from <a href="https://huehive.co/users/figma_token">huehive profile page</a>.
        </div>
      </form>
    </div>
  );
};

export default Login;
