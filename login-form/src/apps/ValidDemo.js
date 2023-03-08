import { useState } from 'react';
import '../App.css';

export default function ValidDemo(){
    const[info, setInfo] = useState({
        name: '',
        age: null,
        errormessage: ''
    });

    const handleChange = (e) =>{
        let err = '';
        if(e.target.name === 'age'){
            if(!Number(e.target.value)){
                err = 'Age must be a number'
            }
        }
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        errormessage: err}
        )
    }

    return(
        <div className='App'>
            <h1>Welcome {info.name}</h1>
            <form>
                <h1>Input your name:</h1>
                <input name = 'name' type='text' onChange={handleChange}/>
                <h1>Input your age:</h1>
                <input name ='age' type ='text' onChange={handleChange}/><br/>
                {info.errormessage}
            </form>
        </div>
    );
}