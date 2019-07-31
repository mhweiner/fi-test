import React from 'react';

import styles from './ExplodedData.scss';

export default class ExplodedData extends React.Component{

  render() {

    let paceInSeconds = Math.round(this.props.pace);
    let paceMin = Math.round(paceInSeconds / 60) + '';
    let paceSec = paceInSeconds % 60 + '';

    if (paceSec < 10) paceSec = `${paceSec}0`;

    return <div className={styles.default}>
      <div>
        <h4>Distance</h4>
        <i className='fas fa-map-pin'/>{Math.round(this.props.distance * 10)/10}mi
      </div>
      <div>
        <h4>Pace (min/mi)</h4>
        <i className='fas fa-clock'/>{paceMin}:{paceSec}
      </div>
      <div>
        <h4>Vertical Climb</h4>
        <i className='fas fa-ruler-vertical'/>{Math.round(this.props.altitudeClimbed)}ft
      </div>
    </div>;

  }

}