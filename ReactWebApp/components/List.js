import React from 'react';

import ListItem from "./ListItem";

import styles from './List.scss';

export default class List extends React.Component{

  render() {

    return <div className={styles.default}>
      <ListItem/>
      <ListItem selected={true}/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
      <ListItem/>
    </div>;

  }

}