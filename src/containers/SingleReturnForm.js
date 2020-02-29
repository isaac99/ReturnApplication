import React, { Component, useState } from 'react';
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
    Input,
    TextField
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const SingleReturnForm = ({closeAction}) => {


    const submitForm = () => {
        console.log('submitting...');
        closeAction();
    };

    return(
        <SingleReturnFormContainer>
            <TextField required id="standard-required" label="Merchant"></TextField>
            <TextField required id="standard-required" label="Item Name"></TextField>
            <TextField required id="standard-required" label="Total Cost"></TextField>
            <TextField required id="standard-required" label="Description"></TextField>

            <Button onClick={()=>{closeAction()}}>Cancel</Button>
            <Button onClick={()=>{submitForm()}}>Submit</Button>
        </SingleReturnFormContainer>
    );
}

const SingleReturnFormContainer = styled.form`
    flex-direction:column;
    display:flex;
`;

export default SingleReturnForm;