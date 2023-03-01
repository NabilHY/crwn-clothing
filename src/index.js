import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './contexts/user.context';
import { ShopProvider } from './contexts/shop.context';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <UserProvider>
      <ShopProvider>
        <App />
      </ShopProvider>
    </UserProvider>
  </React.StrictMode>
);

