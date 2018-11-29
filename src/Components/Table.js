import { React, Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "unistore/react";
import { actions } from "../store";

class SimpleTable extends React.Component {
    render() {
        const tableData = this.props.tableData;
        return(
        <div>
            <h1>lala</h1>
        </div>
        )
        // return (
        //     <div>
        //         <Paper >
        //             <Table >
        //                 <TableHead>
        //                     <TableRow>
        //                         <TableCell>No</TableCell>
        //                         <TableCell numeric>NIS</TableCell>
        //                         <TableCell numeric>NAMA</TableCell>
        //                         <TableCell numeric>Nilai</TableCell>
        //                     </TableRow>
        //                 </TableHead>
        //                 <TableBody>
        //                     {tableData.map((item, key) => {
        //                         return (
        //                             <TableRow key={item.id}>
        //                                 <TableCell component="th" scope="row">
        //                                     {item.no}
        //                                 </TableCell>
        //                                 <TableCell numeric>{item.nama}</TableCell>
        //                                 <TableCell numeric>{item.nis}</TableCell>
        //                                 <TableCell numeric>{item.nilai}</TableCell>
        //                             </TableRow>
        //                         );
        //                     })}
        //                 </TableBody>
        //             </Table>
        //         </Paper>
        //     </div>
        // )
    }
}

export default connect(
    "tableData",
    actions
)(SimpleTable);

