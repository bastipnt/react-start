// @flow
import { opacify } from './helpers';

export const color = {
  text: opacify('#70708D', 1),
  textLight: opacify('#70708D', 0.4),
  textSpecial: '#6064FA',
  textHeader: opacify('#fff', 0.8),
  background: opacify('#fff', 1),
  backgroundDark: opacify('#70708D', 0.1),
  backgroundSpecial: '#FDFDFF',
  backgroundButton: opacify('#fff', 0.5),
  divider: opacify('#ECF2F6', 1),
  dividerLight: opacify('#ECF2F6', 1),
  placeholder: opacify('#6064FA', 0.5),
  checkboxBorder: opacify('#ECF2F6', 1),
  checkboxBackground: opacify('#6064FA', 1),
  checkboxText: opacify('#fff', 1),
  button: opacify('#70708D', 1),
  header: opacify('#fff', 0.1),
};
