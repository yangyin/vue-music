<template>
    <scroller :on-infinite="infinite"  :on-refresh="refresh" ref="myscroller">
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
</template>

<script>
import http from '../../http';
import api from '../../http/api';


export default {
    data() {
        return {
            total:0,//总页数
            current_page:0,//当前页
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
            // console.log('****************************')
            // console.log(data)
            this.total = Math.ceil( data.songCount/30 );
            this.items = data.songs;
            this.current_page++;
        })
    },
    methods: {
        refresh (done) {
            //刷新回调
            // console.log(2222222222)
            setTimeout(function() {
                done(true)
            },1000)
        },

        infinite(done) {
            //无限加载回调
            // console.log('==============================')
            // console.log('total   ',this.total);
            // console.log('current   ',this.current_page);
            if(this.current_page >= this.total) {
                setTimeout(() => {
                    done(true);
                })
                return;
            }

            let query = this.$route.query;
            query.type =1;
            query.offset = this.current_page*30;

            http.get(api['search'],query)
            .map(data => {this.current_page++;return data;})
            .flatMap(data =>data.result.songs)
            .subscribe(data => {
                // console.log(data)
                this.items.push(data);
                setTimeout( () => {
                    done();
                })
            })
        },
        get_service() {
            let query = this.$route.query;
            query.type =1;
            query.offset = this.current_page*30;

            http.get(api['search'],query)
            .map(data => {this.current_page++;return data;})
            .flatMap(data =>data.result.songs)
            .subscribe(data => {
                // console.log(data)
                this.items.push(data);
                setTimeout( () => {
                    done();
                })
            })            
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
            p {
                font-size: 1.5rem;
            }
        }
        
    }
}
</style>

