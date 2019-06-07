import React, { Component } from 'react';
import Navigation from '../Navigation'
import Nav from '../Nav'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import axios from 'axios';

class AddChief extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            code: '',
            label: ''

        }
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    add() {
        axios.defaults.headers.common['Authorization'] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ3JvdXBzIjpbeyJpZCI6MSwibmFtZSI6InJlZ2lzdGVyIn0seyJpZCI6MiwibmFtZSI6ImRvY3RvciJ9LHsiaWQiOjMsIm5hbWUiOiJsYWIifSx7ImlkIjo0LCJuYW1lIjoicGhhcm1hY3kifSx7ImlkIjo1LCJuYW1lIjoiY2FzaGllciJ9XSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTU0NzgxOTcxfQ.pxQO9XPTBiOd9S_bJuBQefQmPv_oXqA5F-tgJVzCAhk';
        axios.post(`http://chaofavc.somprasongd.work:81/api/base/base-ccs`, {
            code: this.state.code,
            label: this.state.label,
            active: true
        })
            .then(res => {

                console.log(res);
                this.props.history.push('/chief');
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render() {
        // const data = this.state.data.results
        // console.log(users);
        const { code, label } = this.state
        return (
            <div >
                <Nav />
                <Grid container>
                    <div style={{ width: '15%' }}>
                        <Navigation />
                    </div>

                    <div style={{ width: '85%' }}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            style={{ width: '100%', float: 'right' }}
                        >
                            <h1>Add Chief</h1>

                            <TextField
                                id="standard-name"
                                label="Code"
                                value={code}
                                onChange={this.onChange}
                                margin="normal"
                                name="code"
                                style={{ width: '35%' }}
                            />

                            <TextField
                                id="standard-name"
                                label="Label"
                                value={label}
                                onChange={this.onChange}
                                margin="normal"
                                name="label"
                                multiline
                                rows="4"
                                style={{ width: '35%' }}
                            />
                            <Button variant="contained" color="primary" onClick={this.add.bind(this)}>
                                Save
                            </Button>
                        </Grid>
                    </div>
                </Grid>
            </div>
        );
    }
}
export default AddChief;
