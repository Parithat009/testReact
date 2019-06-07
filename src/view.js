import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class View extends Component {

  updateInputValue2(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <h1>view page</h1>
        <h3>{this.props.arr}</h3>
        <h3>{this.props.name}</h3>
        <div>
          {this.props.arr.map((arrs, i) => <Button variant="contained" color="secondary" key={i} onClick={() => this.change(arrs)}>
            {arrs}
          </Button>)}
        </div>
        <div><br />
          {this.props.item.map((items, i) => <Button variant="contained" color="primary" key={i} onClick={() => this.changeItem(items)}>
            {items.name} -- {items.age}
          </Button>)}
        </div>
        <h1>React.js</h1>
        <h2> text in 555556</h2>
        <TextField
          id="standard-name"
          label="Name"
          value={this.props.name}
          onChange={this.updateInputValue2.bind(this)}
          margin="normal"
        />

      </div>
    );
  }
  change(i) {
    console.log(i);
  }
  changeItem(i) {
    console.log(i);
  }
}

export default View;
