import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyForm from './components/MyForm';
import ValidDemo from './apps/ValidDemo';
import FileUploadPage from './apps/FileUploadPage';
import LoginForm from './apps/LoginForm';
import BasicForm from './apps/BasicForm';
import ValidationSchemaEx from './apps/ValidationSchemaEx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <FileUploadPage/> */}
    {/* <MyForm /> */}
    {/* <ValidDemo/> */}
    <LoginForm/>
    {/* <BasicForm/> */}
    {/* <ValidationSchemaEx/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
