import { interfaces } from 'inversify/lib/interfaces/interfaces';
import React from 'react';

interface Value {
  container: interfaces.Container;
}

const DependencyContext = React.createContext<Value | undefined>(undefined);

export default DependencyContext;
