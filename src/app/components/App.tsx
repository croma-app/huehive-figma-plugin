import React, { useState } from 'react';
import '../styles/ui.css';
import { PAGES } from '../utils/contants';
import MyPalettes from './pages/MyPalettes';
import Login from './pages/Login';
import PaletteDetails from './pages/PaletteDetails';

function App() {
  const [activePage, setActivePage] = useState(PAGES.LOGIN_PAGE);
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
