import React, { useState } from 'react';
import { PAGES } from '../../../utils/contants';
import { Palette, UserInfo } from '../../../types';
import Header from '../../common/Header';
import './index.css';
import { getTextColor } from '../../../utils/helpers';

export interface MyPalettesProps {
  setActivePage: React.Dispatch<React.SetStateAction<PAGES>>;
  palettes: Palette[];
  userInfo: UserInfo;
}

const MyPalettes = function (props: MyPalettesProps) {
  const { palettes, userInfo } = props;
  return (
    <div className="my-palettes">
      <Header userInfo={userInfo}></Header>
      <h3> My Palettes </h3>
      <div className="palettes-container">
        {palettes.map((palette) => {
          return (
            <div key={palette.id} className="palette">
              <div className="palette__colors d-md-flex">
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
