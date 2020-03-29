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
  Paper
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import NewReturnMenu from './NewReturnMenu.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newReturnModalAction } from '../actions/newReturnModalAction';


class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }


  render() {

    const handleNewReturnClick = () => {
      // this.setState({open: true});
      this.props.newReturnModalAction(true);

      console.log(this.props.newReturnMenuOpen);
    }
 
    return (
        <>
          <SecondaryBar>
            <SecondaryBarContainer>
              {/* <p>This is the text on the secondary bar...</p> */}
              <BarItemFirst>
                <Button><NavLink to={'/'} onClick={() => {handleNewReturnClick()}} className="nav-link">New Return</NavLink></Button>
                {/* <NewReturnMenu open={this.state.open} handleClose={this.handleClose}></NewReturnMenu> */}
              </BarItemFirst>
              <BarItemSecond>
                <Button>Item 2</Button>
              </BarItemSecond>
              <BarItemThird>
                <Button>Item 3</Button>
              </BarItemThird>
            </SecondaryBarContainer>
          </SecondaryBar>
        </>
    );
  }
}

const BarItemFirst = styled.div`
  background-color:#fff9ea;
  margin:5px;
  width:24%;
  font-size:20px;
  text-align:center;
`;

const BarItemSecond = styled.div`
  background-color:#fff9ea;
  margin:5px;
  width:24%;
  font-size:20px;
  text-align:center;
  margin-left:0px;

`;

const BarItemThird = styled.div`
  background-color:#fff9ea;
  margin:5px;
  width:56%;
  font-size:20px;
  text-align:center;
  margin-left:0px;
`;

const SecondaryBar = styled(Paper)`

`;

const SecondaryBarContainer = styled.div`
    // background-color:#fff9ea;
    background-color:black;
    display:flex;
    justify-content: space-between;

`;

const NavLink = styled(Link)`
    text-decoration: none;
    color:black;
    font-size:23px;
    width: 100%;
`;

function mapStateToProps({ newReturnMenuOpen }) {
  return { newReturnMenuOpen };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newReturnModalAction }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banner);