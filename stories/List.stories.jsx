import React from 'react';
import { storiesOf } from '@storybook/react';
import { UL, LI } from 'styles';

storiesOf('List', module)
  .add('default', () => (
    <UL>
      <LI>Element 1</LI>
      <LI>Element 2</LI>
      <LI>Element 3</LI>
    </UL>
  ));
