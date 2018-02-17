// @flow
import React from 'react';
import { MD } from 'styles';

type Props = {
  html: string,
}

const Markdown = ({ html }: Props) => (
  <MD dangerouslySetInnerHTML={{ __html: html }} />
);

export default Markdown;
