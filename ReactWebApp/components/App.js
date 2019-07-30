import React from 'react';

import {GET} from '../utils/rp';

import Header from "./Header";
import Map from "./Map";
import List from "./List";

import styles from './App.scss';

export default class App extends React.Component{

  state = {
    route: [],
    walks: [],
    selected: 0
  };

  componentDidMount() {

    GET('/api/walks').then(result => result.json()).then(resp => console.log(resp));

  }

  render() {

    let map = <Map route={this.state.route}/>;
    let list = <List
      selected={this.state.selected}
      onSelect={i => this.setState({selected: i})}
    />;

    return <div className={styles.default}>
      <Header/>
      <div className={styles.map}>{map}</div>
      <div className={styles.list}>{list}</div>
    </div>;

  }

}