import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
export default function EditUser() {
      const editId = useParams().id;
      const [user, setUser] = useState({
      });
      const navigate = useNavigate();

      useEffect(() => {
            const initialUsers = JSON.parse(localStorage.getItem('users'));
            const user = initialUsers?.find((u) => parseInt(u.id) === parseInt(editId));
            setUser(user);
            console.log(user);
      },[editId]);

      const handleChange = (e) => {
            let name = e.target.name;
            let value = e.target.value;
            const updatedForm = ({ ...user, [name]: value });
            setUser(updatedForm);
            console.log(name, value);
      }
      
      const handleSubmit = (e) => {
            e.preventDefault();
            const initialUsers = JSON.parse(localStorage.getItem('users'));
            const userIndex = initialUsers.findIndex((u) => parseInt(u.id) === parseInt(editId));
            const updatedUser = { ...user };
            initialUsers[userIndex] = updatedUser;
            localStorage.setItem('users', JSON.stringify(initialUsers));
            console.log(updatedUser);
           navigate('/users');
      }
      return(
            <>
                  <h2>EDIT USER</h2>
                  <form onSubmit={handleSubmit}>
                        <div>
                              <label>Id</label>
                              <input disabled name="id" value={user.id}/>
                        </div>
                        <div>
                              <label>Name</label>
                              <input name="name" onChange={handleChange} value={user.name}/>
                        </div>
                        <div>
                              <label>Email</label>
                              <input name="email" onChange={handleChange} value={user.email}/>
                        </div>
                        <button type='submit'>Save</button>
                  </form>
            </>
      )
}