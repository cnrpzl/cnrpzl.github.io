import "./navbar.css"
import { Component } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import { MenuItems } from "../menuitems/MenuItems";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
class Navbar extends Component{

    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">constAnhedonia
                </h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i>{this.state.clicked ? <CloseIcon/> : <MenuIcon/> }</i>
                   
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {
                    MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i>{item.icon}</i>{item.title}
                            </Link>
                            </li>
                            )
                        })}
                        <button>Sign Up</button>
                </ul>
            </nav>
        )
    }
    
}


export default Navbar