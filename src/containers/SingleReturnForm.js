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
import { firebase, db } from '../configs/FirebaseConfig';
// import db from '../configs/FirebaseConfig';
// import db from '../configs/FirebaseConfig';

const SingleReturnForm = ({closeAction}) => {


    const submitForm = () => {
        console.log('submitting...');
        // var db = firebase.firestore();

        db.collection("returns").add({
            merchant: "Gucci",
            totalCost: 12.25,
            itemName: "testname for returned thing",
            description: "amazing thing!"
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

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