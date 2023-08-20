import React from 'react';
import { UserInfo } from '../../../types';

interface HeaderProps {
  userInfo: UserInfo;
}

const Header = function (props: HeaderProps) {
  const { userInfo } = props;
  return (
    <div>
      <div className="header-branding-area navbar-brand">
        <div className="logo">
          <img src="https://huehive.co/assets/logos/croma-fdaef4e29c5ef06a91d4f4272650e9b5077985204aaa20dea78173eeb360ef80.svg" />
        </div>
        <div className="header-name">
          <h2>Huehive</h2>
        </div>
      </div>
      <div>
        <div className="kebab">
          <img src={userInfo.user.avatar_url} height={60} />
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
      </div>
    </div>
  );
};

export default Header;
