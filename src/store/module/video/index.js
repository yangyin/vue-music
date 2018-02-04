import action from './action.js';
import mutation from './mutation.js';
import state from './state.js';


const video = {
    namespaced: true,
    state:state,
    mutations:mutation,
    actions:action,
}


export default video;