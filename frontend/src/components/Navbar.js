import {Link} from 'react-router-dom'; 
import logo from '../images/era_logo.png'; 
const Navbar = () => {
    return (
        <header>
            <div className="navbar">
                <Link to="/">
                    <p className="navbar__link">Sobre Nosotros</p>
                </Link>
                <Link to="/clientes">
                    <p className="navbar__link">Clientes / Mercados</p>
                </Link>
                <Link to="/productos">
                    <p className="navbar__link">Productos</p>
                </Link>
                <Link to="/materiales">
                    <p className="navbar__link">Materiales</p>
                </Link>
                <Link to="/ventaja">
                    <p className="navbar__link">Ventaja Competitiva</p>
                </Link> 
                <img src={logo} alt="Logo ERA" className="navbar__logo" />
            </div>
        </header>
    )
}

export default Navbar; 