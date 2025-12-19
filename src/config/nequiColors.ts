export const NEQUI_COLORS = {
  color_200020: '#200020',
  nequi_pink: '#DA0081',
  nequi_magenta: '#FF0080',
  nequi_dark_text: '#2E2B33',
  nequi_gray_text: '#8C8793',
  nequi_green_qr: '#B6F7CF',
  nequi_qr_green: '#00C399',
  white: '#FFFFFF',
  black: '#000000',
  login_field_bg: '#4D334E',
  login_field_bg_alpha: 'rgba(77, 51, 78, 1)',
  button_login_bg: '#DA0081',
  button_login_bg_alpha: 'rgba(218, 0, 129, 1)',
  dynamic_key_bg: 'rgba(232, 212, 240, 0.25)',
  dynamic_key_bg_solid: '#37195B',
  prefix_color: '#FFB6D1',
  hint_color: '#CCCCCC',
  separator_color: '#200020',
  border_white: '#ECE7F5',
  border_white_alpha: 'rgba(236, 231, 245, 1)',
  overlay_bg: 'rgba(0, 0, 0, 0.5)',
  version_color: 'rgba(255, 255, 255, 0.5)',
  button_close_bg: '#FFFFFF',
  close_icon_color: '#000000',
  bancolombia_yellow: '#FFDD00',
};

export const NEQUI_DRAWABLES = {
  loginFieldBackground: {
    backgroundColor: NEQUI_COLORS.login_field_bg,
    borderRadius: 4,
  },
  
  buttonLoginBg: {
    backgroundColor: NEQUI_COLORS.button_login_bg,
    borderRadius: 4,
  },
  
  dynamicKeyBackground: {
    backgroundColor: NEQUI_COLORS.dynamic_key_bg_solid,
    borderRadius: 4,
  },
  
  btnBorderWhite: {
    borderRadius: 4,
    borderWidth: 0.6,
    borderColor: NEQUI_COLORS.border_white,
    backgroundColor: 'transparent',
  },
  
  buttonCloseBg: {
    backgroundColor: NEQUI_COLORS.button_close_bg,
    borderRadius: 24,
  },
};

export const NEQUI_ELEVATIONS = {
  elevation2: {
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  elevation4: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  elevation10: {
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
};

export const NEQUI_DIMENSIONS = {
  logoWidth: 225,
  logoHeight: 132,
  logoVerticalBias: 0.37,
  phoneContainerHeight: 54,
  phoneContainerMargin: 16,
  phoneContainerMarginBottom: 20,
  buttonLoginHeight: 48,
  buttonLoginMarginBottom: 22,
  buttonSendSize: 48,
  buttonSendMargin: 6,
  dynamicKeyHeight: 40,
  dynamicKeyMinWidth: 120,
  dynamicKeyMargin: 16,
  dynamicKeyPadding: 4,
  helpButtonHeight: 40,
  helpButtonMargin: 16,
  bottomContainerMargin: 16,
  bottomContainerMarginBottom: 16,
  optionButtonSize: 40,
  optionLabelWidth: 120,
  ringProgressSize: 20,
  ringProgressBorderWidth: 2,
  ringProgressInnerSize: 12,
  copyIconSize: 24,
  cellIconSize: 46,
  cellIconMarginStart: -13,
  bancolombiaCircleSize: 18,
};

export default NEQUI_COLORS;
