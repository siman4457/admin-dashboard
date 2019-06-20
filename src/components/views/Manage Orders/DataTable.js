import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from "material-table";
import Details from './Details'
import OrderSummary from './OrderSummary';

const styles = {
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    // container: {
    //     backgroundColor: 'black'
    // },
    card: {
        minWidth: 1500,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
  };

//   const isComplete = (status) => {
//       if(status === "Complete"){

//       }
//   }

const TableEntry = (props) => {
    const { classes } = props;
    return (
        <div>
            <Container maxWidth="75%">
            <MaterialTable
                columns={[
                    { title: "Invoice No.", field: "invoice" },
                    { title: "Date", field: "date", type: "date" },
                    { title: "Sold To", field: "soldTo" },
                    { title: "Status", field: "status" },
                    { title: "Balance", field: "balance", type: "money" },
                    { title: "Total", field: "total", type: "money" },
                ]}
                data={[
                    { invoice: "123456", date: "2/01/17", soldTo: "Armando Chavez (Baylor Plano) - Pickup", status: 'Pending', balance: "$123.00", total: "$123.00" },
                    { invoice: "e117-1", date: "2/01/17", soldTo: "Siman Shrestha (Baylor Richardson) - Pickup", status: 'Complete', balance: "$123.00", total: "$123.00" },
                    { invoice: "e108-1", date: "12/31/19", soldTo: "Jim Carrey (Baylor Plano) - Pickup", status: 'Pending', balance: "$123.00", total: "$123.00" },
                    { invoice: "e108-1", date: "12/31/19", soldTo: "Matthew Mcconaughey (Baylor Austin) - Pickup", status: 'Pending', balance: "$123.00", total: "$123.00" },
                    { invoice: "e108-1", date: "12/31/19", soldTo: "Jennifer Aniston (Baylor Frisco) - Pickup", status: 'Pending', balance: "$123.00", total: "$123.00" },
                    { invoice: "e108-1", date: "12/31/19", soldTo: "Tom Segura (Baylor Dallas) - Pickup", status: 'Pending', balance: "$123.00", total: "$123.00" }
                ]}
                title="Orders"
                detailPanel={rowData => {
                    return (
                      <OrderSummary/>
                    )
                  }}
                  onRowClick={(event, rowData, togglePanel) => togglePanel()}
                /> 
            </Container>
            
        </div>

        )
    }
    
    export default withStyles(styles)(TableEntry)
    