const gap = 32;

export const breakpoints = {
  //   (default)	Mobile-portrait
  // min-width: 480px	Mobile-landscape (and larger)
  // min-width: 768px	Tablet-portrait (and larger)
  // min-width: 992px	Tablet-landscape (and larger)
  // min-width: 1200px	Laptops (and langer)
  // The container horizontal gap, which acts as the offset for breakpoints
  // mobile: 321,
  tablet: 769 + 2 * gap,
  desktop: 1088 + 2 * gap,
};

export const theme = Object.freeze({
  palette: {
    primary: '#27C2F8',
    primaryLight: '#18BCF5',
    primaryDark: '#219ECC',
    secondary: '#1F0636',
    secondaryLight: '#7F4DFC',
    secondaryLighter: '#9971FD',
    linkHover: '#0d8ecf',
    seaBlue: '#C5E9F6',
    border: '#F5F5F5',
    borderAccent: '#DBDBDB',
    borderAccent2: 'rgba(245, 245, 245, 0.41)',
    disabledBg: 'rgb(243, 242, 241)',
    disabledText: 'rgb(161, 159, 157)',
    inputBorder: '#969696',
    boxBorder: '#F2F2F2',
    pageBackground: '#FAFAFA',
    pageDarkBackground: '#F0EFEF',
    icon: '#BABABA',
    avatarIcon: '#eaeaea',
    iconGray: '#5D5D5D',
    lightBlack: '#333333',
    navy: '#023453',
    modalText: '#707070',
    sliderText: '#b3b3b3',
    error: '#86000b',
    google: '#DB4437',
    lightBlue: '#A4E5FC',
    mediumBlue: '#C5E9F6',
    textGrey: '#969696',
    additionalBlue: '#004996',
    purple: '#40277E',
    orange: '#FFF3CD',
    orangeText: '#856405',
    orangeBorder: '#FFEEBA',
    warning: '#e5da00',
    facebookBlue: '#3B5998',
    facebookHover: '#394D77',
    successBackground: '#279869',
    successBorder: '#156F49',
    errorBackground: '#DB4437',
    errorBorder: '#BB1023',
    warningBackground: '#FFF3CD',
    warningBorder: '#FFEEBA',
    trialBadge: '#008D52',
    linkedInBlue: '#1967a9',
    linkedInHover: '#4491c1',
    youtubeRed: '#FF0000',
    youtubeHover: '#C90000',
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
    get footer() {
      return {
        primary: {
          background: this.lightBlack,
          color: this.common.white,
          borderColor: this.borderAccent2,
        },
        secondary: {
          background: this.pageDarkBackground,
          borderColor: this.modalText,
          color: this.modalText,
        },
      };
    },
    // primary: {
    //   main: '#27C2F8',
    // },
    // error: {},
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    grey: {
      A700: 'rgba(150, 150, 150, 1)',
      A600: 'rgba(0, 0, 0, 0.16)',
      A500: 'rgba(60, 60, 60, 0.16)',
      A400: 'rgba(245, 245, 245, 1)',
      A300: 'rgba(245, 245, 245, 1)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
  },
  breakpoints,
  media: {
    tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
    desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
  },
  container: {
    gap,
    offset: gap * 2,
  },
  fontFamily: {
    sansSerif: `'Montserrat', sans-serif`,
    openSans: `'Open Sans', sans-serif`,
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  // Place to store all zIndexes
  zIndex: {
    preloaderBg: 100,
    preloaderSpinner: 110,
    header: 500,
    drawer: 600,
    modal: 700,
    socialLinks: 1200,
  },
});
