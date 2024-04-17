import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes/index.jsx';
import { RouterProvider } from 'react-router-dom';

const rootElement = document.getElementById('root');

const app = (
 
    <React.StrictMode>
      <RouterProvider router={routes}/>
    </React.StrictMode>

);

ReactDOM.render(app, rootElement);
