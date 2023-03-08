import React,{useState} from 'react';
import '../App.css';

function LoginForm() {
    const [info,setInfo] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    });

    const handleChange = (e) => {
        setInfo({...info,[e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = info.username && info.email && info.password && info.confirmpassword
           alert(isValid? 'Sign up successfully!!!' : 'Please fill out all the fields!!!');
        }
        
    return (
        <div className='App' style={{textAlign: 'left', fontSize: '1.5rem'}}>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input name='username' type='text' onChange={handleChange}/>
                </label>
                <label>
                    <p>Email</p>
                    <input name='email' type='email' onChange={handleChange}/>
                </label>
                <label>
                    <p>Password</p>
                    <input name='password' type='password' onChange={handleChange}/>
                </label>
                <label>
                    <p>Confirm password</p>
                    <input name='confirmpassword' type='password' onChange={handleChange}/>
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
        
    )
}

export default LoginForm
