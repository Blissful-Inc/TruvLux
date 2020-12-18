import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    background: 'red',
    alignItems: 'center',
  },
});


/**
 * Header Component
 * @return{void}
 */
function Header() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h1>Header</h1>
    </div>
  );
}

export default Header;
