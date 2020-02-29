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
    Paper
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const NoHistoryNewReturnButton = ({addNewPendingReturn}) => {

    return(
        <>
            <AddCircleIcon/>
            <ReceiptIcon/>
            <h3>You have no past returns</h3>
            <p>Start the returns process by clicking here</p>
        </>

    );
}

export default NoHistoryNewReturnButton;