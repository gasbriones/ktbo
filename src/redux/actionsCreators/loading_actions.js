import Actions from "../actions/actions";

const loading = (boolean) => ({
    type: Actions.LOADING,
    payload:boolean
});


export default {
    loading
}