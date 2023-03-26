import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route,Switch } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import NegativeApp from './apps/NegativeApp';
import About from './components/About';
import Author from './components/Author';
import NotFound from './components/NotFound';
import Home from './components/Home';
import ParamApp from './apps/ParamApp';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import SearchParam from './apps/SearchParam';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routes>
          <Route path='/' element={<NegativeApp />}>
              <Route path='about' element={<About/>}/>
              <Route path='author' element={<Author/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Route>
      </Routes> */}

      <Routes>
        <Route path='/' element={<ParamApp/>}>
          <Route index element = {
            <main style={{padding: '1rem'}}>
              <p>Index route là route con mặc định cho route cha</p>
            </main>
          }/>
          <Route path='products' element={<ProductList/>}/>
          <Route path='products/:id' element={<ProductDetail/>}/>
        </Route>
      </Routes>

      {/* <SearchParam/> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
