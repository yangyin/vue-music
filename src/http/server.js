import http from '../http';
import api from '../http/api';


let server = {
    /**
     * 获取单曲URL
     */
    getMusicUrl(id) {
        return http.get(api['musicUrl'],{id:id});
    },
    getMusicDetail(id) {
        return http.get(api['songDetail'],{ids:id});
    }
}
export default server;