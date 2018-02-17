import React from 'react';
import { Page } from 'styles';
import Markdown from './Markdown';
import readme from '../../README.md';

const Home = () => (
  <Page>
    <Markdown html={readme} />
  </Page>
);

export default Home;
