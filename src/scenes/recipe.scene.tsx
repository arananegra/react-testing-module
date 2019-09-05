import * as React from 'react';
import { CenteredLayout } from 'layout/centered.layout';
import { RecipeContainer } from 'pods/recipe';

export const RecipeScene: React.FunctionComponent = props => (
  <CenteredLayout>
    <RecipeContainer />
  </CenteredLayout>
);
