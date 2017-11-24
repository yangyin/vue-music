<template>
    <div>singer</div>
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
            // .map(data => {this.current_page++;return data;})
            // .flatMap(data =>data.result)
            .subscribe(data => {
                console.log(data)
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

</style>

