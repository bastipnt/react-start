// RGB2HSV and HSV2RGB are based on Color Match Remix [http://color.twysted.net/]
// which is based on or copied from ColorMatch 5K [http://colormatch.dk/]
/* eslint-disable no-nested-ternary */
const min3 = (a: number, b: number, c: number): number =>
  (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);

const max3 = (a: number, b: number, c: number): number =>
  (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
/* eslint-enable no-nested-ternary */

const component2HEX = (c) => {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

const validateHEX = (hex: HEX): HEX => {
  const hexWithoutHash = hex.match(/#([a-f0-9]{3}){1,2}\b/i)[1];
  return hexWithoutHash.length < 6 ?
    hexWithoutHash[0] + hexWithoutHash[0] + hexWithoutHash[1] + hexWithoutHash[1] +
    hexWithoutHash[2] + hexWithoutHash[2] : hexWithoutHash;
};

export const RGB2HSV = (rgb: RGB): HSV => {
  const hsv = {};
  const max = max3(rgb.r, rgb.g, rgb.b);
  const dif = max - min3(rgb.r, rgb.g, rgb.b);
  hsv.saturation = (max === 0.0) ? 0 : (100 * (dif / max));
  if (hsv.saturation === 0) hsv.hue = 0;
  else if (rgb.r === max) hsv.hue = 60.0 * ((rgb.g - rgb.b) / dif);
  else if (rgb.g === max) hsv.hue = 120.0 + (60.0 * ((rgb.b - rgb.r) / dif));
  else if (rgb.b === max) hsv.hue = 240.0 + (60.0 * ((rgb.r - rgb.g) / dif));
  if (hsv.hue < 0.0) hsv.hue += 360.0;
  hsv.value = Math.round(max * (100 / 255));
  hsv.hue = Math.round(hsv.hue);
  hsv.saturation = Math.round(hsv.saturation);
  return hsv;
};

export const HSV2RGB = (hsv: HSV): RGB => {
  const rgb = {};
  if (hsv.saturation === 0) {
    rgb.r = rgb.g = rgb.b = Math.round(hsv.value * 2.55); // eslint-disable-line no-multi-assign
  } else {
    hsv.hue /= 60;
    hsv.saturation /= 100;
    hsv.value /= 100;
    const i = Math.floor(hsv.hue);
    const f = hsv.hue - i;
    const p = hsv.value * (1 - hsv.saturation);
    const q = hsv.value * (1 - (hsv.saturation * f));
    const t = hsv.value * (1 - (hsv.saturation * (1 - f)));
    switch (i) {
      case 0: rgb.r = hsv.value; rgb.g = t; rgb.b = p; break;
      case 1: rgb.r = q; rgb.g = hsv.value; rgb.b = p; break;
      case 2: rgb.r = p; rgb.g = hsv.value; rgb.b = t; break;
      case 3: rgb.r = p; rgb.g = q; rgb.b = hsv.value; break;
      case 4: rgb.r = t; rgb.g = p; rgb.b = hsv.value; break;
      default: rgb.r = hsv.value; rgb.g = p; rgb.b = q;
    }
    rgb.r = Math.round(rgb.r * 255);
    rgb.g = Math.round(rgb.g * 255);
    rgb.b = Math.round(rgb.b * 255);
  }
  return rgb;
};


export const RGB2HEX = (rgb: RGB): HEX =>
  `#${component2HEX(rgb.r) + component2HEX(rgb.g) + component2HEX(rgb.b)}`;

export const HEX2RGB = (hex: HEX): RGB => {
  const validHex = validateHEX(hex);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(validHex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : { r: 0, g: 0, b: 0 };
};

export const RGB2String = ({ r, g, b }: RGB): string => `${r}, ${g}, ${b}`;

export const hueShift = (hsv: HSV, amount: number): number => {
  let hue = hsv.hue + amount;
  while (hue >= 360.0) hue -= 360.0;
  while (hue < 0.0) hue += 360.0;
  hsv.hue = hue;
  return hsv;
};

export const colorLuminance = (hex: HEX, lum: number = 0): HEX => {
  const hexIn = validateHEX(hex.replace(/[^0-9a-f]/gi, ''));
  let hexOut = '#';
  let c;

  for (let i = 0; i < 3; i += 1) {
    c = parseInt(hexIn.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    hexOut += (`00${c}`).substr(c.length);
  }

  return hexOut;
};

export const complementary = (hex: HEX): RGB => {
  const rgb: RGB = HEX2RGB(hex);
  const hsv: HSV = RGB2HSV(rgb);
  const shiftetHsv = hueShift(hsv, 180);
  return HSV2RGB(shiftetHsv);
};
