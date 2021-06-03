import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Monster from './components/showMonster/showMonster';
import Create from './components/createMonster/createMonster';
import './App.css';
import useStyles from './styles';


function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        
        <AppBar className={classes.appBar} position="static" color="inherit">

          <Typography className={classes.heading} variant="h2" align="center">
              Monster Hunter: Monster Search Engine
          </Typography>
        
        </AppBar>

        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Monster />
                </AppBar>
              </Grid>
              <Grid item xs={12} sm={4}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Create />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>  
    </div>
  );
}

export default App;
