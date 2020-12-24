import React from 'react';
import {makeStyles} from '@material-ui/styles';
import MapClient from './MapClient';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'inline-flex',
    padding: '40px',
  },
  main: {
    flex: 1,
    border: '1px solid black',
    boxShadow: '0 0 10px #000000',
    width: 'auto',
    height: 'auto',
    margin: '0 auto',
    padding: '30px',
  },
  toolbar: {
    border: '1px solid white',
    // eslint-disable-next-line max-len
    backgroundColor: '#a3c5d6',
    height: '35px',
    width: 'auto',

  },
  map: {
    flex: 1,
    padding: '10px',
  },
  sidebar: {
    flex: 1,
    border: '1px solid black',
    boxShadow: '0 0 10px #000000',
    width: '300px',
    padding: '20px',
  },
  sidebarSettings: {
    backgroundColor: '#bbd1ea',
    padding: '10px',
  },
  mapSettings: {
    flex: 1,
    backgroundColor: 'grey',
    height: '20px',

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
    <React.Fragment>
      <Header />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}>
        <div className={classes.container}>
          <div className={classes.sidebar}>
            <h3>Filter by:</h3>
            <div className={classes.sidebarSettings}>
              <h4>Budget per night:</h4>
              <h4>----</h4>
              <h4>Frequently use:</h4>
              <h4>----</h4>
              <h4>Review score:</h4>
              <h4>----</h4>
            </div>
          </div>
          <div className={classes.main}>
            <div className={classes.toolbar}></div>
            <div className={classes.map}>
              <MapClient mapSizeWidth='1000' mapSizeHeight='500' />
            </div>
            <div className={classes.mapSettings}></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MapPage;
