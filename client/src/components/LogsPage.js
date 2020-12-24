import React from 'react';
import Header from './Header';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    textAlign: 'center',
  },
  inner: {
    display: 'flex',
    padding: '40px',
  },
  block1: {
    flex: 1,
    padding: '30px',
    border: '2px solid black',
    width: '80%',
    height: 'auto',
    margin: '0 auto',
  },
  block2: {
    flex: 2,
    padding: '30px',
    border: '2px solid black',
    width: '80%',
    height: 'auto',
    margin: '0 auto',
  },
  banner: {
    textAlign: 'center',
  },
});

/**
 * Logs Page component
 * @return{void}
 */
function LogsPage() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.inner}>
        <div className={styles.block1}>
          <h1 className={styles.banner}> Logs Page ! </h1>
          <p>Logging here .. </p>
        </div>
        <div className={styles.block2}>
          <h1 className={styles.banner}> Logs Page ! </h1>
          <p>Logging here .. </p>
        </div>
      </div>
    </div>
  );
}

export default LogsPage;
