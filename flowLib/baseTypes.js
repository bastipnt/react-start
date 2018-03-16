import React from 'react';

declare type ROUTE = {
  exact: boolean,
  key: string,
  path: string,
  component?: React.Component<*>,
  header?: React.Component<*>,
};
