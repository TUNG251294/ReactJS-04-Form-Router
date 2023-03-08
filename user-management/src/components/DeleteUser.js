import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function DeleteUser() {
    const deleteId = useParams().id;
    const [user, setUser] = useState({});

    const navigate = useNavigate();
    
      useEffect(() => {
            const initialUsers = JSON.parse(localStorage.getItem('users'));
            const user = initialUsers.find((u) => parseInt(u.id) === parseInt(deleteId));
            setUser(user);
            console.log(user);
      }, [deleteId]);

      const handleDelete = (e) => {
            e.preventDefault();
            const users = JSON.parse(localStorage.getItem('users'));
            const updatedUsers = users.filter((u) => parseInt(u.id) !== parseInt(deleteId));
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            navigate('/');
      }
 
      return(
            <>
            <h2>Are you sure you want to remove this user?</h2>
                  <table>
                        <thead>
                              <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                              </tr>
                        </tbody>
                  </table>
                  <button onClick={handleDelete}>Delete</button>
            </>
      )
}