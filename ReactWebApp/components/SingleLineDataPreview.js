import React from 'react';

import styles from './SingleLineDataPreview.scss';

export default class SingleLineDataPreview extends React.Component{

  render() {

    let paceInSeconds = Math.round(this.props.pace);
    let paceMin = Math.round(paceInSeconds / 60) + '';
    let paceSec = paceInSeconds % 60 + '';

    if (paceSec < 10) paceSec = `${paceSec}0`;

    return <div className={styles.default}>
      <div>
        <i className='fas fa-map-pin'/>{Math.round(this.props.distance * 10)/10}mi
      </div>
      <div>
        <i className='fas fa-clock'/>{paceMin}:{paceSec}min/mi
      </div>
      <div>
        <i className='fas fa-ruler-vertical'/>{Math.round(this.props.altitudeClimbed)}ft
      </div>
    </div>;

  }

}