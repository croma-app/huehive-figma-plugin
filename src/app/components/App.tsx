import React, { useEffect, useState } from 'react';
import '../styles/ui.css';
import { API_URL, PAGES } from '../utils/contants';
import MyPalettes from './pages/MyPalettes';
import Login from './pages/Login';
import PaletteDetails from './pages/PaletteDetails';
import { Palette, UserInfo } from '../types';

const mockPalettes = [
  {
    id: 357,
    name: 'Test',
    desc: null,
    device_id: '3aef8356-9b0e-453f-94d3-7a8248850bd9',
    created_at: '2023-04-18T12:56:16.423Z',
    updated_at: '2023-04-18T12:56:16.423Z',
    url: 'https://huehive.co/color_palettes/357.json',
    colors: [
      {
        id: 1597,
        hex: '#bd0048',
        name: 'Rural Red',
        order: 0,
        created_at: '2023-04-18T12:56:16.425Z',
        updated_at: '2023-04-22T04:31:03.250Z',
        text_color: 'white',
      },
      {
        id: 1598,
        hex: '#00bd16',
        name: 'Lusty Lizard',
        order: 1,
        created_at: '2023-04-18T12:56:16.427Z',
        updated_at: '2023-04-22T04:31:03.224Z',
        text_color: 'white',
      },
      {
        id: 1599,
        hex: '#b300bd',
        name: 'Magentleman',
        order: 2,
        created_at: '2023-04-18T12:56:16.427Z',
        updated_at: '2023-04-22T04:31:03.199Z',
        text_color: 'white',
      },
    ],
  },
  {
    id: 358,
    name: 'Hh',
    desc: null,
    device_id: '3aef8356-9b0e-453f-94d3-7a8248850bd9',
    created_at: '2023-04-18T12:57:00.653Z',
    updated_at: '2023-04-18T12:57:00.653Z',
    url: 'https://huehive.co/color_palettes/358.json',
    colors: [
      {
        id: 1600,
        hex: '#908d87',
        name: 'Pedigrey',
        order: 0,
        created_at: '2023-04-18T12:57:00.656Z',
        updated_at: '2023-04-22T04:31:03.185Z',
        text_color: 'black',
      },
      {
        id: 1601,
        hex: '#1b1f24',
        name: 'Satin Deep Black',
        order: 1,
        created_at: '2023-04-18T12:57:00.657Z',
        updated_at: '2023-04-22T04:31:03.142Z',
        text_color: 'white',
      },
      {
        id: 1602,
        hex: '#f4e4d4',
        name: 'Fondant',
        order: 2,
        created_at: '2023-04-18T12:57:00.657Z',
        updated_at: '2023-04-22T04:31:03.218Z',
        text_color: 'black',
      },
      {
        id: 1603,
        hex: '#483c36',
        name: 'Film Noir',
        order: 3,
        created_at: '2023-04-18T12:57:00.658Z',
        updated_at: '2023-04-22T04:31:03.225Z',
        text_color: 'white',
      },
      {
        id: 1604,
        hex: '#b7b8ce',
        name: 'Cosmic',
        order: 4,
        created_at: '2023-04-18T12:57:00.659Z',
        updated_at: '2023-04-22T04:31:03.193Z',
        text_color: 'black',
      },
      {
        id: 1605,
        hex: '#544d3b',
        name: 'Olive Leaf',
        order: 5,
        created_at: '2023-04-18T12:57:00.660Z',
        updated_at: '2023-04-22T04:31:03.223Z',
        text_color: 'white',
      },
    ],
  },
  {
    id: 443,
    name: 'Hhh',
    desc: null,
    device_id: '3aef8356-9b0e-453f-94d3-7a8248850bd9',
    created_at: '2023-04-25T03:35:53.859Z',
    updated_at: '2023-04-25T03:35:53.859Z',
    url: 'https://huehive.co/color_palettes/443.json',
    colors: [],
  },
  {
    id: 418,
    name: 'Cricket website ',
    desc: '1. Willow Green (#9BCC50): This fresh and vibrant green represents the iconic cricket bat, making it the perfect color for a batting-themed palette. It has a calming effect and conveys a sense of growth and renewal.2. Leather Brown (#8B4513): This rich and warm brown is inspired by the leather ball used in cricket matches. It adds a touch of elegance and sophistication to the palette, and creates a strong contrast with the green hues.3. Off-White (#F5F5F5): This light and neutral shade represents the cricket pitch, providing a clean and bright background for the other colors to stand out. It also symbolizes fairness and sportsmanship, which are important values in cricket.4. Golden Yellow (#FFD700): This bright and sunny yellow captures the excitement and energy of a successful batting performance. It adds a pop of color to the palette and creates a sense of optimism and joy.5. Deep Blue (#00008B): This dark and intense blue is reminiscent of the cricket helmet worn by batsmen for protection. It adds depth and drama to the palette, and represents focus and determination, essential qualities for any successful batsman.',
    device_id: 'cfafb4ab-e87b-4e81-bfab-5acf43c33d45',
    created_at: '2023-04-22T10:20:49.889Z',
    updated_at: '2023-05-12T16:44:27.435Z',
    url: 'https://huehive.co/color_palettes/418.json',
    colors: [
      {
        id: 1926,
        hex: '#8B4513',
        name: 'Espresso Martini',
        order: 0,
        created_at: '2023-04-22T10:20:49.892Z',
        updated_at: '2023-07-07T13:58:01.067Z',
        text_color: 'white',
      },
      {
        id: 1928,
        hex: '#FFD700',
        name: 'Gold',
        order: 1,
        created_at: '2023-04-22T10:20:49.894Z',
        updated_at: '2023-07-07T13:58:07.649Z',
        text_color: 'black',
      },
      {
        id: 1925,
        hex: '#9BCC50',
        name: 'Wicked Green',
        order: 2,
        created_at: '2023-04-22T10:20:49.891Z',
        updated_at: '2023-07-07T13:58:07.649Z',
        text_color: 'black',
      },
      {
        id: 1927,
        hex: '#F5F5F5',
        name: 'White Smoke',
        order: 3,
        created_at: '2023-04-22T10:20:49.893Z',
        updated_at: '2023-07-07T13:58:07.650Z',
        text_color: 'black',
      },
      {
        id: 1929,
        hex: '#00008B',
        name: 'Midnight in Tokyo',
        order: 4,
        created_at: '2023-04-22T10:20:49.895Z',
        updated_at: '2023-04-22T10:20:49.895Z',
        text_color: 'white',
      },
    ],
  },
  {
    id: 658,
    name: 'vintage americana',
    desc: "1. Barn Red - #7B1E1E - A deep red reminiscent of old barns and rustic farmhouses.\r\n2. Mustard Yellow - #DAA520 - A warm, golden yellow inspired by vintage Americana advertisements.\r\n3. Navy Blue - #000080 - A classic, dark blue that reflects the patriotic spirit of Americana.\r\n4. Cream - #F5DEB3 - A light, neutral color that adds a touch of vintage charm to any palette.\r\n5. Rust Orange - #8B4500 - A deep, earthy orange that evokes the colors of fall foliage and harvest time. \r\n\r\nOverall, this color palette captures the warmth, nostalgia, and rustic charm of vintage Americana. It's perfect for creating designs that are both timeless and uniquely American.",
    device_id: null,
    created_at: '2023-07-04T01:02:08.428Z',
    updated_at: '2023-07-04T01:02:08.428Z',
    url: 'https://huehive.co/color_palettes/658.json',
    colors: [
      {
        id: 3927,
        hex: '#7B1E1E',
        name: 'Barn Red',
        order: 0,
        created_at: '2023-07-04T01:02:08.432Z',
        updated_at: '2023-07-04T01:02:08.432Z',
        text_color: 'white',
      },
      {
        id: 3928,
        hex: '#DAA520',
        name: 'Mustard Yellow',
        order: 1,
        created_at: '2023-07-04T01:02:08.434Z',
        updated_at: '2023-07-04T01:02:08.434Z',
        text_color: 'black',
      },
      {
        id: 3929,
        hex: '#000080',
        name: 'Navy Blue',
        order: 2,
        created_at: '2023-07-04T01:02:08.436Z',
        updated_at: '2023-07-04T01:02:08.436Z',
        text_color: 'white',
      },
      {
        id: 3930,
        hex: '#F5DEB3',
        name: 'Cream',
        order: 3,
        created_at: '2023-07-04T01:02:08.437Z',
        updated_at: '2023-07-04T01:02:08.437Z',
        text_color: 'black',
      },
      {
        id: 3931,
        hex: '#8B4500',
        name: 'Rust Orange',
        order: 4,
        created_at: '2023-07-04T01:02:08.438Z',
        updated_at: '2023-07-04T01:02:08.438Z',
        text_color: 'white',
      },
    ],
  },
  {
    id: 784,
    name: 'color palette for women clothes website',
    desc: null,
    device_id: null,
    created_at: '2023-08-02T03:01:46.038Z',
    updated_at: '2023-08-02T03:01:46.038Z',
    url: 'https://huehive.co/color_palettes/784.json',
    colors: [
      {
        id: 7331,
        hex: '#FFC7C7',
        name: 'Piglet',
        order: 0,
        created_at: '2023-08-02T03:01:46.040Z',
        updated_at: '2023-08-02T03:01:46.040Z',
        text_color: 'black',
      },
      {
        id: 7332,
        hex: '#D4A2A2',
        name: 'La Vie en Rose',
        order: 1,
        created_at: '2023-08-02T03:01:46.041Z',
        updated_at: '2023-08-02T03:01:46.041Z',
        text_color: 'black',
      },
      {
        id: 7333,
        hex: '#B68484',
        name: 'Old Rose',
        order: 2,
        created_at: '2023-08-02T03:01:46.042Z',
        updated_at: '2023-08-02T03:01:46.042Z',
        text_color: 'black',
      },
      {
        id: 7334,
        hex: '#A9BCA2',
        name: 'Meadow Morn',
        order: 3,
        created_at: '2023-08-02T03:01:46.043Z',
        updated_at: '2023-08-02T03:01:46.043Z',
        text_color: 'black',
      },
      {
        id: 7335,
        hex: '#6B8FA9',
        name: 'Treasure Map Waters',
        order: 4,
        created_at: '2023-08-02T03:01:46.044Z',
        updated_at: '2023-08-02T03:01:46.044Z',
        text_color: 'black',
      },
      {
        id: 7336,
        hex: '#A48FA2',
        name: 'Nirvana',
        order: 5,
        created_at: '2023-08-02T03:01:46.044Z',
        updated_at: '2023-08-02T03:01:46.044Z',
        text_color: 'black',
      },
    ],
  },
];

function App() {
  const [activePage, setActivePage] = useState(PAGES.LOGIN_PAGE);
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [palettes, setPalettes] = useState<Palette[]>([]);
  const [selectedPaletteId, setSelectedPaletteId] = useState<undefined | number>();

  // trigger load info from local storage
  useEffect(() => {
    parent.postMessage({ pluginMessage: { type: 'load-user-info' } }, '*');
  }, []);

  useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      console.log({ type, message });
      if (type === 'get-user-info') {
        setUserInfo(JSON.parse(message));
      }
      if (type === 'logout') {
        setUserInfo(undefined);
      }
    };
  }, []);

  useEffect(() => {
    (async () => {
      if (userInfo) {
        const res = await fetch(API_URL + 'color_palettes.json', { mode: 'no-cors' });
        setPalettes(mockPalettes);
      }
    })();
  }, [userInfo]);

  console.log('userInfo', userInfo, { userInfo });

  switch (activePage) {
    case PAGES.LOGIN_PAGE:
      return userInfo ? (
        <MyPalettes
          setSelectedPaletteId={setSelectedPaletteId}
          userInfo={userInfo}
          palettes={palettes}
          setActivePage={setActivePage}
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
