
/**
 * 歌单相关内容
 */
import songInfoAction from './song-info-action';
import * as type from './song-info-type';
const songInfo = {
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
    actions:songInfoAction,
    getters: {
        headerTitle(state,getters,rootState) {
            return rootState.headerTitle;
        }
    }
}


export default songInfo;