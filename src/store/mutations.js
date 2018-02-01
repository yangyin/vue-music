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
        console.log(obj)
        if(obj.mode == 'mode') {
            let mode = state.audioControls.mode;
            let loop = state.audioControls.loop;
            if(mode == 1) {
                mode =2;
                loop = false;
            } else if(mode == 2) {
                mode =0;
                loop = true;
            } else {
                mode =1;
                loop = false;
            }
            state.audioControls['mode'] = mode;
            state.audioControls['loop'] = loop;
        } else {
            state.audioControls[obj.mode] = obj.val;
            
        }
        
    },
    [type.SETCURRENTTIME](state,val) {
        console.log('******',val)
        state.audioControls.setCurrentTime = val;
    }
}

export default mutations;