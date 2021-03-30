import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



const OrderTable = (props) =>{
  const classes = useStyles();
console.log(props)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ORDER ID</TableCell>
            <TableCell align="center">CUSTOMER</TableCell>
            <TableCell align="center">ADDED BY</TableCell>
            <TableCell align="center">REFERENCE</TableCell>
            <TableCell align="center">BRANCH</TableCell>
            <TableCell align="center">SERVICE</TableCell>
            <TableCell align="center">STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.orders.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center" component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.customer.name}</TableCell>
              <TableCell align="center">{row.addedby}</TableCell>
              <TableCell align="center">{row.reference}</TableCell>
              <TableCell align="center">{row.branch}</TableCell>
              <TableCell align="center">{row.service}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default OrderTable