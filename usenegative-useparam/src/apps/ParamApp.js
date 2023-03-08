import { Link, Outlet, useNavigate} from 'react-router-dom'
import '../App.css';

function ParamApp() {

  return (
    <div className="App">
        <nav style={{borderBottom: '1px solid', paddingBottom: '1rem'}}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Product List</Link></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  );
}

export default ParamApp;