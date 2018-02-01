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
     */
    playStatus(context,val) {
        context.commit(type.PLAYSTATUS,val);
    },
    /**
     * 底部播放栏目中  分组中 数组
     */
    footerList(context,val) {
        if(val.id) {
            val.msg.forEach(item => {
                if(item.id == val.id) {
                   item.isChecked = true;
               } else {
                   item.isChecked = false;
               }
           })
        }
        context.commit(type.FOOTERLIST,val.msg);
    },
    /**
     * 搜索单曲中，点击单曲触发事件
     */
    async getSingleAction(context,id) {
        //单曲URL
        let res = await server.getMusicUrl(id).toPromise();
        //单曲详情
        let details = await server.getMusicDetail(id).toPromise();
        // console.log('***details**',details);
        let obj = {
            id:id,
            url:res.data[0].url,
            details:details.songs
        }
        // 更改 当前播放器播放的歌曲
        context.commit(type.GETSONGSDATA,obj);

        //改变底部播放列表数据
        // console.log

    },
    /**
     * 控制播放器的详情页 是否显示
     */
    updateAudioPageStatus(context,val) {
        context.commit(type.AUDIOPAGESTATUS,val);
    },
    updateAudioControls(context,obj) {
        context.commit(type.AUDIOCONTROLS,obj);
    },
    setCurrentTimes(context,val) {
        content.commit(type.SETCURRENTTIME,val);
    }
    

}

export default actions;