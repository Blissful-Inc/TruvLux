import React from 'react';
import {makeStyles} from '@material-ui/styles';
import MapClient from './MapClient';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  toolbar: {
    position: 'absolute',
    backgroundColor: 'red',
    height: '25px',
  },
  sidebar: {

  },
  map: {
    position: 'absolute',
  },
  block: {

  },

}));


/**
 * Map Page design component
 * @component MapPage
 * @return {Component}
 */
function MapPage() {
  const classes = useStyles();


  return (
    <React.Fragment className={classes.container}>
      <Header />
      <MapClient mapSizeWidth={300} mapSizeHeight={200}
        className={classes.map} />
    </React.Fragment>
  );
}

export default MapPage;
