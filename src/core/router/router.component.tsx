import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { history } from './history';
import { switchRoutes } from './routes';
import { RecipeScene } from 'scenes/recipe.scene';
import { RecipesScene } from 'scenes/recipes.scene';

export const RouterComponent = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact={true} path={switchRoutes.recipes} component={RecipesScene}/>
      <Route path={switchRoutes.recipe} component={RecipeScene}/>
    </Switch>
  </ConnectedRouter>
);
