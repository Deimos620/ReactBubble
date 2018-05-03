import { createAction, handleActions } from 'redux-actions';

export const actions = {
    loadBubbleData: 'bubble/LOAD_DATA',
    setLoading: 'bubble/LOADING_DATA',
    unsetLoading: 'bubble/LOADED_DATA',
    setBubbleData: 'bubble/SET_DATA',
};

export const loadBubbleData = createAction(actions.loadBubbleData, data => data);
export const setLoading = createAction(actions.setLoading);
export const unsetLoading = createAction(actions.unsetLoading);
export const setBubbleData = createAction(actions.setBubbleData);

const defaultState = { isLoading: false, bubbleData: [] };

export default handleActions({
    [actions.setLoading]: (state, action) => ({ ...state, isLoading: true }),
    [actions.unsetLoading]: (state, action) => ({ ...state, isLoading: false }),
    [actions.setBubbleData]: (state, action) => ({ ...state, bubbleData: action.payload.bubbleData })
}, defaultState);