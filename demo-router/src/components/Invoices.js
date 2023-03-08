import React from 'react'
import {Link} from 'react-router-dom'

function Invoices() {
    let invoiceId = 1000;
    return (
        <main style={{ padding: "1rem 0" }}>
      <h2>Invoices</h2>
      <Link to={`/invoices/${invoiceId}`} key={invoiceId}>
        ID {invoiceId}
      </Link>
    </main>
        
    )
}

export default Invoices
