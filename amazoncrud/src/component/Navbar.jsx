import React, { Component } from "react";
import { Navbar, Nav,Form ,Button,FormControl} from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import { GrAmazon } from "react-icons/gr";
import { Link, withRouter } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Link to="/">
            <Navbar.Brand>
              <GrAmazon size={32} />
              {this.props.title} Amazon Products
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Categories, Brand, Products"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
            <Nav className="ml-auto">
              <Link
                to="/menu"
                className={
                  this.props.location.pathname === "/Products"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Products
              </Link>
              <Link
                to="/backOffice"
                className={
                  this.props.location.pathname === "/backOffice"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                BackOffice
              </Link>
              <Link to="/location" className="nav-link">
                Our Location
              </Link>
            </Nav>
            <GiShoppingCart size={32} style={{ color: "white" }} />
            <span className="badge badge-light ml-1"> 0</span>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
//<GiShoppingCart size={32}style={{color: "white"}}/><span className="badge badge-light ml-1"> 0</span>
export default withRouter(NavBar);
