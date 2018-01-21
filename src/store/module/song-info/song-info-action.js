import * as type from './song-info-type';
const actions = {
    getSongsData(context,val) { //单曲URL
        console.log('*********actions',val);
        context.commit(type.GETSONGSDATA,val)
    },
}

export default actions;