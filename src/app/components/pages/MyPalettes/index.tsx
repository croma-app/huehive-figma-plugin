import React, { useState } from 'react';
import { PAGES } from '../../../utils/contants';
import { Palette, UserInfo } from '../../../types';
import Header from '../../common/Header';
import './index.css';
import { getTextColor } from '../../../utils/helpers';
import ReloadSvg from '../../../assets/reload.svg';

export interface MyPalettesProps {
  setActivePage: React.Dispatch<React.SetStateAction<PAGES>>;
  palettes: Palette[];
  userInfo: UserInfo;
  setSelectedPaletteId: React.Dispatch<React.SetStateAction<number>>;
}

const MyPalettes = function (props: MyPalettesProps) {
  const { palettes, userInfo, setSelectedPaletteId, setActivePage } = props;
  return (
    <div className="my-palettes">
      <Header userInfo={userInfo}></Header>
      <h3> My Palettes </h3>
      <button>
        {' '}
        Reload
        <img src={ReloadSvg} height={'2rem'} width={'2rem'} />
      </button>
      <div className="palettes-container">
        {palettes.map((palette) => {
          return (
            <div
              key={palette.id}
              className="palette"
              onClick={() => {
                setSelectedPaletteId(palette.id);
                setActivePage(PAGES.PALETTE_DETAILS);
              }}
            >
              <div className="palette__colors ">
                {palette.colors.map((color) => {
                  return (
                    <div
                      style={{ backgroundColor: color.hex, color: getTextColor(color.hex) }}
                      className="palette__color"
                    >
                      <h5 className="color-hex-text">{color.hex}</h5>
                      <p className="color-name-text"> {color.name}</p>
                    </div>
                  );
                })}
              </div>
              <div className="palette__details ">
                <div> {palette.name}</div>
              </div>
            </div>
          );
        })}
        <a href="https://huehive.co/" target="_blank" className="generate-button">
          {' '}
          Generate new palette{' '}
        </a>
      </div>
    </div>
  );
};

export default MyPalettes;
