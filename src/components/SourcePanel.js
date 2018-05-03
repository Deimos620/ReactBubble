import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, SelectField, MenuItem, IconButton, IconMenu } from 'material-ui';
import styled from 'styled-components';

import * as IconRegistry from '../asssets/IconRegistry';

const Panel = styled.div`
    position: relative;
    width: 200px;
    padding-left: 30px;
    height: calc(100vh - 110px);
    background-color: rgb(222, 235, 255);
    padding-top: 10px;
    padding-right: 20px;
`;

const Header = styled.h3`
    color: #454545;
    font-size: 20px;
    font-family: 'Arial';
`;

const styles = {
    floatingLabelStyle: {
        fontFamily: 'arial', 
        fontSize: 18, 
        textAlign: 'left', 
        color: '#0747A6', 
        fontWeight: 'bold' 
    },
    hintLabelStyle: {
        fontSize: 14,
        color: '#d3d3d3',
        fontFamily: 'arial', 
    },
    iconStyle: {
        marginTop: -10, 
        marginLeft: -8,
        fill: 'rgba(0, 0, 0, 0.3)',
        width: 24, 
        height: 24
    }
};

export default class SourcePanel extends Component {
    static propTypes = {
        onChangeDimWords: PropTypes.func,
        onChangeScoreDimWords: PropTypes.func,
        onChangeModelId: PropTypes.func,
        submit: PropTypes.func
    };
    
    constructor(props) {
        super(props)
    }

    render() {
        const { onChangeDimWords, onChangeScoreDimWords, onChangeModelId, submit } = this.props;

        return (
            <Panel>
                <Header>Request</Header>
                <TextField hintText={'Dim Words'} multiLine={true} hintStyle={styles.hintLabelStyle} floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText={'Dim Words'} floatingLabelFixed={true} style={{ width: 200 }} onChange={(e) => {onChangeDimWords(e.target.value)}} />
                <TextField hintText={'Score Dim Words'} multiLine={true} hintStyle={styles.hintLabelStyle} floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText={'Score Dim Words'} floatingLabelFixed={true} style={{ width: 200 }} onChange={(e) => {onChangeScoreDimWords(e.target.value)}} />
                <TextField hintText={'Model ID'} hintStyle={styles.hintLabelStyle} floatingLabelStyle={styles.floatingLabelStyle} floatingLabelText={'Model ID'} floatingLabelFixed={true} style={{ width: 200 }} onChange={(e) => {onChangeModelId(e.target.value)}} />
                <IconButton style={{ width: '50px', height: '30px', border: '1px solid rgba(7, 71, 166, 0.7)', padding: '0', borderRadius: '15px' }} onClick={() => {submit()}}>
                    <IconRegistry.SearchIcon />
                </IconButton>
            </Panel>
        )
    }
}