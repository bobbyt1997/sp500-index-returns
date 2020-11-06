import React, { Component } from 'react'
import axios from 'axios';
import Table from './Table';
import RangeSlider from './RangeSlider';

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
        <RangeSlider upperBound={2019} lowerBound={1926} />
        <Table returns={returns} />
      </div>
    )
  }
}
