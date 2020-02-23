// Banner.js
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

class Banner extends Component {
  render() {
    return (
        <SecondaryBar>
          <SecondaryBarContainer>
            <p>This is the text on the secondary bar...</p>
          </SecondaryBarContainer>
        </SecondaryBar>
    );
  }
}

const SecondaryBar = styled(Paper)`

`;

const SecondaryBarContainer = styled.div`
    background-color:#fff9ea;
    display:flex;
    justify-content: space-between;
`;

export default Banner;