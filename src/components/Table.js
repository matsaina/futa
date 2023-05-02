import React from "react";
import TableCard from "./TableCard";

function Table() {

    
  return (
    <>
      <h2>Games</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Home</th>
              <th>Scores</th>
              <th>Away</th>
              <th>Other</th>
            </tr>
          </thead>
          <tbody>
            <TableCard />
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
