import React from 'react';

import SingleLineDataPreview from "./SingleLineDataPreview";
import ExplodedData from "./ExplodedData";
import {parse, format, differenceInMinutes} from 'date-fns';

import styles from './WalkListItem.scss';

export default class WalkListItem extends React.Component{

  render() {

    let classes = [styles.default];

    if (this.props.selected) {

      classes.push(styles.selected);

    }

    let formattedStartDate = format(this.props.startDate, 'MM/DD/YY h:mm:A');
    let duration = differenceInMinutes(this.props.endDate, this.props.startDate);

    return <div className={classes.join(' ')} onClick={this.props.onSelect}>
      <h3>{formattedStartDate} ({duration}min)</h3>
      <div className={styles.data}>
        {!this.props.selected && <SingleLineDataPreview {...this.props}/>}
        {this.props.selected && <ExplodedData {...this.props}/>}
      </div>
    </div>;

  }

}