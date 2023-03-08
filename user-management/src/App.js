import './App.css';
import {Link, Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav style={{borderBottom: '1px solid', paddingBottom: '1rem'}}>
        <ul>
        <li>
          <Link to='/users'>User List</Link>
        </li>
        <li>
          <Link to='/add'>Add User</Link>
        </li>
      </ul>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;