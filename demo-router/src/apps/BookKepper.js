import React from 'react';
import '../App.css';
import {Routes, Route, Link, Outlet} from 'react-router-dom'
import Invoices from '../components/Invoices';
import Expences from '../components/Expences';
import Home from '../components/Home';
function BookKepper() {
    return (
        <div className='App'>
            <nav style={{borderBottom: '1px solid', paddingBottom: '1rem'}}>
                <h1>Book Kepper</h1>
                <Link to='/invoices'>Invoices</Link> |{' '}
                <Link to='/expences'>Expences</Link>
            </nav>
            <Outlet/> 
            {/* Sử dụng Outlet để render component con */}
        </div>
    )
}

export default BookKepper;
