import http from '../http/index';
import api from '../http/api';
import server from '../http/server';
import * as type from './type';

const actions = {
    /**
     * 播放器播放歌曲所需URL,歌名
     * @param {*发送到mutation} context 
     * @param {*单曲的ID} id 
     */
    async getSongsData(context,id) { 
        //单曲URL
        // console.log('*********actions',id);
        let res = await server.getMusicUrl(id).toPromise();
        //单曲详情
        let details = await server.getMusicDetail(id).toPromise();
        // console.log('***details**',details);

        let obj = {
            id:id,
            url:res.data[0].url,
            details:details.songs
        }
        context.commit(type.GETSONGSDATA,obj);
    },
    /**
     * 播放器状态修改 => 播放，暂停
     * @param {*} context 
     * @param {*} val 
     */
    playStatus(context,val) {
        context.commit(type.PLAYSTATUS,val);
    }
}

export default actions;