import { all } from 'redux-saga/effects';
import watchBubbleListSaga from './bubbleList';

export default function* rootSaga() {
    yield all([
        watchBubbleListSaga(),
    ]);
}