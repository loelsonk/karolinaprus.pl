const size = {

  mobile: 320,
  desktop: 1024,
  // or more specific
  // mobileS: 320,
  // mobileM: 375,
  // mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 1980,



};

export const device = Object.keys(size).reduce((acc, cur) => {
  acc[cur] = `screen and (min-width: ${size[cur]}px)`;
  return acc;
}, {});
