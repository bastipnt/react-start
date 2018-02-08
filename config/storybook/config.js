import { configure } from '@storybook/react';

const loadStories = () => require('../../stories/index'); // eslint-disable-line global-require

configure(loadStories, module);
