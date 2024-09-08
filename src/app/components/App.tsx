import React, { useCallback, useEffect, useState } from 'react';
import '../styles/ui.css';
import { API_URL, PAGES } from '../utils/contants';
import MyPalettes from './pages/MyPalettes';
import Login from './pages/Login';
import PaletteDetails from './pages/PaletteDetails';
import { Palette, UserInfo } from '../types';

function App() {
  const [activePage, setActivePage] = useState(PAGES.LOGIN_PAGE);
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [palettes, setPalettes] = useState<Palette[]>([]);
  const [selectedPaletteId, setSelectedPaletteId] = useState<undefined | number>();
  const [loadingPalettes, setLoadingPalettes] = useState(false);

  // trigger load info from local storage
  useEffect(() => {
    parent.postMessage({ pluginMessage: { type: 'load-user-info' } }, '*');
  }, []);

  useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'get-user-info') {
        setUserInfo(JSON.parse(message));
      }
      if (type === 'logout') {
        setUserInfo(undefined);
        setActivePage(PAGES.LOGIN_PAGE);
      }
    };
  }, []);

  const loadPalettes = useCallback(async () => {
    setLoadingPalettes(true);
    const res = await fetch(API_URL + 'color_palettes.json', {
      // credentials: 'include', // Ensures cookies are sent with the request
      headers: {
        'Content-Type': 'application/json',
        "X-User-Token": userInfo.userToken,
        "X-User-Email": userInfo.user.email
      },
    });
    const palettes = await res.json();
    setPalettes(palettes as unknown as Palette[]);
    
    setLoadingPalettes(false);
  }, [userInfo]);

  useEffect(() => {
    (async () => {
      if (userInfo) {
        loadPalettes();
      }
    })();
  }, [userInfo]);

  switch (activePage) {
    case PAGES.LOGIN_PAGE:
      return userInfo ? (
        <MyPalettes
          setSelectedPaletteId={setSelectedPaletteId}
          userInfo={userInfo}
          palettes={palettes}
          setActivePage={setActivePage}
          loadPalettes={loadPalettes}
          loadingPalettes={loadingPalettes}
        />
      ) : (
        <Login setActivePage={setActivePage}></Login>
      );
    case PAGES.MY_PALETTES:
      return (
        <MyPalettes
          setSelectedPaletteId={setSelectedPaletteId}
          userInfo={userInfo}
          palettes={palettes}
          setActivePage={setActivePage}
          loadPalettes={loadPalettes}
          loadingPalettes={loadingPalettes}
        />
      );
    case PAGES.PALETTE_DETAILS:
      return (
        <PaletteDetails
          palette={palettes.find((palette) => palette.id === selectedPaletteId) as Palette}
          userInfo={userInfo}
          setActivePage={setActivePage}
        />
      );
    default:
      return <div>Something went worng. No page matches.</div>;
  }
}

export default App;
