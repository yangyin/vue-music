<template>
    <div class="singer">
        <ul>
            <li v-for="(item,index) in items" :key="item.id">

                <div>
                    <label>
                        <img :src="item.picUrl" alt="">
                    </label>
                </div>
                <p>{{item.name}}</p>
            </li>
        </ul> 
    </div>
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
            query:{keywords:this.$route.query.keywords,offset:0,type:100}
        }
    },
    computed:{

    },
    methods:{
        getService() {
            this.query.offset = this.current_page * 30;
            http.get(api['search'],this.query)
            .map(data => {this.current_page++;return data.result;})
            // .flatMap(data =>data.result)
            .subscribe(data => {
                console.log(data)
                this.items = data.artists;
                // this.items.push(data);
                // setTimeout( () => {
                //     done();
                // })
            })
        }
    },
    subscriptions() {
        this.getService();
    }
}
</script>

<style lang="scss" scoped>
    .singer {
        ul {
            li {
                display: flex;
                // justify-content: space-around;
                align-items: center;
                padding: 3%;
                border-bottom: 1px solid #eee;
                img {
                    width: 4rem;
                }
                p {
                    font-size: 1.5rem;
                    margin-left: 3%;
                }
            }
        }
    }
</style>

