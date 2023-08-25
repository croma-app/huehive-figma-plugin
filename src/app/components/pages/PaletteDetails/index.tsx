import React from 'react';
import { PAGES } from '../../../utils/contants';
import Header from '../../common/Header';
import { Palette, UserInfo } from '../../../types';
import { getTextColor } from '../../../utils/helpers';

export interface PaletteDetailsProps {
  setActivePage: React.Dispatch<React.SetStateAction<PAGES>>;
  userInfo: UserInfo;
  palette: Palette;
}

const PaletteDetails = function (props: PaletteDetailsProps) {
  const { userInfo, palette, setActivePage } = props;
  return (
    <div>
      <Header userInfo={userInfo}></Header>
      <h3> Palette Details </h3>
      <div
        onClick={() => {
          setActivePage(PAGES.MY_PALETTES);
        }}
      >
        Back
      </div>
      <div>
        {palette.colors.map((color) => {
          return (
            <div style={{ backgroundColor: color.hex, color: getTextColor(color.hex) }} className="palette__color">
              <h5 className="color-hex-text">{color.hex}</h5>
              <p className="color-name-text"> {color.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaletteDetails;
