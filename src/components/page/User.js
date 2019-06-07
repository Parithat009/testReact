import React, { Component } from 'react';
import Navigation from '../Navigation'
import Nav from '../Nav'
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import axios from 'axios';

class User extends Component {
  constructor() {
    super();
    this.state = {
      user: {},

    }
  };

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ3JvdXBzIjpbeyJpZCI6MSwibmFtZSI6InJlZ2lzdGVyIn0seyJpZCI6MiwibmFtZSI6ImRvY3RvciJ9LHsiaWQiOjMsIm5hbWUiOiJsYWIifSx7ImlkIjo0LCJuYW1lIjoicGhhcm1hY3kifSx7ImlkIjo1LCJuYW1lIjoiY2FzaGllciJ9XSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTU0NzgxOTcxfQ.pxQO9XPTBiOd9S_bJuBQefQmPv_oXqA5F-tgJVzCAhk';
    axios.get(`http://chaofavc.somprasongd.work:81/api/users/admin`)
      .then(res => {
        this.setState({ user: res.data });
        // console.log(this.state.user.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  // add(){
  //   axios.defaults.headers.common['Authorization'] = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZ3JvdXBzIjpbeyJpZCI6MSwibmFtZSI6InJlZ2lzdGVyIn0seyJpZCI6MiwibmFtZSI6ImRvY3RvciJ9LHsiaWQiOjMsIm5hbWUiOiJsYWIifSx7ImlkIjo0LCJuYW1lIjoicGhhcm1hY3kifSx7ImlkIjo1LCJuYW1lIjoiY2FzaGllciJ9XSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTU0NzgxOTcxfQ.pxQO9XPTBiOd9S_bJuBQefQmPv_oXqA5F-tgJVzCAhk';
  //   axios.post(`http://chaofavc.somprasongd.work:81/api/base/base-exes`, {
  //     code: 'nj45455008',
  //     label: '008',
  //     active: true
  //   })
  //     .then(res => {
        
  //       console.log(res);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  // }

  render() {
    const users = this.state.user.results
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
              <h1>456</h1>

              <Table style={{ padding: '20px', width: '90%' }}>
                <TableHead style={{ backgroundColor: '#eeeeee' }}>
                  <TableRow>
                    <TableCell style={{ fontSize: '1rem', width: '25%' }}>Username</TableCell>
                    <TableCell style={{ fontSize: '1rem', width: '50%' }}>Name</TableCell>
                    <TableCell style={{ fontSize: '1rem', width: '25%' }}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
      
                  {users && users.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell >{item.username}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>456</TableCell>
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
export default User;
