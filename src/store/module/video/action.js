import * as type from './type.js';

import server from '../../../http/server';
const action = {
    async getMv(context,id) { 
        //单曲URL
        // console.log('*********actions',id);
        let res = await server.getMusicUrl(id).toPromise();

        let obj = {
            id:id,
            url:res.data[0].url,
            details:details.songs
        }
        context.commit(type.GETMV,obj);
    },
}

export default action;