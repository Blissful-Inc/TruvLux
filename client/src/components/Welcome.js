import React from 'react';
import Header from './Header';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
  container: {
    textAlign: 'center',
  },
  banner: {
    textAlign: 'center',
    padding: '30px',
  },
});

const Welcome = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.banner}> Home Page ! </h1>
      <p>Where the fun begins</p>
    </div>
  );
};

export default Welcome;
