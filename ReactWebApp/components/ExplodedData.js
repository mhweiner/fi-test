import React from 'react';

import styles from './ExplodedData.scss';

export default class ExplodedData extends React.Component{

  render() {

    return <div className={styles.default}>
      <div>
        <h4>Distance</h4>
        <i className='fas fa-map-pin'/>4.3mi
      </div>
      <div>
        <h4>Pace (min/mi)</h4>
        <i className='fas fa-clock'/>18:43
      </div>
      <div>
        <h4>Vertical Climb</h4>
        <i className='fas fa-ruler-vertical'/>87ft
      </div>
      <div>
        <h4>Temperature</h4>
        <i className='fas fa-thermometer-three-quarters'/>54&deg;F
      </div>
    </div>;

  }

}