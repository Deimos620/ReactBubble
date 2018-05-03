import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styled from 'styled-components';
import { isEmpty } from 'lodash';
import { 
    TextField,
    RaisedButton,
    CircularProgress,
} from 'material-ui';

import bubbleList, { loadBubbleData } from '../../reducer/bubbleList';
import * as Utils from '../../utils/util';
import PageWrapper from '../../components/PageWrapper';
import * as IconRegistry from '../../asssets/IconRegistry';
import SourcePanel from '../../components/SourcePanel';
import CirclePackingChart from '../../components/BubbleChart';
import BottomBar from '../../components/BottomBar';
//import QUARTILE_RANK_NUMBER from '../../config/config';
//import API_URL from '../../config/config';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: cal(100vh - 100px);
`

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Mock Data for Graph */
var data = {
    "name": "",
    "children": [
        { "name": "scarce", "size": 980 },
        { "name": "primitive", "size": 2456 },
        { "name": "cocoa", "size": 411 },
        { "name": "flavour", "size": 2463 },
        { "name": "typical", "size": 3504 },
        { "name": "essential", "size": 1896 },
        { "name": "ingredient", "size": 2202 },
        { "name": "vis",
            "children": [{ "name": "organic", "size": 3402 },
                { "name": "native", "size": 3819 },
                { "name": "blend", "size": 2190 },
                { "name": "chelicate", "size": 816 },
                { "name": "extraction", "size": 314 },
                { "name": "Malt, Raw", "size": 8456,
                    "children": [
                        {"name": "natural", "size": 532},
                        {"name": "raw", "size": 982},
                        {"name": "pure", "size": 237},
                        {"name": "rustic", "size": 415},
                        {"name": "unprocessed", "size": 232},
                        {"name": "oil", "size": 110},
                    ]
                },
                { "name": "jaggery", "size": 1654 }
            ]
        }
    ]
};

class BubbleChart extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            dimWords: '',
            scoreDimWords: '',
            modelId: '001',
        }
    }

    _onChangeDimWords(words) {
        this.setState({
            dimWords: words
        })
    }

    _onChangeScoreDimWords(words) {
        this.setState({
            scoreDimWords: words
        })
    }

    _onChangeModelId(modelId) {
        this.setState({
            modelId: modelId
        })
    }

    _submit() {
        var data = this.state;
        this.props.loadBubbleData({
            dimWords: data.dimWords.split(" "),
            scoreDimWords: data.scoreDimWords.split(" "),
            modelId: data.modelId
        });
    }

    _sortData(bubbleData) {
        var data = [];
        for (var i = 0; i < 4 ; i ++) {
            data[i] = []
        }

        if (bubbleData.length) {
            bubbleData.forEach(function(item) {
                data[item.quartile_rank].push(item.model_rank);
                console.log(item);
            });
        }
    }

    render() {
        const { isLoading, bubbleData } = this.props;

        if(bubbleData.length) {
            data = this._sortData(bubbleData);
        }

        return (
            <PageWrapper>
                <SourcePanel
                    onChangeDimWords={this._onChangeDimWords.bind(this)}
                    onChangeScoreDimWords={this._onChangeScoreDimWords.bind(this)}
                    onChangeModelId={this._onChangeModelId.bind(this)}
                    submit={this._submit.bind(this)} />
                {isLoading &&
                    <Container>
                        CircularProgress
                        <CircularProgress />
                    </Container>}
                {!isLoading && <div style={{width: '100%'}}>
                    <div style={{padding: '20px', display: 'inline-block', fontWeight:'800', fontSize:'40px', color: 'red'}}>
                        <p>Taste</p>
                        <p>Extension on:</p>
                        <p style={{fontSize: '25px'}}>Malt + raw</p>
                    </div>
                    <CirclePackingChart data={data}/>
                </div>}
            <BottomBar />
            </PageWrapper>
        )
    }
}

const mapDispatchToProps = {
    push,
    loadBubbleData
};

const mapStateToProps = (state) => ({
    isLoading: state.bubbleList.isLoading,
    bubbleData: state.bubbleList.bubbleData
});

export default connect(mapStateToProps, mapDispatchToProps)(BubbleChart);
