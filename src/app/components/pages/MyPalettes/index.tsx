import React from 'react';
import { PAGES } from '../../../utils/contants';

export interface MyPalettesProps {
  setActivePage: React.Dispatch<React.SetStateAction<PAGES>>;
}

const MyPalettes = function (props: MyPalettesProps) {
  const {} = props;

  return (
    <div>
      My Palettes
      <div></div>
    </div>
  );
};

export default MyPalettes;
