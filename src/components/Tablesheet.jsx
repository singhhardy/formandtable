import React from "react";
import { useState } from "react";
import './main.css';
import TableData from './Datafile'

function Tablesheet() {
    const [tableData, setTableData] = useState(TableData)
    console.log(tableData)

  return (
    <div className="container-1 rounded">
      <table className="rounded">
      <thead>
      <tr className="rounded">
          <th>Heading 1</th>
          <th>Heading 2</th>
          <th>Heading 3</th>
          <th>Heading 4</th>
          <th>Heading 5</th>
        </tr>
      </thead>
      <tbody>
      {
        tableData.map((item) => (
        <tr key={item.id}>
          <td>{item.col1}</td>
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
