import React from 'react';
import Details from './components/Details/Details'
import Main from './components/Main/Main'

import {CssBaseline, Grid } from '@material-ui/core';
import { PushToTalkButton,PushToTalkButtonContainer,ErrorPanel} from '@speechly/react-ui';

import useStyles from './styles'

const App = () => {
    const classes = useStyles()
  return(
      <>
        <CssBaseline/>
        <Grid container className={classes.grid}  spacing={0} alignItems='center' justifyContent='center' style={{height:'100vh'}}>
            <Grid item xs={12} sm={4}  md={4}>
                <Details title='Income'/>
            </Grid>
            <Grid item xs={12} sm={3} md={3} >
               <Main/>
            </Grid>
            <Grid item xs={12} sm={4}  md={4}>
                <Details  title='Expense'/>
            </Grid>
           
        </Grid>
        <PushToTalkButtonContainer>
                <PushToTalkButton/>
                <ErrorPanel/>
        </PushToTalkButtonContainer>
      </>
  );
};

export default App;
