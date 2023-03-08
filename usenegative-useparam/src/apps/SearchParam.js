import React from 'react';
import{useSearchParams} from 'react-router-dom';
import  '../App.css';

function SearchParam() {
    let products = ["Iphone 13 Pro", "Iphone 14", "Galaxy S22"];
    let [searchParams, setSearchParams] = useSearchParams();
    
    const handleSearch = (e) => {
        let filter = e.target.value;
        if(filter){
            setSearchParams({filter});
        } else {
            setSearchParams({})
        }
    }

    return (
        <div className='App' style={{textAlign:'left', marginLeft:'1rem', marginTop: '1rem'}}>
            <input value={searchParams.get('filter') || ''} onChange ={handleSearch}/>
            
            {products.filter(product =>{
                let filter = searchParams.get('filter');
                if(!filter) return true;
                let name = product.toLowerCase();
                return name.startsWith(filter.toLowerCase());            
            }).map((product, index) => (
                <li key={index}>{product}</li>
            ))
            }
        </div>
    )
}

export default SearchParam
