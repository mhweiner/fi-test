import React from 'react';

import {getWalks} from '../services/WalksService';

import Header from "./Header";
import Map from "./Map";
import WalkList from "./WalkList";

import styles from './App.scss';

export default class App extends React.Component{

  state = {
    route: null,
    walks: [],
    selected: null
  };

  componentDidMount() {

    getWalks().then(walks => {

      this.setState({
        walks: walks
      });

    });

  }

  componentDidUpdate() {

    if (this.state.walks.length && this.state.selected === null) {

      this.selectWalk(0);

    }

  }

  selectWalk = index => {

    this.setState({
      selected: index,
      route: this.state.walks[index].gpsTrace
    });

  };

  render() {

    let map = <Map route={this.state.route}/>;
    let list = <WalkList
      selected={this.state.selected}
      onSelect={this.selectWalk}
      walks={this.state.walks}
    />;

    return <div className={styles.default}>
      <Header/>
      <div className={styles.map}>{map}</div>
      <div className={styles.list}>{list}</div>
    </div>;

  }

}