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
import GregImage from '../resources/images/greg.jpg';
import LabImage from '../resources/images/lab.jpg';
import ZurichImage from '../resources/images/zurich.jpg';
import CollegeImage from '../resources/images/college.jpg';
import AnimationArea from './AnimationArea';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';




class Home extends Component {
  




  render() {
    return (
        <HomeContainer>
            <CTAArea>
                <NoHistoryContainer>
                    <NoHistoryNewReturnButton onClick={()=>{}}>
                        <AddCircleIcon/>
                        <ReceiptIcon/>
                        <h3>You have no past returns</h3>
                        <p>Start the returns process by clicking here</p>
                    </NoHistoryNewReturnButton>
                </NoHistoryContainer>
            </CTAArea>
            <AnimationArea/>
        </HomeContainer>
    );
  }
}

const HomeContainer = styled(Paper)`
    display:flex;
    flex-direction: row;
    // flex-direction:row;
    // flex-wrap: wrap;
    height: 100%;
`;

const NoHistoryContainer = styled.div`
    text-align:center;
    padding-top:20px;    
`;

const HomeRow = styled.div`
    display:flex;
    flex-direction:row;
    // display: flex;
    // flex-wrap: wrap;
    // padding: 0 4px;
    height: 50%;
    // width: 100%;
`;

const NoHistoryNewReturnButton = styled.button`
    background:transparent;
    border:none;
`;

const CardMediaContainer = styled(CardMedia)`
    width: 100%;
    // height: auto;
    height:100%;
    // width: 100%;
    // corner-radius: none;
`;

const ImageContainer = styled.img`
    height:100%;
    // width: 100%;
    // height:100%;
    width:100%;
`;
 const HomeCard = styled(Card)`
    height: 100%;
    width: 100%;
 `;

 const CTAArea = styled.div`
    flex-basis: 60%;
    background-color: #fff9ea;
    // height: 100%;
    width: 100%;

 `;

function mapStateToProps({  }) {
    return {  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);