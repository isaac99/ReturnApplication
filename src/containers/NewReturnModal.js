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


const NewReturnModal = ({open, handleClose}) => {
    const [returnNumber, setReturnNumber] = useState('');

    return(
        <ModalContainer open={open} onClose={handleClose}>
            <ModalContentPaper>
                {/* <p>testing modal....</p> */}
                <TabContainer>
                    <Button onClick={()=>{setReturnNumber('single')}}>Return Single</Button>
                    <Button onClick={()=>{setReturnNumber('multiple')}}>Return Multiple</Button>
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
`;

const TabContainer = styled.div`
    flex-direction:column;
`;

const ModalContainer = styled(Modal)`
    text-align:center;
`;

export default NewReturnModal;