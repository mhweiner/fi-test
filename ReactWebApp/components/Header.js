import React from 'react';

import styles from './Header.scss';

export default class Header extends React.Component{

  render() {

    return <div className={styles.default}>
      <img src='/static/images/fi.png' className={styles.logo}/>
      <h2>Walks <a href='#'>(Jul 2019)<i className='fas fa-caret-down'/></a></h2>
    </div>;

  }

}