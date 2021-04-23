import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const App: React.FC = () => {
  const onSignOut = () => {};

  return (
    <BrowserRouter>
      <div>
        <Header signedIn={false} onSignOut={onSignOut} />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
