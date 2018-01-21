import * as type from './audition-type.js';
const actions = {
    getSongsData(context,val) { //单曲URL
        console.log('*********actions',val);
        context.commit(type.GETSONGSDATA,val)
    },
}

export default actions;