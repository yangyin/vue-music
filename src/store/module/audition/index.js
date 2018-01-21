/**
 * 试听相关内容
 */ 

import auditionAction from './audition-action.js';
import * as type from './audition-type.js';
const auditionInfo = {
    namespaced: true,
    state:{
        songsData:''

    },
    mutations: {
        [type.GETSONGSDATA](state,val) {
            console.log('module mutations ****',val)
            state.songsData = val;
        }
    },
    actions:auditionAction,
    getters: {
        headerTitle(state,getters,rootState) {
            return rootState.headerTitle;
        }
    }
}


export default auditionInfo;