import React, { useState } from 'react';
import { PAGES } from '../../../utils/contants';
import { Palette, UserInfo } from '../../../types';
import Header from '../../common/Header';
import './index.css';

export interface MyPalettesProps {
  setActivePage: React.Dispatch<React.SetStateAction<PAGES>>;
  palettes: Palette[];
  userInfo: UserInfo;
}

const MyPalettes = function (props: MyPalettesProps) {
  const { palettes, userInfo } = props;
  return (
    <div>
      <Header userInfo={userInfo}></Header>
      My Palettes
      <div className="palettes-container">
        {palettes.map((palette) => {
          return (
            <div key={palette.id} className="palette">
              <div className="palette__colors d-md-flex">
                {palette.colors.map((color) => {
                  return (
                    <div style={{ backgroundColor: color.hex }} className="palette__color">
                      <h5 className="color-hex-text text-white">{color.hex}</h5>
                      <p className="color-name-text text-white"> {color.name}</p>
                    </div>
                  );
                })}
              </div>
              <div className="palette__details ">
                <div>
                  {' '}
                  <a href="/color_palettes/357">{palette.name}</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button>Generate </button>
      <button
        onClick={() => {
          parent.postMessage({ pluginMessage: { type: 'logout' } }, '*');
        }}
      >
        Logout{' '}
      </button>
    </div>
  );
};

export default MyPalettes;
