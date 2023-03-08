import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DemoRouter from './apps/DemoRouter';
import Home from './components/Home';
import Invoices from './components/Invoices';
import Expences from './components/Expences';
import BookKepper from './apps/BookKepper';
import NotFound from './components/NotFound';
import Invoice from './data/Invoice';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <DemoRouter />
            {/* <Routes>
              <Route path='/' element = {<BookKepper/>}>
                <Route path='invoices' element = {<Invoices/>}/>
                  <Route path='invoices/:invoiceId' element = {<Invoice/>}/>
               
                <Route path='expences' element = {<Expences/>}/> 
                <Route path='*' element = {<NotFound/>}/>
              </Route>     
            </Routes> */}
      </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
