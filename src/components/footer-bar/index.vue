<template>
<div>
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
        <GroupPage @close-bg="closeDialog"></GroupPage>
    </div>
</div>

</template>

<script>
import GroupPage from './group-page'
export default {
    data() {
        return {
            groupStatus:false, //是否显示右侧弹出栏目 
        }
    },
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
            console.log(1)
        },
        /*
            点击列表展示
        */ 
        hanleList() {
            // console.log(1111111)
            this.groupStatus = true;
        },
         closeDialog(val) {
            this.groupStatus = false;
        }
    },
    watch: {
        '$store.state.audioPlay.details':(newVal,oldVal) => {
            console.log('newVal****',newVal);
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
        width: 80%;
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
        width: 20%;
        box-sizing: border-box;
        i {
            font-size: 3rem;
            font-weight: 100;
        }
    }
}
</style>
