import React, { useEffect, useState } from 'react';
import '../styles/ui.css';
import { PAGES } from '../utils/contants';
import MyPalettes from './pages/MyPalettes';
import Login from './pages/Login';
import PaletteDetails from './pages/PaletteDetails';

function App() {
  const [activePage, setActivePage] = useState(PAGES.LOGIN_PAGE);
  useEffect(() => {
    console.log('check it ');
    parent.postMessage({ pluginMessage: { type: 'get-login' } }, '*');
  }, []);
  useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      console.log({ type, message });
      if (type === 'login-token') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);
  switch (activePage) {
    case PAGES.LOGIN_PAGE:
      return <Login setActivePage={setActivePage}></Login>;
    case PAGES.MY_PALETTES:
      return <MyPalettes setActivePage={setActivePage}></MyPalettes>;
    case PAGES.PALETTE_DETAILS:
      return <PaletteDetails setActivePage={setActivePage}></PaletteDetails>;
    default:
      return <div>Something went worng. No page matches.</div>;
  }
}

export default App;
