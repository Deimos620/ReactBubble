/**
 * Created by Calm on 5/2/18.
 */
import React, { Component } from 'react';
import { AppBar, IconButton, DropDownMenu, MenuItem } from 'material-ui';

export default class BottomBar extends Component {
  render() {
    return (
      <div style={{ flex: '0 1 auto', height: 50, width: '100%', zIndex: 1000, backgroundColor: 'red', position: 'fixed', bottom:'0' }}>

      </div>
    )
  }
}

