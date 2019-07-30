import React from 'react';

import {getBoundsOfCoordList} from '../utils/geography';

import styles from './Map.scss';

export default class Map extends React.Component {

  ref = React.createRef();

  componentDidMount() {

    mapboxgl.accessToken = 'pk.eyJ1IjoibWh3ZWluZXIyMzQiLCJhIjoiY2p5cTVxeTE5MWplZDNtbzIxM2Q2aXE2MyJ9.CtWq_xUhigte_fsKxBPrnQ';

    var map = new mapboxgl.Map({
      container: this.ref.current,
      style: 'mapbox://styles/mapbox/streets-v11'
    });

    map.on('load', () => {

      //add route path
      map.addLayer({
        "id": "route",
        "type": "line",
        "source": {
          "type": "geojson",
          "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "LineString",
              "coordinates": this.props.route
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
      let bounds = getBoundsOfCoordList(this.props.route);
      let margin = 0.001;
      let boundsArray = [
        [bounds.minLon - margin, bounds.minLat- margin],
        [bounds.maxLon + margin, bounds.maxLat + margin]
      ];

      map.fitBounds(boundsArray);

      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl());


    });

  }

  render() {

    return <div className={styles.default} ref={this.ref}/>;

  }

}