import React from 'react';
import { useBlueprintFieldView } from 'src/hooks';
import { RootFields } from './components';

const BlueprintFields = () => {
  const fieldView = useBlueprintFieldView();
  // TODO: Handle non-root view...or maybe combine it all into one component? Ensure performance does not drop below where its currently at.
  return fieldView === 'root' ? <RootFields /> : null;
};

export default BlueprintFields;
