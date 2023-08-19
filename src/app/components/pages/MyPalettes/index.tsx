import React, { useState } from 'react';
import { PAGES } from '../../../utils/contants';
import { Palette } from '../../../types';

export interface MyPalettesProps {
  setActivePage: React.Dispatch<React.SetStateAction<PAGES>>;
  palettes: Palette[];
}

const MyPalettes = function (props: MyPalettesProps) {
  const { palettes } = props;
  return (
    <div>
      My Palettes
      {palettes.map((palette) => {
        return (
          <div key={palette.id}>
            <div id="color_palette_357" className="mt-1">
              <div className="palette mt-5">
                <div className="palette__colors d-md-flex">
                  {palette.colors.map((color) => {
                    return (
                      <div style={{ backgroundColor: color.hex }} className="palette__color">
                        <span className="color-hex-text text-white">{color.hex}</span>
                        <span className="color-name-text text-white"> {color.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
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
      <button>Generate </button>
    </div>
  );
};

export default MyPalettes;
