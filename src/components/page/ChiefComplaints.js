import React, { Component } from 'react';
import Navigation from '../Navigation'
import Nav from '../Nav'
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import axios from 'axios';

class ChiefComplaints extends Component {
    constructor() {
        super();
        this.state = {
            data: {},

        }
    };

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ3JvdXBzIjpbeyJpZCI6MSwibmFtZSI6InJlZ2lzdGVyIn0seyJpZCI6MiwibmFtZSI6ImRvY3RvciJ9LHsiaWQiOjMsIm5hbWUiOiJsYWIifSx7ImlkIjo0LCJuYW1lIjoicGhhcm1hY3kifSx7ImlkIjo1LCJuYW1lIjoiY2FzaGllciJ9XSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTU0NzgxOTcxfQ.pxQO9XPTBiOd9S_bJuBQefQmPv_oXqA5F-tgJVzCAhk';
        axios.get(`http://chaofavc.somprasongd.work:81/api/base/base-ccs`)
            .then(res => {
                this.setState({ data: res.data });
                // console.log(this.state.user.results);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    addPage = () => {
        this.props.history.push('/addChief');
    }
    editPage = (id) => {
        console.log(id);
        this.props.history.push(`/editChief/${id}`);
    }

    render() {
        const data = this.state.data.results
        // console.log(users);
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
                            <br />
                            <AppBar position="static" style={{ backgroundColor: '#26a69a', width: '90%', height: 'auto', float: 'right' }}>
                                <Toolbar>
                                    <h4>ChiefComplaints</h4>
                                </Toolbar>
                            </AppBar><br />

                            <Table style={{ padding: '20px', width: '90%' }}>
                                <TableHead style={{ backgroundColor: '#eeeeee' }}>
                                    <TableRow>
                                        <TableCell style={{ fontSize: '1rem', width: '25%' }}>Username</TableCell>
                                        <TableCell style={{ fontSize: '1rem', width: '50%' }}>Name</TableCell>
                                        <TableCell style={{ fontSize: '1rem', width: '25%' }}>
                                            <Fab color="primary" aria-label="Add" size="small" onClick={this.addPage}>
                                                <AddIcon />
                                            </Fab></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {data && data.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell >{item.code}</TableCell>
                                            <TableCell>{item.label}</TableCell>
                                            <TableCell>
                                                <button onClick={this.editPage.bind(this , item.id)}>edit</button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Grid>
                    </div>
                </Grid>
            </div>
        );
    }
}
export default ChiefComplaints;
