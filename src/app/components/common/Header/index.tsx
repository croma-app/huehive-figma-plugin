import React from 'react';
import { UserInfo } from '../../../types';
import './index.css';

interface HeaderProps {
  userInfo: UserInfo;
}

const Header = function (props: HeaderProps) {
  const { userInfo } = props;
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
        <img className="avatar" src={userInfo.user.avatar_url} height={60} />
        <ul className="dropdown">
          <li>
            <a href="http://www.g.com">Art</a>
          </li>
          <li>
            <a href="http://www.g.com">Coding</a>
          </li>
          <li>
            <a href="http://www.g.com">Design</a>
          </li>
          <li>
            <a href="http://www.g.com">Web Development</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
