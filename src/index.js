import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Shravani/App'
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ContainerFluidExample from './grid';
import MyComponent from './Cards/MyComponent';
import FluidComponent_API from './Components/Card_API/FluidComponent_API';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FluidComponent_API />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();