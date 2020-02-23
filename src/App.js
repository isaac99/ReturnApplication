import React from 'react';
import logo from './logo.svg';
import { 
  Button, 
  List, 
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  InboxIcon,
  MailIcon
} from '@material-ui/core';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navmenu from './containers/Navmenu';
import Banner from './containers/Banner'

function App() {
  return (
    

    <Router>
      <div style={{height: '100%'}}>
        <Navmenu/>
        <Banner/>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
