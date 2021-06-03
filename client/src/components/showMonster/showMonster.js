import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles({
  table: {
    minWidth: 600,
  },
});


export default function ShowMonster() {
  const classes = useStyles();

    const [monstersList, setMonsterList] = useState([])

    const deleteMonster = (id) => {
      axios.delete(`http://localhost:5000/monsters/${id}`).then ( () => {
        window.location.reload(false);
      })
    }


    useEffect(() => {
        axios.get('http://localhost:5000/monsters').then( (allMonsters) => {
            setMonsterList(allMonsters.data);
        } )

    }, [])


  return (
    <>
    <h2>All Monsters</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Monster Number</TableCell>
            <TableCell align="right">Variant</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {monstersList.map((monster, key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {monster.monsterName}
              </TableCell>
              <TableCell align="right">{monster.monsterNo}</TableCell>
              <TableCell align="right">{monster.variant}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete" className={classes.margin} onClick={() => deleteMonster(monster._id)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
