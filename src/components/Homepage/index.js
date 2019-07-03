import React, { Component } from 'react'
import Appheader from '../common/AppHeader';
import AppBody from './AppBody';

export default class Homepages extends Component {
  render() {
    return (
      <div>
        <Appheader
          title="Homepages"
        />
        <AppBody />
      </div>
    )
  }
}
