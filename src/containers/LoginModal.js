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
import MultipleReturnForm from './MultipleReturnForm';
import SingleReturnForm from './SingleReturnForm';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { firebase, db, ui } from '../configs/FirebaseConfig';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newReturnModalAction } from '../actions/newReturnModalAction';
import { setSignedIn } from '../actions/setSignedIn';
import LoginArea from '../pages/LoginArea';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      marginBottom: '10px'
    },
    content: {
        display: 'flex',
        flex: '1 0 auto',
        justifyContent: 'flex-start'
    },
    button: {
        width: '200px',
        height: '200px',
        marginLeft: '25px',
        marginRight: '25px',
        flexDirection: 'col'
    },
    buttonSpan: {
        flexDirection: 'col',
    },
    buttonConainer:{
        display: 'flex',
    },
    multipleIconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
  })
);

const LoginModal = ({open, handleClose, userSignIn}) => {
    const [returnNumber, setReturnNumber] = useState('');
    const classes = useStyles();
    const theme = useTheme();

    const handleSignOut = () => {
        firebase.auth().signOut().then(function() {
            console.log('Signed Out');
          }, function(error) {
            console.error('Sign Out Error', error);
          });
    }

    console.log(`signedInProp: ${userSignIn}`);

    return(
        <ModalContainer open={open} onClose={handleClose}>
            <ModalContentPaper>
                {userSignIn !== false ?  
                    <>
                        <p>Signed in as: ${'user'}</p>
                        <Button onClick={() =>{ handleSignOut() }}>Sign Out</Button>
                    </>
                    :
                    <LoginArea open={open}></LoginArea>
                }
            </ModalContentPaper>
        </ModalContainer>
    );
};



const ModalContentPaper = styled(Paper)`
    display:flex;
    flex-direction:column;
    text-align:center;
    width: 50%;
    margin: auto;
    padding: 25px;
    margin-top: 8%;
`;

const TabContainer = styled.div`
    flex-direction:column;
`;

const ModalContainer = styled(Modal)`
    // text-align:center;
`;

function mapStateToProps({ newReturnMenuOpen, userSignIn }) {
    return { newReturnMenuOpen, userSignIn };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ newReturnModalAction, setSignedIn }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);