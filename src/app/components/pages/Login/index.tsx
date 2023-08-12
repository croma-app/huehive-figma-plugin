import React from 'react';
import { PAGES } from '../../../utils/contants';
export interface LoginProps {
  setActivePage: React.Dispatch<React.SetStateAction<PAGES>>;
}
const Login = function (props: LoginProps) {
  const {} = props;
  return (
    <div>
      Login page
      <div></div>
    </div>
  );
};

export default Login;
