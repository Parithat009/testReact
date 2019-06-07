import React, { Component } from 'react'
import './Navigation.css'
import { withRouter } from 'react-router-dom'

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';

//import ListItemText from '@material-ui/core/ListItemText';

// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

const path = [
    { name: 'User', path: 'user' },
    { name: 'Chief Complaints', path: 'chief' },
    { name: 'Differential Diagnosiss', path: 'differential' },
    { name: 'History Rankings', path: 'history' },
    { name: 'Physical Examinations', path: 'physical' },
]

class Navigation extends Component {
    toPage(path) {
        this.props.history.push(`/${path}`);
    }
    render() {
        return (
            <div >
                <Paper style={{ width: '15%' }} className='side'>
                    <List style={{ backgroundColor: 'rgb(86, 125, 121)', paddingTop: '20px' }}>
                        {path.map((item, index) => (
                            <ListItem button key={index} onClick={this.toPage.bind(this, item.path) }>
                                <h1 style={{ color: 'white', fontSize: '1rem', margin: '0' }}>{item.name}</h1>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List style={{ backgroundColor: 'rgb(86, 125, 121)', paddingTop: '20px', height:'56vh' }} >
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <h1 style={{ color: 'white', fontSize: '1rem', margin: '0' }}>{text}</h1>
                            </ListItem>
                        ))}
                    </List>
                </Paper>

{/* 
                <CssBaseline />
                
                <Drawer
                    
                    variant="permanent"
                    
                >
                   
                    <List >
                        {path.map((item, index) => (
                            <ListItem button key={index} onClick={this.toPage.bind(this, item.path) }>
                                <h1 style={{ color: 'white', fontSize: '1rem', margin: '0' }}>{item.name}</h1>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer> */}
                

            </div>
        )
    }
}
export default withRouter(Navigation);
