import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InsertLeaveButton from '../insert_leave/InsertLeaveButton';
import axios from 'axios';
import ViewCalenderButton from '../calender/ViewCalendarButton';
import DeleteLeaveButton from '../delete_leave/DeleteLeaveButton';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    backgroundColor: "#404040",
    color: theme.palette.common.white,
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, phone, position, calendar) {
//   return { name, phone, position, calendar };
// }

// // fetch data from db
// const rows = [
//   createData('Anushka Pandey', 9557522075, 'Intern', <InsertLeaveButton />),
//   createData('Haneyah Seemein', 8950987564, 'Intern', <InsertLeaveButton />),
//   createData('Kishorekumar R', 9067789056, 'Intern', <InsertLeaveButton />),
//   createData('Prajay V K', 8677567896, 'Intern', <InsertLeaveButton />),
//   createData('Kapilash K', 7688956789, 'Intern', <InsertLeaveButton />),
// ];

// data.array.forEach(element => {
//     createData(element.name, element.id, <InsertLeaveButton />)
// });









export default function CustomizedTables() {


    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await axios.get("");
                setData(response.data)
            } catch (err) {

            }
            setLoading(false);
        }

        fetchData();
    }, [data]);

    function createData(id, name, phone, position, calendar) {
        return { id, name, phone, position, calendar };
      }
      
      // fetch data from db
      const rows = [
        createData(1, 'Anushka Pandey', 9557522075, 'Intern', <ViewCalenderButton />),
        createData(2, 'Haneyah Seemein', 8950987564, 'Intern', <ViewCalenderButton />),
        createData(3, 'Kishorekumar R', 9067789056, 'Intern', <ViewCalenderButton />),
        createData(4, 'Prajay V K', 8677567896, 'Intern', <ViewCalenderButton />),
        createData(5, 'Kapilash K', 7688956789, 'Intern', <ViewCalenderButton />),
        createData(6, 'Yahodhar M', 7634956766, 'Intern', <ViewCalenderButton />),
      ];

    //   const rows = []
      
    //   data.array.forEach(element => {
    //       rows.append(createData(element.name, element.id, <InsertLeaveButton />))
    //   });









  return (
    <div>
    {loading && <div>Loading</div>}
    {!loading &&  (
        <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Employee Id</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
            <StyledTableCell align="right">Job Title</StyledTableCell>
            <StyledTableCell align="right">Personal Calendar</StyledTableCell>
            {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.position}</StyledTableCell>
              <StyledTableCell align="right">{row.calendar}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )}
    </div>
  );
}
