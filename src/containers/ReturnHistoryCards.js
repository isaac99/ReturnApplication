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
    CardActionArea,
    CardContent
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ReptileImage from '../resources/images/contemplative-reptile.jpg';
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
    }
  })
);

const ReturnHistoryCards = ({merchant, cost, itemName, description}) => {
    const classes = useStyles();
    const theme = useTheme();

    return(
        <Card className={classes.root}>
            <CardActionArea className={classes.content}>
                <CardMedia>
                    <PictureArea src={ReptileImage}></PictureArea>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {itemName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        ${cost}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {merchant}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};


// const CardActionAreaContainer = styled(CardActionArea)`
//     flex-direction:row;
//     display:flex;
// `;

const PictureArea = styled.img`
    width: 150px;
    height: 100%;
`;


export default ReturnHistoryCards;