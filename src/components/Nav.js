import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';


class Nav extends Component {
  constructor() {
    super();
    this.state = {
      arr: ['1', '2', '3', '4'],

    };
  }
  login = () => {
    // console.log(this.props)
    this.props.history.push('/login')

  }

  render() {
    // const element = <div>{this.state.phone.map((item , index) => (<p key={index}>{item.name}</p>))}</div>

    return (
      <div className="App" >
        <AppBar position="static" style={{ backgroundColor: '#26a69a', width: '100%', float: 'right' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="Menu">
              icon
            </IconButton>
            <Typography variant="h6" style={{ color: 'white' }}>
              News
          </Typography>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            ><Link to='/login' style={{ color: 'white' }}>Home login</Link>
              <Button color="inherit" onClick={this.login}>Login</Button>
            </Grid>
          </Toolbar>
        </AppBar>

      </div>
    );
  }
}

export default withRouter(Nav);
