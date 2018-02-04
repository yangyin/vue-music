import http from '../http';
import api from '../http/api';


let server = {
    /**
     * 获取单曲URL
     */
    getMusicUrl(id) {
        return http.get(api['musicUrl'],{id:id});
    },
    /**
     * 获取歌曲详情
     * @param {*} id 
     */
    getMusicDetail(id) {
        return http.get(api['songDetail'],{ids:id});
    },
    getLyirc(id) {
        return http.get(api['lyric'],{id:id});
    },
    getMv(id) {
        // return http.get(api[])
    }
}
export default server;