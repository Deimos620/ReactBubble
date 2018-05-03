import { call, put, takeEvery } from 'redux-saga/effects';

import { actions as bubbleActions } from '../bubbleList';
import { getBubbleList } from '../../api/bubbleList';

export function* loadBubbleData(action) {
    console.log('load....');

    const { dimWords, scoreDimWords, modelId } = action.payload;
    
    // Set Loading State
    yield put({ type: bubbleActions.setLoading });

    // Just call api to get bubble data
    const bubbleData = yield call(getBubbleList, dimWords, scoreDimWords, modelId);
    if (!bubbleData.error) {
        yield put({ type: bubbleActions.setBubbleData, payload: bubbleData });
        yield put({ type: bubbleActions.unsetLoading });
    } else {
        // Do something when api call failed
    }
}

export default function* watchBubbleListSaga() {
    yield takeEvery(bubbleActions.loadBubbleData, loadBubbleData);
}
