import { CHILD_MESSAGE_TYPE, PARENT_MESSAGE_TYPE } from '../app/utils/contants';
import { hexToRgb } from '../app/utils/helpers';

figma.showUI(__html__, { width: 300, height: 500 });

const LOGIN_TOKEN_KEY = 'LOGIN_TOKEN_KEY';
figma.ui.onmessage = async (msg) => {
  if (msg.type === PARENT_MESSAGE_TYPE.STORE_USER_INFO) {
    figma?.clientStorage.setAsync(LOGIN_TOKEN_KEY, msg.userInfo);
    figma.ui.postMessage({
      type: CHILD_MESSAGE_TYPE.GET_USER_INFO,
      message: msg.userInfo,
    });
  }
  if (msg.type === PARENT_MESSAGE_TYPE.LOAD_USER_INFO) {
    const userInfo = await figma?.clientStorage.getAsync(LOGIN_TOKEN_KEY);
    figma.ui.postMessage({
      type: CHILD_MESSAGE_TYPE.GET_USER_INFO,
      message: userInfo,
    });
  }
  if (msg.type === PARENT_MESSAGE_TYPE.LOAGOUT) {
    await figma.clientStorage.deleteAsync(LOGIN_TOKEN_KEY);
    figma.ui.postMessage({
      type: CHILD_MESSAGE_TYPE.LOGOUT,
      message: '',
    });
  }
  if (msg.type === PARENT_MESSAGE_TYPE.SEARCH) {
    figma.ui.postMessage({
      type: CHILD_MESSAGE_TYPE.SEARCH,
      message: '',
    });
  }
  if (msg.type === PARENT_MESSAGE_TYPE) {
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
