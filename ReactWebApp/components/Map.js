import React from 'react';

import {getBoundsOfCoordList} from '../utils/geography';

import styles from './Map.scss';

export default class Map extends React.Component {

  ref = React.createRef();

  componentDidMount() {

    mapboxgl.accessToken = 'pk.eyJ1IjoibWh3ZWluZXIyMzQiLCJhIjoiY2p5cTVxeTE5MWplZDNtbzIxM2Q2aXE2MyJ9.CtWq_xUhigte_fsKxBPrnQ';

    this.mbgl = new mapboxgl.Map({
      container: this.ref.current,
      style: 'mapbox://styles/mapbox/streets-v11'
    });

    this.mbgl.on('load', () => {

      // Add zoom and rotation controls to the map.
      this.mbgl.addControl(new mapboxgl.NavigationControl());

      // Update map
      if(this.props.route) {

        this.drawRoute(this.props.route);

      }

    });

  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    if (this.props.route) {

      this.drawRoute(this.props.route);

    }

  }

  drawRoute = (route) => {

    //remove existing route
    if (this.mbgl.getLayer('route')) {

      this.mbgl.removeLayer('route');
      this.mbgl.removeSource('route');

    }

    //add route path
    this.mbgl.addLayer({
      "id": "route",
      "type": "line",
      "source": {
        "type": "geojson",
        "data": {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": route
          }
        }
      },
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-color": "#000",
        "line-width": 8
      }
    });

    //fit view to route
    let bounds = getBoundsOfCoordList(route);
    let margin = 0.001;
    let boundsArray = [
      [bounds.minLon - margin, bounds.minLat- margin],
      [bounds.maxLon + margin, bounds.maxLat + margin]
    ];

    this.mbgl.fitBounds(boundsArray);

  };

  render() {

    return <div className={styles.default} ref={this.ref}/>;

  }

}