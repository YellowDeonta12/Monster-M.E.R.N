import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function CreateMonster() {
  const classes = useStyles();

  const [monster, setMonster] = useState({

    monsterNo: 0,
    monsterName: '',
    variant: ''
  });

  const createMonster = () => {
    axios.post('http://localhost:5000/monsters', monster).then( () => {
        window.location.reload(false);
    })
  }

  return (
    <>
    <h2>Create Monster</h2>
    
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Monster No." variant="outlined" value={monster.monsterNo} onChange={(event) => 
       setMonster({ ...monster, monsterNo: event.target.value})
        }/>
      <TextField id="outlined-basic" label="Monster Name" variant="outlined" value={monster.monsterName} onChange={(event) => 
       setMonster({ ...monster, monsterName: event.target.value})
        }/>
      <TextField id="outlined-basic" label="Variant" variant="outlined" value={monster.variant} onChange={(event) => 
        setMonster({ ...monster, variant: event.target.value})
        }/>
      <Button variant="contained" color="primary" onClick={createMonster}>
        Create
      </Button>

    </form>
    </>
  );
}
