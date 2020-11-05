import React, { Component } from 'react'
import axios from 'axios';
import Table from './Table';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      returns: []
    };
  }

  componentDidMount() {
    axios.get('/api/').then((response) => {
      this.setState({ returns: response.data });
    });
  }

  render() {
    const returns = this.state.returns ? this.state.returns : null;

    return (
      <div>
        <Table returns={returns} />
      </div>
    )
  }
}
