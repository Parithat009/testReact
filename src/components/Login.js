import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

class Login extends Component {
    render() {
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{ height: '100vh', backgroundColor: '#009688' }}
            >
                <h2 style={{ color: 'white' }}>Login</h2>
            </Grid>
        );
    }
}
export default Login;
