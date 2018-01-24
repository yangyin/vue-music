<template>
<div v-if="$store.state.audioPlay.details">
    <div class="content" @click="handleCont">
        <div class="left">
            <img :src="$store.state.audioPlay.details[0].al.picUrl" alt="">
                <p>
                    {{$store.state.audioPlay.details[0].name}}
                    <span v-for="(item,index) in $store.state.audioPlay.details[0].ar" :key="index">
                        {{item.name}}
                    </span>
                    
                </p> 
        </div>
        <div class="right">
            <label class="tog_icon">
                <i class="iconfont icon-zanting1" v-if="$store.state.isPlay" @click.stop="play"></i>
                <i class="iconfont icon-bofang1" v-else @click.stop="pause"></i>
            </label>
            <i class="iconfont icon-fenzu" @click.stop="hanleList"></i>
        </div>
    </div>
    <div v-if="groupStatus">
        <GroupPage @close-bg="closeDialog" @click-id="childClickId"></GroupPage>
    </div>
</div>

</template>

<script>
import GroupPage from './group-page'
export default {
    data() {
        return {
            groupStatus:false, //是否显示右侧弹出栏目 
            list:this.$props.message
        }
    },
    props:['message'],
    components: {
        GroupPage
    },
    computed: {

    },
    mounted() {
        // console.log(this.singleDetails)
    },
    methods: {
        play() {
            this.$store.dispatch('playStatus',false);
        },
        pause() {
            this.$store.dispatch('playStatus',true);
        },
        /*
            点击全局，显示到播放页面 <audio>
        */ 
        handleCont() {
            // console.log(1)
            this.$store.dispatch('updateAudioPageStatus',true);
        },
        /*
            点击列表展示
        */ 
        hanleList() {
            /**
             * 把底部列表页的歌单数据存储在store中footerList,与试听共存在一个字段
             */
            // console.log('message********',this.$props.message.length)
            // console.log('list*******',this.list)
            if(this.$props.message && this.$props.message.length>0) {
                this.$store.dispatch('footerList',{msg:this.$props.message});
            }
            this.groupStatus = true;
        },
         closeDialog(val) {
            this.groupStatus = false;
        },
        /**
         * 弹出框选中的Li
         */
        childClickId(id) {
            // console.log(id);
            let list = this.$store.state.footerList;
            this.$store.dispatch('footerList',{msg:list,id:id});
            this.$store.dispatch('getSongsData',id);

            // console.log('******',this.$store.state.footerList)
            
        }
    },
    watch: {
        '$store.state.audioPlay.details':(newVal,oldVal) => {
            // console.log('newVal****',newVal);
        },
        'message':(val,old) => {
            // console.log('val****',val);
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    height: 50px;
    box-shadow:  -2px -2px 3px #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    .left {
        width: 70%;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 1rem;
        img {
            width: 3rem;
        }
        p {
            display: flex;
            flex-direction: column;
            font-size: 1.2rem;
            color: #000;
            margin-left: 1rem;
            span {
                font-size: .5rem;
                color: #666;
            }
        }
    }
    .right {
        width: 25%;
        box-sizing: border-box;
        text-align: right;
        margin-right: 1rem;
        i {
            font-size: 3rem;
            font-weight: 100;
        }
    }
}
</style>
