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

    this.updateTable = this.updateTable.bind(this);
  }

  componentDidMount() {
    axios.get('/api').then((response) => {
      this.setState({ returns: response.data });
    });
  }

  updateTable(sliderValue) {
    axios.get('/api', { params: { sliderValue } }).then((response => {
      this.setState({ returns: response.data });
    }))
  }

  render() {
    return (
      <div>
        <h1>S&P 500 Index Returns</h1>
        <RangeSlider upperBound={2019} lowerBound={1926} updateTable={this.updateTable} />
        {this.state.returns.length > 0 ? <Table returns={this.state.returns} /> : <h2>Loading...</h2>}
      </div>
    )
  }
}
