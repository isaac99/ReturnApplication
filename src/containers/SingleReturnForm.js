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
    TextField,
    Icon,
    FormControl,
    InputLabel,
    InputAdornment
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { firebase, db } from '../configs/FirebaseConfig';
// import db from '../configs/FirebaseConfig';
// import db from '../configs/FirebaseConfig';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { restElement } from '@babel/types';



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      marginBottom: '10px'
    },
    uploadImageArea:{
        width: '30%',
        height: '100%'
    },
    textFieldArea: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%'
    },
    buttonSpan: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formArea: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        height: '100%'
    }
    })
);

const SingleReturnForm = ({closeAction}) => {
    const classes = useStyles();
    const theme = useTheme();

    const [values, setValues] = React.useState({
        // amount: '',
        // password: '',
        // weight: '',
        // weightRange: '',
        // showPassword: false,
        merchant: '',
        totalCost: '',
        itemName: '',
        description: '',
        roles:{
            poster:'ishiffman120',
            admin: 'ishiffman120'
        }
      }
    );

    const [formStatus, setFormStatus] = React.useState({
        merchantValid: false,
        totalCostValid: false,
        itemNameValid: false
    });

    const [formErrors, setFormErrors] = React.useState({
        merchantError: false,
        totalCostError: false,
        itemNameError: false
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    // const handleClickShowPassword = () => {
    //     setValues({ ...values, showPassword: !values.showPassword });
    // };

    const validateMerchant = () => {
        let { merchantValid, ...others } =  formStatus;
        let { merchantError, ...rest } = formErrors;

        if(values.merchant !== ''){
            merchantError = false;
            setFormErrors({ merchantError, ...rest });
            merchantValid = true;
        } else {
            merchantError = true;
            setFormErrors({ merchantError, ...rest });
        }

        setFormStatus({merchantValid, ...others});
    }

    const validateTotalCost = () => {
        let { totalCostValid, ...others } =  formStatus;

        if(values.totalCost !== ''){
            totalCostValid = true;
        } else {

        }

        setFormStatus({totalCostValid, ...others});
    }

    const validateItemName = () => {
        let { itemNameValid, ...others } =  formStatus;

        if(values.itemName !== ''){
            itemNameValid = true;
        } else {

        }

        setFormStatus({itemNameValid, ...others});
    }

    const submitForm = () => {
        console.log('submitting...');
        // var db = firebase.firestore();

        // db.collection("returns").add({
        //     merchant: "Gucci",
        //     totalCost: 12.25,
        //     itemName: "testname for returned thing",
        //     description: "amazing thing!"
        // })

        // if(formStatus === true){
            setValues()
            db.collection("returns").add(
                values
            )
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
            closeAction();
        // }
    };

    return(
        <SingleReturnFormContainer>
            <div className={classes.formArea}>
                <div className={classes.uploadImageArea}>
                    <Button className={classes.button}>
                        <span className={classes.buttonSpan}>
                            <ReceiptIcon></ReceiptIcon>
                            <Typography>Upload Photo</Typography>
                        </span>
                    </Button>
                </div>
                <div className={classes.textFieldArea}>
                    {/* <TextField required id="standard-required" label="Merchant"></TextField>
                    <TextField required id="standard-required" label="Item Name"></TextField> */}
                    {/* <TextField required id="standard-required" label="Description"></TextField> */}

                    {/* <TextField required id="standard-required" label="Total Cost"></TextField> */}
                    <FormControl fullWidth required>
                        <InputLabel htmlFor="standard-adornment-amount">Merchant</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            value={values.merchant}
                            onChange={handleChange('merchant')}
                            error={ formErrors.merchantError }
                            // startAdornment={<InputAdornment position="start"></InputAdornment>}
                            onBlur={()=>{validateMerchant()}}
                        />
                    </FormControl>
                    <FormControl fullWidth required>
                        <InputLabel htmlFor="standard-adornment-amount">Item Name</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            value={values.itemName}
                            onChange={handleChange('itemName')}
                            // startAdornment={<InputAdornment position="start"></InputAdornment>}
                            onBlur={()=>{validateItemName()}}
                        />
                    </FormControl>
                    <FormControl fullWidth required>
                        <InputLabel htmlFor="standard-adornment-amount">Total Cost</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            value={values.totalCost}
                            onChange={handleChange('totalCost')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            onBlur={()=>{validateTotalCost()}}
                        />
                    </FormControl>
                    <FormControl fullWidth required>
                        <InputLabel htmlFor="standard-adornment-amount">Description</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            value={values.description}
                            onChange={handleChange('description')}
                            // startAdornment={<InputAdornment position="start"></InputAdornment>}
                            onBlur={()=>{}}
                        />
                    </FormControl>
                </div>
            </div>

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