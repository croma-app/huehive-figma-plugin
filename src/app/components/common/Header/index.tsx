import React, { useState } from 'react';
import { UserInfo } from '../../../types';
import './index.css';

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
          <img src="https://huehive.co/assets/logos/croma-fdaef4e29c5ef06a91d4f4272650e9b5077985204aaa20dea78173eeb360ef80.svg" />
        </div>
        <h2>Huehive</h2>
      </div>
      <div className="kebab">
        <img
          onClick={() => {
            setToggleDropdown(!toggleDropdown);
          }}
          className="avatar"
          src={userInfo.user.avatar_url}
          height={60}
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
