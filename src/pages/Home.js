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
    Paper,
    Modal
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
// import NoHistoryNewReturnButton from '../containers/NoHistoryNewReturnButton';
import ReturnHistoryCards from '../containers/ReturnHistoryCards';
import NewReturnModal from '../containers/NewReturnModal';
import LoginModal from '../containers/LoginModal';
import { firebase, db } from '../configs/FirebaseConfig';
import { newReturnModalAction } from '../actions/newReturnModalAction';
import { openLoginForm } from '../actions/openLoginForm';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
        returns: [],
        modalOpen: false,
        loginModalOpen: false
    };
      
  }

  componentDidMount(){    
    let history = new Promise((resolve, reject)=>{
        let returns = [];

        db.collection("returns")
        .onSnapshot(function(snapshot) {
            snapshot.forEach(function(doc) {
                returns.push(doc.data());
            });
            // console.log(returns);
            resolve(returns);
        }, function(error) {
            //...
            console.log('there was an error');
            reject(returns);
        });
    });

    history.then((returns)=>{
        this.setState({returns:returns});
        console.log(this.state.returns);
    });


    //possible race condition here
    // if(this.props.newReturnMenuOpen === true){
    //     this.setState({modalOpen: true});
    // }

    // console.log(this.props.newReturnMenuOpen);
  }

  render() {
    const addNewReturn = () => {
        this.setState({modalOpen: true});
        this.props.newReturnModalAction(false);
    };

    const handleClose = () => {
        this.setState({modalOpen: false});
        this.props.newReturnModalAction(false);
    };

    const handleCloseLoginModal = () => {

        this.setState({loginModalOpen: false});
        this.props.openLoginForm(false);
    }

    const returns = [...this.state.returns];

    return (
        <HomeContainer>
            <CTAArea>
            {
                this.state.returns.length === 0 &&
                <NoHistoryContainer>
                    <NoHistoryNewReturnButton onClick={()=>{addNewReturn()}}>
                        <AddCircleIcon/>
                        <ReceiptIcon/>
                        <h3>You have no past returns</h3>
                        <p>Start the returns process by clicking here</p>
                    </NoHistoryNewReturnButton>
                </NoHistoryContainer>
            }

            {   returns && returns.length > 0 &&
                    returns.map((item, index)=> {
                        return <ReturnHistoryCards 
                                    key={index}
                                    merchant={item.merchant} 
                                    cost={item.totalCost} 
                                    itemName={item.itemName} 
                                    description={item.description}
                                >
                                </ReturnHistoryCards>
                    })
            }
            </CTAArea>
            <AnimationArea/>
            <NewReturnModal open={this.props.newReturnMenuOpen} handleClose={handleClose}></NewReturnModal>
            <LoginModal open={this.props.loginFormOpen} handleClose={handleCloseLoginModal}></LoginModal>
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

const ScrollableCardArea = styled.div`
    overflow:scroll;
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
    overflow:scroll;

 `;

function mapStateToProps({ newReturnMenuOpen, loginFormOpen }) {
    return { newReturnMenuOpen, loginFormOpen };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ newReturnModalAction, openLoginForm }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);