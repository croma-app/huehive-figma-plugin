import React, { useState } from 'react';
import { UserInfo } from '../../../types';
import './index.css';
import logo from '../../../assets/logo.svg';

interface HeaderProps {
  userInfo: UserInfo;
}

const Header = function (props: HeaderProps) {
  const { userInfo } = props;
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <header className="header">
      <div
        className="header-name"
        onClick={() => {
          window.open('https://huehive.co/', '_blank');
        }}
      >
        <div className="logo">
          <img src={logo} />
        </div>
        <h2>HueHive</h2>
      </div>
      <div className="kebab">
        <img
          onClick={() => {
            setToggleDropdown(!toggleDropdown);
          }}
          className="avatar"
          src={userInfo.user.avatar_url}
          height={40}
        />
        {toggleDropdown && (
          <ul className="dropdown">
            <li
              onClick={() => {
                parent.postMessage({ pluginMessage: { type: 'logout' } }, '*');
              }}
            >
              Logout
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
