import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { store, persistore } from 'redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<>Loading...</>} persistor={persistore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
