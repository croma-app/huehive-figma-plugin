import React from 'react';
import { PAGES } from '../../../utils/contants';

export interface PaletteDetailsProps {
  setActivePage: React.Dispatch<React.SetStateAction<PAGES>>;
}

const PaletteDetails = function (props: PaletteDetailsProps) {
  const {} = props;
  return (
    <div>
      {' '}
      Palette Details
      <div></div>{' '}
    </div>
  );
};

export default PaletteDetails;
