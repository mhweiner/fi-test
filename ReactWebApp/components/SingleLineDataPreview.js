import React from 'react';

import styles from './SingleLineDataPreview.scss';

export default class SingleLineDataPreview extends React.Component{

  render() {

    return <div className={styles.default}>
      <div>
        <i className='fas fa-map-pin'/>4.3mi
      </div>
      <div>
        <i className='fas fa-clock'/>18:43min/mi
      </div>
      <div>
        <i className='fas fa-ruler-vertical'/>87ft
      </div>
      <div>
        <i className='fas fa-thermometer-three-quarters'/>54&deg;F
      </div>
    </div>;

  }

}