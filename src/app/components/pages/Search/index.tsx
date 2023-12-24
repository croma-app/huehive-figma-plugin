import React from 'react';
import Header from '../../common/Header';
import { PAGES } from '../../../utils/contants';
import { UserInfo } from '../../../types';
import back from '../../../assets/back.svg';
import './index.css';
interface SearchProps {
  setActivePage: React.Dispatch<React.SetStateAction<PAGES>>;
  userInfo: UserInfo;
}

const Search = function (props: SearchProps) {
  const { setActivePage, userInfo } = props;
  return (
    <div>
      <Header userInfo={userInfo}></Header>
      <div className="search">
        <div className="title-bar">
          <h2> Search </h2>
          <button
            className="back"
            onClick={() => {
              setActivePage(PAGES.MY_PALETTES);
            }}
          >
            <img src={back} height={20} width={20} /> Back
          </button>
        </div>
      </div>
      Test search page
    </div>
  );
};

export default Search;
