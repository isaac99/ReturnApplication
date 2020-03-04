import React, { Component } from 'react';
import styled from 'styled-components';
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
    Card,
    CardMedia,
    Typography,
    Paper,
    Modal,
    MenuItem
    // StyledMenu,
    // StyledMenuItem
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SendIcon from '@material-ui/icons/Send';
import DraftsIcon from '@material-ui/icons/Drafts';

const NewReturnMenu = ({open, handleClose}) => {
    return(
        <>
            <StyledMenu
                id="customized-menu"
                // anchorEl={anchorEl}
                // keepMounted
                open={open}
                onClose={handleClose}
                >
                <StyledMenuItem>
                    <ListItemIcon>
                        <SendIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <DraftsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </StyledMenuItem>
            </StyledMenu>
        </>
    );
};

const StyledMenu = styled(Paper)`

`;

const StyledMenuItem = styled(MenuItem)`

`;

export default NewReturnMenu;