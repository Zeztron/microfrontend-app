import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const App: React.FC = () => {
  const onSignOut = () => {};

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header signedIn={false} onSignOut={onSignOut} />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
