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

class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }


  render() {

    const handleNewReturnClick = () => {
      this.setState({open: true});
    }
 
    return (
        <>
          <SecondaryBar>
            <SecondaryBarContainer>
              {/* <p>This is the text on the secondary bar...</p> */}
              <BarItemFirst>
                <h5><Button onClick={handleNewReturnClick}>New Return</Button></h5>
                <NewReturnMenu open={this.state.open} handleClose={this.handleClose}></NewReturnMenu>
              </BarItemFirst>
              <BarItemSecond>
                <p>Bar Item 2</p>
              </BarItemSecond>
              <BarItemThird>
                <p>Bar Item 3</p>
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

export default Banner;