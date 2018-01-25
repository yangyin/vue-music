import * as type from './type';

const mutations = {
    [type.GETSONGSDATA](state,val) {
        
        state.audioPlay.id = val.id;
        state.audioPlay.url = val.url;
        state.audioPlay.details = val.details;
        // console.log('module mutations ****',val)
        state.isPlay = true;
    },
    [type.PLAYSTATUS](state,val) {
        
        state.isPlay = val;
    },
    [type.FOOTERLIST](state,val) {
        // console.log('mutations footer list****',val);
        state.footerList = [];
        state.footerList = val;
    },
    [type.AUDIOPAGESTATUS](state,val) {
        state.audioPageStatus = val;
    },
    [type.AUDIOCONTROLS](state,obj) {
        // console.log(obj)
        state.audioControls[obj.mode] = obj.val;
    }
}

export default mutations;