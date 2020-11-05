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
    axios.get('/api/').then((response) => {
      this.setState({ returns: response.data });
    });
  }

  render() {
    const returns = this.state.returns ? this.state.returns : null;

    return (
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Total Return</th>
              <th scope="col">Cumulative Return</th>
            </tr>
          </thead>
          <tbody>
            {returns ? returns.map((indexReturnObj, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{indexReturnObj.year}</th>
                  <td>{indexReturnObj.totalReturn}</td>
                  <td>CUMULATIVE RETURN</td>
                </tr>
              );
            }) : <h1>Loading...</h1>}
          </tbody>
        </table>
      </div>
    )
  }
}
