import React from 'react';
import { PAGES } from '../../../utils/contants';
import Header from '../../common/Header';
import { UserInfo } from '../../../types';

export interface PaletteDetailsProps {
  setActivePage: React.Dispatch<React.SetStateAction<PAGES>>;
  userInfo: UserInfo;
}

const PaletteDetails = function (props: PaletteDetailsProps) {
  const { userInfo } = props;
  return (
    <div>
      <Header userInfo={userInfo}></Header> Palette Details
      <div></div>{' '}
    </div>
  );
};

export default PaletteDetails;
