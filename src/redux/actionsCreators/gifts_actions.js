import Actions from '../actions/actions'

const getGIFS = (data) => ({
    type: Actions.GET_GIFS,
    payload:data
});


export default {
    getGIFS
}


