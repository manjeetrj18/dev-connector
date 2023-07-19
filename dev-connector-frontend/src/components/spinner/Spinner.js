import React, { Fragment } from 'react';
import spinner from './spinner.gif';
import styles from './Spinner.module.css';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      className={styles.spinner}
      alt="Loading..."
    />
  </Fragment>
);

export default Spinner;