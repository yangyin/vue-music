<template>
  <div>
    <scroller :on-refresh="refresh" :on-infinite="infinite">
        <ul class="list">
            <li v-for="item of items" :key="item.id">
                <div>
                    <p>{{item.name}}</p>
                    <label v-for="(obj,index) of item.artists" :key="obj.id">
                        <span>{{obj.name | re_space}}</span>
                        <i v-if="index < item.artists.length-1">/</i>
                    </label>
                </div>
                <div>...</div>
            </li>
        </ul>
    </scroller>     
  </div>
</template>

<script>
import http from '../../http';
import api from '../../http/api';


export default {
    data() {
        return {
            total:0,//总数
            items:[],//列表数组
        }
    },
    subscriptions() {
        let query = this.$route.query;
        query.type =1;
        /**
         * 搜索单曲列表
         */
        http.get(api['search'],query)
        .map(data =>data.result)
        .subscribe(data =>{
            console.log(data)
            this.total = data.songCount;
            this.items = data.songs;
        })
    },
    methods: {
        refresh (done) {
            //刷新回调
        },

        infinite (done) {
            //无限加载回调
        }        
    },
    filters: {
        re_space:(val) =>{
            return val.replace(/ /,'-');
        }
    }
}
</script>

<style lang="scss" scoped>
.list {
    li {
        display: flex;justify-content: space-between;padding: 3%;
        div:first-child {
            width: 80%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
        }
        
    }
}
</style>

