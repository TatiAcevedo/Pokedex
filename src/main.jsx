import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate as Redirect } from 'react-router-dom';
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <App/> 
  
  </React.StrictMode>,
)



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
);
