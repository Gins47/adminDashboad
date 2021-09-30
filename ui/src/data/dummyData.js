export const userData = [
  {
    name: "Jan",
    "Active User": 400,
  },
  {
    name: "Feb",
    "Active User": 90,
  },
  {
    name: "Mar",
    "Active User": 20,
  },
  {
    name: "Apr",
    "Active User": 85,
  },
  {
    name: "May",
    "Active User": 10,
  },
  {
    name: "Jun",
    "Active User": 175,
  },
  {
    name: "Jul",
    "Active User": 225,
  },
  {
    name: "Aug",
    "Active User": 30,
  },
  {
    name: "Sept",
    "Active User": 150,
  },
  {
    name: "Oct",
    "Active User": 70,
  },
  {
    name: "Nov",
    "Active User": 300,
  },
  {
    name: "Dec",
    "Active User": 500,
  },
];

export const transColumns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.getValue(params.id, "firstName") || ""} ${params.getValue(params.id, "lastName") || ""}`,
  },
];

export const transRows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 11, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 12, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 13, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 14, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 15, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 16, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 17, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 18, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
