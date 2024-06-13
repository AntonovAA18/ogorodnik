import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";

export const Context = React.createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode className="h-full">
      <BrowserRouter>
          <Context.Provider value={{
              user: new UserStore(),
              product: new ProductStore()
          }}>
            <App />
          </Context.Provider>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
