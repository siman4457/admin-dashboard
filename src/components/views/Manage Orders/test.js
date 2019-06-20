import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
    container: {
        backgroundColor: 'black'
    },
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

const TableEntry = (props) => {
    const { classes } = props;
    return (
        <div>
            <Container maxWidth="75%" className={classes.container}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                        </Typography>

                        <Typography variant="h5" component="h2">
                        </Typography>

                        <Typography className={classes.pos} color="textSecondary">
                        adjective
                        </Typography>

                        <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>

                    </CardContent>
        
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                 </Card>
                <Button className={classes.button}>Higher-order component</Button>
            </Container>
            
        </div>
        







        
        // <div>
        //     <tr class="tr-shadow">
        //         <td>
        //             <label class="au-checkbox">
        //                 <input type="checkbox"></input>
        //                 <span class="au-checkmark"></span>
        //             </label>
        //         </td>
        //         <td>Lori Lynch</td>
        //         <td>
        //             <span class="block-email">lori@example.com</span>
        //         </td>
        //         <td class="desc">Samsung S8 Black</td>
        //         <td>2018-09-27 02:12</td>
        //         <td>
        //             <span class="status--process">Processed</span>
        //         </td>
        //         <td>$679.00</td>
        //         <td>
        //             <div class="table-data-feature">
        //                 <button class="item" data-toggle="tooltip" data-placement="top" title="Send">
        //                     <i class="zmdi zmdi-mail-send"></i>
        //                 </button>
        //                 <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
        //                     <i class="zmdi zmdi-edit"></i>
        //                 </button>
        //                 <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
        //                     <i class="zmdi zmdi-delete"></i>
        //                 </button>
        //                 <button class="item" data-toggle="tooltip" data-placement="top" title="More">
        //                     <i class="zmdi zmdi-more"></i>
        //                 </button>
        //             </div>
        //         </td>
        //     </tr>
        // </div>
    )
}

export default withStyles(styles)(TableEntry)
