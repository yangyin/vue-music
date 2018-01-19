<template>
    <div class="content" @click="handleCont">
        <div class="left">
            <img :src="singleDetails.al.picUrl" alt="">
                <p>
                    {{singleDetails.name}}
                    <span v-for="(item,index) in singleDetails.ar" :key="index">
                        {{item.name}}
                    </span>
                    
                </p> 
        </div>
        <div class="right">
            <label class="tog_icon">
                <i class="iconfont icon-zanting" v-if="$store.state.playInfo.type" @click.stop="play"></i>
                <i class="iconfont icon-bofang" v-else @click.stop="pause"></i>
            </label>
            <i class="iconfont icon-fenzu" @click.stop="hanleList"></i>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            singleDetails: this.$store.state.singleDetails
        }
    },
    computed: {

    },
    mounted() {
        // console.log(this.singleDetails)
    },
    methods: {
        play() {
            // this.$store.dispatch('play_type',false);
        },
        pause() {
            // this.$store.dispatch('play_type',true);
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

        }
    },
    watch: {

    }
}
</script>

<style scoped>
.content {

    position: fixed;
    left: 0;
    bottom: 50px;
    z-index: 999;
    width: 100%;
    background: #ddd;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.content div {
    height: 50px;
    line-height: 50px;
}

.left {
    flex-grow: 3;
    margin-left: 3%;
    color: #fff;
}

.left img {
    width: 0.6rem;
    height: 0.6rem;
    vertical-align: middle;
}
.left p{display: inline-block;}
.left span {font-size: 12px;}

.right {
    flex-grow: 1;
    margin-right: 3%;
    text-align: right;
    line-height: 50px;
}

.icon-zanting,
.icon-bofang,
.icon-fenzu {
    font-size: 0.5rem;
}
</style>