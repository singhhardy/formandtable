import React from "react";
import { useState } from "react";
import './main.css';
import TableData from './Datafile'

function Tablesheet() {
    const [tableData, setTableData] = useState(TableData)
    console.log(tableData)

  return (
    
    <div className="container-1 rounded">
    <h2 className="table-heading">Order Table</h2>
      <table className="table rounded">
      <thead>
      <tr className="rounded">
          <th scope="col">S. No.</th>
          <th scope="col">Heading 2</th>
          <th scope="col">Heading 3</th>
          <th scope="col">Heading 4</th>
          <th scope="col">Heading 5</th>
        </tr>
      </thead>
      <tbody>
      {
        tableData.map((item) => (
        <tr key={item.id}>
          <td scope="row">{item.id}</td>
          <td>{item.col2}</td>
          <td>{item.col3}</td>
          <td>{item.col4}</td>
          <td>{item.col5}</td>
        </tr>

        ))
    }
      </tbody>
      </table>
    </div>
  );
}

export default Tablesheet;
