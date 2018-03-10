import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { setDefaults, withInfo } from '@storybook/addon-info';

setOptions({
  name: 'react-start',
  url: 'https://github.com/litc0de/react-start',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sidebarAnimations: true,
});

setDefaults({
  inline: true,
});

addDecorator((story, context) => withInfo('common info')(story)(context));

const req = require.context('../../stories', true, /\.stories\.jsx$/);

const loadStories = () => req.keys().forEach((filename) => req(filename));

configure(loadStories, module);
