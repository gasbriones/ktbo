import Actions from '../actions/actions';

const initialState = {
    data: []
};

const gifsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_GIFS: {
            return {
                ...state,
                data: action.payload,
            }
        }

        default:
            break;
    }
    return state;
};

export default gifsReducer;