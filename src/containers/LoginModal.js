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
import MultipleReturnForm from './MultipleReturnForm';
import SingleReturnForm from './SingleReturnForm';
import { makeStyles, useTheme } from '@material-ui/core/styles';


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

const LoginModal = ({open, handleClose}) => {
    const [returnNumber, setReturnNumber] = useState('');
    const classes = useStyles();
    const theme = useTheme();

    return(
        <ModalContainer open={open} onClose={handleClose}>
            <ModalContentPaper>
                {/* <p>testing modal....</p> */}
                <TabContainer className={classes.buttonContainer}>
                    <Button className={classes.button} onClick={()=>{setReturnNumber('single')}}>
                        <span className={classes.buttonSpan}>
                            <ReceiptIcon></ReceiptIcon>
                            <Typography>
                                Return Single
                            </Typography>
                        </span>
                    </Button>
                    <Button className={classes.button} onClick={()=>{setReturnNumber('multiple')}}>
                        <span className={classes.buttonSpan}>
                            <div className={classes.multipleIconContainer}>
                                <ReceiptIcon></ReceiptIcon>
                                <ReceiptIcon></ReceiptIcon>
                                <ReceiptIcon></ReceiptIcon>
                            </div>
                            <Typography>
                                Return Multiple
                            </Typography>
                        </span>
                    </Button>
                </TabContainer>
                {returnNumber === 'single' &&
                    <SingleReturnForm closeAction={handleClose}></SingleReturnForm>
                }
                {returnNumber === 'multiple' &&
                    <MultipleReturnForm closeAction={handleClose}></MultipleReturnForm>
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

export default LoginModal;