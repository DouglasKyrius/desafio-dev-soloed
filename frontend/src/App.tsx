import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactNotification from 'react-notifications-component';

// STYLES
import { GlobalStyle } from "./globalStyles";

// COMPONENTS
import Routes from "./routes";

// CONTEXT API
import { DataProvider } from './context/DataProvider';

// react notifications SASS
import './assets/rnc-sass.scss';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <ReactNotification />
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
