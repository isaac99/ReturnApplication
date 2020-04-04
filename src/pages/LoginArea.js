import React, { Component, useState, useEffect } from 'react';
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
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { firebase, db, ui, uiConfig } from '../configs/FirebaseConfig';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newReturnModalAction } from '../actions/newReturnModalAction';

const LoginArea = ({open}) => {

    useEffect(() => {
        // console.log(open);
        if(open === true){
            ui.start('#firebaseui-auth-container', uiConfig);
        }
    }, [open]);

    return(
        <div id="firebaseui-auth-container">

        </div>
    );
}

export default LoginArea;