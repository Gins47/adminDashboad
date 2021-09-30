import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable(rows, columns, pageSize, rowsPerPageOptions) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={pageSize} rowsPerPageOptions={[rowsPerPageOptions]} checkboxSelection />
    </div>
  );
}
