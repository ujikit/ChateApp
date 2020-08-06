const mainColor = {
  dark: '#1C2022',
  dark1: '#2F3134',
  light1: '#ffffff',
  dark2: '#5B85D7',
  grey1: '#8e8e8e',
  grey2: '#C2C2C2',
  grey3: '#eeeeee',
  grey4: '#c4c4c4',
  grey5: '#EDEEF0',
  red1: '#D75BA5',
  purpel1: '#9F1EBF',
  blue1: '#4913DF',
  blue2: '#8FB5FF',
  green1: '#0bcad4',
  black1: '#000000',
  black2: 'rgba(0,0,0,0.5)',
};

export const colors = {
  dark: mainColor.dark,
  dark2: mainColor.dark1,
  text: {
    primary: mainColor.light1,
    secondary: mainColor.grey1,
    active: mainColor.dark2,
    inactive: mainColor.grey2,
  },
  button: {
    primary: mainColor.red1,
  },
  border: {
    primary: mainColor.grey1,
    active: mainColor.red1,
    secondary: mainColor.grey3,
  },
  background: {
    primary: mainColor.grey3,
    secondary: mainColor.dark2,
  },
  linier: {
    color1: mainColor.blue1,
    color2: mainColor.purpel1,
    color3: mainColor.red1,
  },
  chat: {
    isMe: mainColor.blue2,
    other: mainColor.dark2,
  },
  inputchat: {
    primary: mainColor.grey5,
    btn: mainColor.dark2,
  },
  message: {
    error: mainColor.red1,
    success: mainColor.green1,
  },
  loadingBackground: mainColor.black2,
  disable: {
    background: mainColor.grey3,
    text: mainColor.grey1,
  },
};
