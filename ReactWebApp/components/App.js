import React from 'react';

import Header from "./Header";
import Map from "./Map";
import List from "./List";

import styles from './App.scss';

export default class App extends React.Component{

  render() {

    return <div className={styles.default}>
      <Header/>
      <div className={styles.map}><Map/></div>
      <div className={styles.list}><List/></div>
    </div>;

  }

}