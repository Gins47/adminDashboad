import { useState } from "react";
import Table from "../../components/table/Table";
import "./UserList.css";
import { transRows } from "../../data/dummyData";
import { Link } from "react-router-dom";
import { DeleteOutlineOutlined } from "@mui/icons-material";
function UserList() {
  // initializing the user
  const [usersList, setUsersList] = useState(transRows);

  // Delete user

  const deleteUser = (id) => {
    setUsersList(usersList.filter((item) => item.id !== id));
  };

  const transColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="UserListUser">
            <img className="UserAvatar" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="UserAction">
            <Link to={`/user/` + params.row.id}>
              <button className="EditBtn">Edit</button>
            </Link>

            <DeleteOutlineOutlined className="DeleteBtm" onClick={() => deleteUser(params.row.id)} />
          </div>
        );
      },
    },
  ];

  return (
    <div className="User">
      <h1>User Page</h1>
      <Table rows={usersList} columns={transColumns} pageSize={15} rowsPerPageOptions={15} />
    </div>
  );
}

export default UserList;
