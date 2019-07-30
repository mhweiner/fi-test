import React from 'react';

import ListItem from "./ListItem";

import styles from './List.scss';

export default class List extends React.Component{

  render() {

    return <div className={styles.default}>
      {this.props.walks.map((walk, i) => {

        return <ListItem
          key={i.toString()}
          onSelect={this.props.onSelect}
        />

      })}
    </div>;

  }

}