import React from 'react';

import styles from './Header.scss';

export default class Header extends React.Component{

  render() {

    return <div className={styles.default}>
      <img src='/static/images/fi.png' className={styles.logo}/>
      <h2>Walks</h2>
    </div>;

  }

}