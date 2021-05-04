import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { MemoryHistory } from 'history';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

interface AppProps {
  history: MemoryHistory;
}

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

const App: React.FC<AppProps> = ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path='/pricing' component={Pricing} />
            <Route path='/' component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
