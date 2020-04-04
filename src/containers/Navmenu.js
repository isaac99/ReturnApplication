// Navmenu.js

import React, { Component } from 'react';
import { 
    Button, 
    List, 
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    InboxIcon,
    MailIcon,
    Drawer,
    IconButton,
    Paper,
    Menu
  } from '@material-ui/core';
  import MenuIcon from '@material-ui/icons/Menu';
  import styled from 'styled-components';
  import Banner from './Banner';
  import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
  import AccountBoxIcon from '@material-ui/icons/AccountBox';
  import { connect } from 'react-redux';
  import { bindActionCreators } from 'redux';
  import { openLoginForm } from '../actions/openLoginForm';


class Navmenu extends Component {
  constructor(props){
      super(props);
      this.state = {
          left: false
      }
  }
  
  toggleLogin(side, open) {
    this.setState({left: open});
  }

  closeMenu(){
    this.setState({left:false});
  }

  render() {
    return (
        <Navbar>
            {/* <h2>Navmenu</h2> */}
            <NavbarContainer>
                {/* <IconButton onClick={()=>this.toggleDrawer('left', true)}>
                    <MenuIcon/>
                </IconButton> */}
                {/* <Banner></Banner> */}
                <LogoContainer>
                    <p>Return Application</p>
                </LogoContainer>
                <ButtonContainer>
                    <Button><NavLink to={'/'} onClick={() => this.closeMenu()} className="nav-link">My Returns</NavLink></Button>
                    <Button><NavLink to={'/about'} onClick={() => this.closeMenu()} className="nav-link">About</NavLink></Button>
                    {/* <Button><NavLink to={'/history'} onClick={() => this.closeMenu()} className="nav-link">Past Returns</NavLink></Button> */}
                    <IconButton onClick={() => this.props.openLoginForm(true)}>
                        {/*<NavLink to={'/account'} onClick={() => this.closeMenu()} className="nav-link">Account</NavLink>*/}
                        <AccountBoxIcon style={{ color: 'white' }} />
                    </IconButton>
                </ButtonContainer>
            </NavbarContainer>

            {/* <MenuOverlay open={this.state.left} onClose={() => this.toggleDrawer('left', false)}>
                <h2>NCD</h2>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ButtonContainer>
                    <Button><NavLink to={'/'} onClick={() => this.closeMenu()} className="nav-link"> Home </NavLink></Button>
                    <Button><NavLink to={'/contact'} onClick={() => this.closeMenu()}  className="nav-link">Contact</NavLink></Button>
                    <Button><NavLink to={'/about'} onClick={() => this.closeMenu()}  className="nav-link">About</NavLink></Button>
                </ButtonContainer>
                </nav>
                <hr />
            </MenuOverlay> */}
        </Navbar>
    );
  }
}
const Navbar = styled(Paper)`
    // min-width: 200px;
`;

const MenuOverlay = styled(Drawer)`
    min-width: 200px;
`;

const NavbarContainer = styled.div`
    // background-color:#fff9ea;
    background-color:black;
    display:flex;
    justify-content: space-between;
    color: white;
`;

const LogoContainer= styled.div`
    // right:0;
    padding-right: 5px;
    font-weight: bold;
    margin-left: 5px;
    font-size:24px;
`;

const ButtonContainer = styled.div`
    display:flex;
    flex-direction: row;
    min-width: 300px;
    color:white;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color:white;
    font-size:23px;
`;

function mapStateToProps({ loginFormOpen }) {
    return { loginFormOpen };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ openLoginForm }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navmenu);