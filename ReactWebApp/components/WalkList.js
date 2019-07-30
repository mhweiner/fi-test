import React from 'react';

import WalkListItem from "./WalkListItem";

import styles from './WalkList.scss';

export default class WalkList extends React.Component{

  render() {

    return <div className={styles.default}>
      {this.props.walks.map((walk, i) => {

        return <WalkListItem
          key={i.toString()}
          onSelect={() => this.props.onSelect(i)}
          selected={this.props.selected === i}
        />

      })}
    </div>;

  }

}