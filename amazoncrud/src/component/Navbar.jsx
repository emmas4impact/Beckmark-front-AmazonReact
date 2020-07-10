import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';


class NavBar extends Component{
    
    render(){
        return(
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Products</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"
                            >Home <span className="sr-only">(current)</span></a
                            >
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="backoffice.html">Backoffice</a>
                        </li>
                        </ul>
                    </div>
                    <div>
                        <i className="fas fa-cart-plus"><span className="badge badge-light ml-1"> 0</span></i>
                    
                    </div>
                </nav>
                        
            
            </>
        )
    }
    
    
    
}

export default NavBar;