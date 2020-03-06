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

const ReturnHistoryCards = ({merchant}) => {

    return(
        <Card>
            <CardActionAreaContainer>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="100"
                    image={require("../resources/images/contemplative-reptile.jpg")}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {merchant}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionAreaContainer>
        </Card>
    );
};

const CardActionAreaContainer = styled(CardActionArea)`
    flex-direction:row;
    display:flex;
`;

export default ReturnHistoryCards;