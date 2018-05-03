import React, { Component } from 'react';
import { AppBar, IconButton, DropDownMenu, MenuItem } from 'material-ui';

import * as IconRegistry from '../asssets/IconRegistry';

const styles = {
    title: {
        cursor: 'pointer',
    },
    iconStyle: {
        marginTop: -10,
        marginLeft: -8,
        fill: 'white',
        width: 40,
        height: 40,
        backgroundColor: '#0747A6',
    }
};

export default class Navigation extends Component {
    render() {
        return (
            <div style={{ flex: '0 1 auto', height: 50, width: '100%', zIndex: 1000 }}>
                <AppBar
                    title={'Bubble Chart'}
                    titleStyle={{ textAlign: 'left', color: 'white', fontSize: 24, fontFamily: 'arial' }}
                    iconElementLeft={
                        <IconButton iconStyle={styles.iconStyle}>
                            <IconRegistry.MenuIcon />
                        </IconButton> }
                    iconElementRight={ <div style={{marginTop: -17}}></div> }
                    iconStyleRight={{marginTop: '-4pa'}}
                    style={{
                        height: 50,
                        background: '#0747A6',
                        alignItems: 'center',
                    }}
                />
            </div>
        )
    }
}