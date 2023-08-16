figma.showUI(__html__);

const LOGIN_TOKEN_KEY = 'LOGIN_TOKEN_KEY'
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'create-login') {
    figma?.clientStorage.setAsync(LOGIN_TOKEN_KEY, msg.token);
    figma.ui.postMessage({
      type: 'login-token',
      message: msg.token,
    });
  }
  if (msg.type === 'get-login') {
    const token = await figma?.clientStorage.getAsync(LOGIN_TOKEN_KEY);
    figma.ui.postMessage({
      type: 'get-login',
      message: token,
    });
  }
  // figma.closePlugin();
};


