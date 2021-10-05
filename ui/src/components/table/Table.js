import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function Table({ rows, columns, pageSize, rowsPerPageOptions }) {
  console.log(`rows=${rows} columns =${JSON.stringify(columns)} pageSize=${pageSize} rowsPerPageOptions=${rowsPerPageOptions}`);
  /**    <div style={{ width: "100%", height: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={pageSize} rowsPerPageOptions={[rowsPerPageOptions]} checkboxSelection />
    </div>
 */
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        disableSelectionOnClick
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[rowsPerPageOptions]}
        checkboxSelection
      />
    </div>
  );
}
