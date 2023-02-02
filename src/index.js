import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
// import { Provider } from 'react-redux';
// import { store } from 'redux/store';
// import { persistor } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/animacje-z-usmiechem">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// <Provider store={store}>
//   <PersistGate loading={null} persistor={persistor}>
//     <BrowserRouter basename="/goit-react-hw-08-phonebook/">
//       <App />
//     </BrowserRouter>
//   </PersistGate>
// </Provider>
