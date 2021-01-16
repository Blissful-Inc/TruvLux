import React from 'react';
import Header from './Header';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
  container: {
    textAlign: 'center',
  },
  outer: {
    padding: '60px',
  },
  block: {
    display: 'flex',
    flexDirection: 'column',
  },
  inner: {
    flex: 1,
    border: '2px solid black',
    margin: '0 auto',
    background: 'white',

  },
  banner: {
    flex: 1,
    textAlign: 'center',
    padding: '30px',
  },
});

const Welcome = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.outer}>
        <div className={styles.block}>
          <div className={styles.inner}>
            <h1 className={styles.banner}> Home Page ! </h1>
            <p>Where the fun begins</p>
          </div>
          <div className={styles.inner}>
            <h1 className={styles.banner}> Home Page ! </h1>
            <p>Where the fun begins</p>
          </div>
          <div className={styles.inner}>
            <h1 className={styles.banner}> Home Page ! </h1>
            <p>Where the fun begins</p>
          </div>
        </div>
      </div>
      <div className={styles.outer}>
        <div className={styles.block}>
          <div className={styles.inner}>
            <h1 className={styles.banner}> Home Page ! </h1>
            <p>Where the fun begins</p>
          </div>
          <div className={styles.inner}>
            <h1 className={styles.banner}> Home Page ! </h1>
            <p>Where the fun begins</p>
          </div>
          <div className={styles.inner}>
            <h1 className={styles.banner}> Home Page ! </h1>
            <p>Where the fun begins</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
