import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function Users() {
    const [users,setUsers] = useState(
        [{}]
        );
    const nagative = useNavigate();

    useEffect(() => {
        const initialUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(initialUsers);
        console.log(initialUsers);
      }, []);
      
    return (
        <div className='App'>
            <h1>USER LIST</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                       <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button onClick={() => nagative(`/edit/${user.id}`)}>Edit</button></td>
                            <td><button onClick={() => nagative(`/delete/${user.id}`)}>Delete</button></td>
                       </tr> 
                    ))}
                    
                </tbody> 
            </table>
            
        </div>
    )
}

export default Users
