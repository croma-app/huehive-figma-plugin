import React from 'react';
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
  loadPalettes: () => Promise<void>;
  loadingPalettes: boolean;
}

const MyPalettes = function (props: MyPalettesProps) {
  const { palettes, userInfo, setSelectedPaletteId, setActivePage, loadPalettes, loadingPalettes } = props;

  return (
    <div className="my-palettes">
      <Header userInfo={userInfo}></Header>
      <div className="title-bar">
        <h2> My Palettes </h2>
        <button className="reload" onClick={loadPalettes}>
          <img src={ReloadSvg} height={15} width={15} />
          Reload
        </button>
      </div>
      <div className="palettes-container">
        {loadingPalettes
          ? 'Loading ...'
          : palettes.map((palette) => {
              return (
                <div
                  key={palette.id}
                  className="palette"
                  onClick={() => {
                    setSelectedPaletteId(palette.id);
                    setActivePage(PAGES.PALETTE_DETAILS);
                  }}
                >
                  <div className="palette__colors">
                    {palette.colors.map((color) => {
                      return (
                        <div
                          key={color.hex} // Added key for each color
                          style={{ backgroundColor: color.hex, color: getTextColor(color.hex) }}
                          className="palette__color"
                        >
                          {/* <h5 className="color-hex-text">{color.hex}</h5>
                          <p className="color-name-text"> {color.name}</p> */}
                        </div>
                      );
                    })}
                  </div>
                  <div className="palette__details">
                    <p className="palette__name"> {palette.name}</p>
                    <button
                      className="add-to-figma"
                      onClick={(e) => {
                        e.stopPropagation();
                        parent.postMessage(
                          { pluginMessage: { type: 'create-component', colors: palette.colors } },
                          '*'
                        );
                      }}
                    >
                      Add to Figma
                    </button>
                  </div>
                </div>
              );
            })}
        <a href="https://huehive.co/" target="_blank" className="floating-action-button">+</a>
      </div>
      <div className="download-section">
        <a href="https://play.google.com/store/apps/details?id=app.croma" target="_blank" className="download-button">
    
          Download Android App to generate palettes
        </a>
        
        <a href="https://huehive.co" target="_blank" className="download-button">
        Generate palettes on huehive.co
        </a>
      </div>
    </div>
  );
};

export default MyPalettes;
