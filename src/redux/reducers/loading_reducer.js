import Actions from '../actions/actions'

const initialState = {
    status: false
};

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LOADING: {
            return {...state, status: action.payload}
        }
        default:
            break;
    }
    return state;
};

export default loadingReducer;