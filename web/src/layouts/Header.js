import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css"
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";
import user1 from "../assets/images/users/user1.jpg";

const Header = () => {
  const location = useLocation();
  useEffect(() => {
    // execute on location change
    console.log('Location changed!', location.pathname);
    // if (!isMobile) {
    //   toggleSideBar();
    // }
  }, [location]);

  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(true);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };

  const [isMobile, setIsMobile] = React.useState(null);


  const showMobilemenu = () => {
    setIsMobile(true);
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  const toggleSideBar = () => {
    setIsMobile(false);
    const sidebarArea = document.getElementById('sidebarArea');
    const display = window.getComputedStyle(sidebarArea).display;
    sidebarArea.style.display = display == 'block' ? 'none' : 'block';

  };

  return (
    <Navbar  className="navbar-color" dark expand="md">
      <div className="d-flex align-items-center">
        {/* <NavbarBrand href="/" className="d-lg-none">
          <LogoWhite />
        </NavbarBrand> */}
        <Button
          color="primary"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
        <Button
          color="primary"
          className="d-none d-md-block"
          onClick={toggleSideBar}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        {/* <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button> */}
        <h3 style={{color:"white", marginTop:"10px",marginLeft:"15px"}}>AAYAM</h3>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>

            {/* <NavItem>
            <>
            <div className="date-btn-style">
            <div className="date-style">
          <div className="from-date">
            <div className="date-label">
              <p className='label-style'>From:</p>
              <input type="date" className="date-input"/>
              
            </div>
            <div className="date-label">
              <p className='label-style'>To:</p>
                <input type="date" className="date-input"/>
            </div>
          </div>
      </div>
      <button className='btn-style style-space'>Save</button>
      <button className='btn-style'>Post</button>
    </div>
    </>
    
    </NavItem> */}

          {/* <NavItem>
            <Link to="/starter" className="nav-link">
              Starter
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              DD Menu
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Nav>
        {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="primary">
            <img
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="30"
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Info</DropdownItem>
            <DropdownItem>My Account</DropdownItem>
            <DropdownItem>Edit Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>My Balance</DropdownItem>
            <DropdownItem>Inbox</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </Collapse>
    </Navbar>
  );
};

export default Header;
