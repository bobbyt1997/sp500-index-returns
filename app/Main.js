import React, { Component } from 'react'
import axios from 'axios';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      returns: []
    };
  }

  componentDidMount() {
    axios.get('/api/').then((data) => {
      this.setState({ returns: data });
    });
  }

  render() {
    const returns = this.state.returns ? this.state.returns : null;

    return (
      <div>
        MAIN COMPONENT
      </div>
    )
  }
}
