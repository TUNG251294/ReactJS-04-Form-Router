import React, { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function AddUser() {
    
  const [user, setUser] = useState({ id: '', name: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const initialUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUser(initialUsers[initialUsers.length - 1] || {});
  }, []);
  //mảng rỗng [] để chỉ định useEffect chỉ được chạy một lần khi component được render lần đầu

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const initialUsers = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { ...user };
 
    const maxId = initialUsers.length === 0 ? 0 : initialUsers.reduce((max, user) => Math.max(max, user.id), 0);
    newUser.id = maxId + 1;
    initialUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(initialUsers));
    navigate('/users');
};

  return (
    <>
      <h2>ADD NEW USER</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Id</label>
          <input name="id" value={user.id} disabled/>
        </div>
        <div>
          <label>Name</label>
          <input name="name" onChange={handleChange} value={user.name} />
        </div>
        <div>
          <label>Email</label>
          <input name="email" onChange={handleChange} value={user.email} />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default AddUser
