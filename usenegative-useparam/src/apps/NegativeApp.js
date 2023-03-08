import { Link, Outlet, useNavigate} from 'react-router-dom'
import '../App.css';

function NegativeApp() {
    const nagative = useNavigate();

    const handleClick = () => {
        nagative('/author');
    }

  return (
    <div className="App">
        <nav style={{borderBottom: '1px solid', paddingBottom: '1rem'}}>
            <Link to='/about'>About</Link><br/>
            <button onClick={handleClick}>Author</button>
        </nav>
        <Outlet/>
    </div>
  );
}

export default NegativeApp;