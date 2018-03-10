import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from 'styles';

storiesOf('Input', module)
  .add('default', () => (
    <Input />
  ));
