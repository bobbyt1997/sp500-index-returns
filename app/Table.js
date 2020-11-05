import React from 'react'

export default function Table(props) {
  const returns = props.returns;

  return (
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
  )
}
