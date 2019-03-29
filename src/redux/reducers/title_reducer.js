import Actions from '../actions/actions';

const initialState = {
    title: 'Top Gifs'
};

const titleReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.TITLE: {
            return {
                ...state,
                title: action.payload,
            }
        }

        default:
            break;
    }
    return state;
};

export default titleReducer;