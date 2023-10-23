import { hexToRgb } from '../app/utils/helpers';

figma.showUI(__html__, { width: 300, height: 500 });

const LOGIN_TOKEN_KEY = 'LOGIN_TOKEN_KEY';
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'store-user-info') {
    figma?.clientStorage.setAsync(LOGIN_TOKEN_KEY, msg.userInfo);
    figma.ui.postMessage({
      type: 'get-user-info',
      message: msg.userInfo,
    });
  }
  if (msg.type === 'load-user-info') {
    const userInfo = await figma?.clientStorage.getAsync(LOGIN_TOKEN_KEY);
    figma.ui.postMessage({
      type: 'get-user-info',
      message: userInfo,
    });
  }
  if (msg.type === 'logout') {
    await figma.clientStorage.deleteAsync(LOGIN_TOKEN_KEY);
    figma.ui.postMessage({
      type: 'logout',
      message: '',
    });
  }
  if (msg.type === 'search') {
    figma.ui.postMessage({
      type: 'search',
      message: '',
    });
  }
  if (msg.type === 'create-component') {
    let initX = 50;
    let squreSize = 100;
    msg.colors.forEach((color) => {
      const rect = figma.createRectangle();
      // // Move
      rect.x = initX;
      rect.y = 50;
      initX += squreSize;
      // // Set size to 200 x 100
      rect.resize(100, 100);
      // // Set solid red fill
      rect.fills = [{ type: 'SOLID', color: hexToRgb(color.hex) }];
    });
  }
  // figma.closePlugin();
};
