import React from 'react';

import SingleLineDataPreview from "./SingleLineDataPreview";
import ExplodedData from "./ExplodedData";

import styles from './ListItem.scss';

export default class ListItem extends React.Component{

  render() {

    let classes = [styles.default];

    if (this.props.selected) {

      classes.push(styles.selected);

    }

    return <div className={classes.join(' ')}>
      <h3>7/23 12:32PM (28min) - Schennectidtydyddyy, NY</h3>
      <div className={styles.data}>
        {!this.props.selected && <SingleLineDataPreview/>}
        {this.props.selected && <ExplodedData/>}
      </div>
    </div>;

  }

}