import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'styles';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="Button with emojis">😀 😎 👍 💯</span></Button>
  ));
