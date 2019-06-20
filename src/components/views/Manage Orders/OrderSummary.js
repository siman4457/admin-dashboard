
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// function OrderSummary() {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default OrderSummary



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  tableHead: {
      backgroundColor: 'grey'
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('P', 4145, 'Lab coat' , 130, 1, 1, 0, '31.00', 0, 'Yes', '31.00'),

];

export default function OrderSummary() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow>
            {/* <TableCell>Name</TableCell> */}
            <TableCell align="right">T</TableCell>
            <TableCell align="right">Item No.</TableCell>
            <TableCell align="right">Item</TableCell>
            <TableCell align="right">V Stock</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Ship</TableCell>
            <TableCell align="right">Ready</TableCell>
            <TableCell align="right">Retail</TableCell>
            <TableCell align="right">Disc</TableCell>
            <TableCell align="right">Tax</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.itemNum}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.t}</TableCell>
              <TableCell align="right">{row.itemNum}</TableCell>
              <TableCell align="right">{row.vStock}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.ship}</TableCell>
              <TableCell align="right">{row.ready}</TableCell>
              <TableCell align="right">{row.retail}</TableCell>
              <TableCell align="right">{row.disc}</TableCell>
              <TableCell align="right">{row.tax}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
