// @flow
import CF from 'colors.js';

const validateHEX = (hex: string): string => {
  let hexWithoutHash = hex.match(/#(([a-f0-9]{3}){1,2})\b/i);
  if (!hexWithoutHash) hexWithoutHash = '000';
  else [, hexWithoutHash] = hexWithoutHash;
  const fullHex = hexWithoutHash.length < 6 ?
    hexWithoutHash[0] + hexWithoutHash[0] + hexWithoutHash[1] + hexWithoutHash[1] +
    hexWithoutHash[2] + hexWithoutHash[2] : hexWithoutHash;
  return `#${fullHex}`;
};

export const opacify = (hex: string = '#fff', opacity?: number = 1): string => {
  const validHex = validateHEX(hex);
  return `rgba(${CF.hex2rgb(validHex).a.toString()}, ${String(opacity)})`;
};
