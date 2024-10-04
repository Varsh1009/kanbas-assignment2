import { Link } from 'react-router-dom';

const LabsNavbar = () => {
    return (
        <nav className="navbar">
            {/* <div className="navbar-logo">
                <Link to="./">Lab1</Link> 
            </div> */}
            <ul className="navbar-links">
                <li><Link to="lab1"><h2>Lab 1</h2></Link></li> 
                <li><Link to="lab2"><h2>Lab 2</h2></Link></li>
            </ul>
        </nav>
    );
}

export default LabsNavbar;
