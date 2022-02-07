import React from 'react';
import DependencyContext from '~common/context/di';

export default function useDependency() {
  const dep = React.useContext(DependencyContext);
  if (dep === undefined) {
    throw new Error('dependency not defined');
  }
  return dep;
}
