<template>

    <div class="top">
        <div class="top_info">
            <div class="top_cont">
                <div class="top_left">
                    <img :src="data.coverImgUrl" alt="">
                </div>
                <div class="top_right">
                    <h3>{{data.name}}</h3>
                    <div class="songlist-avatar-img">
                        <img :src="data.creator.avatarUrl" alt="">
                        <span>{{data.creator.nickname}} &nbsp;></span>
                    </div>
                </div>
            </div>
            <div class="top_bar">
                <div>
                    <i class="iconfont icon-weibiaoti1"></i>
                    <p>{{data.subscribedCount}}</p>
                </div>
                <div>
                    <i class="iconfont icon-xiaoxi1"></i>
                    <p>{{data.commentCount}}</p>
                </div>
                <div>
                    <i class="iconfont icon-fenxiang"></i>
                    <p>{{data.shareCount}}</p>
                </div>
                <div>
                    <i class="iconfont icon-xiazai"></i>
                    <p>下载</p>
                </div>
            </div>
            <div class="filter" :style="`background-image: url(${data.coverImgUrl});`"></div>
        </div>
        <transition name="fade">
            <ul v-if="show" class="list" @click="handleLi($event)">
                <li v-for="(item,index) in data.tracks" :key="item.id" :data-id="item.id">
                    <div :data-id="item.id">{{index + 1}}</div>
                    <div class="list_com" :data-id="item.id">
                        <p :data-id="item.id">{{item.name}}</p>
                        <label v-for="obj in item.ar" :key="obj.id" :data-id="item.id">{{obj.name}}/ - {{item.name}}</label>
                    </div>
                    <div>
                        <i class="iconfont icon-fengexianICONCopy" :data-id="item.id"></i>
                    </div>
                </li>
            </ul> 
        </transition>

    </div>
</template>

<script>
export default {
    data() {
        return {
            data:this.$props.childData,
            show:false
        }
    },
    props:['childData'],
    methods:{
        handleLi(event) {
            let id = event.target.getAttribute('data-id');
            // console.log(id)
            this.show = false;
            this.$router.push({ name: 'audio', params: { id: id }});
        }
    },
    mounted() {
        this.show = true;
    },
    destroyed () {
        
    }
}
</script>

<style scoped>
.top{margin-top: 19px;}
.top_info{width: 100%;height: 3rem;position: relative;background-color: rgba(64,46,32,.58);color:#fff;}
.filter{
    width: 100%;height:100%;background-size: 100% 100%;filter:opacity(60%);background-repeat: no-repeat;
    position: absolute;top:0;left:0;z-index: -1;
}
.top_cont{display: flex;margin: 0 5%;height: 2rem;}
.top_bar{height: 1rem;display: flex;justify-content: space-around;align-content: center;margin-top: 0.3rem;}
.top_bar>div {text-align: center;font-size: 0.16rem;}
.top_bar>div>p{font-size: 0.14rem;margin-top: 2%;}

.top_left{width:30%;align-self: center;}
.top_left img {width: 100%;}
.top_right{width: 70%;margin-left: .3rem;align-self: center;}
.top_right h3 {font-weight: normal;font-size: .24rem;}
.songlist-avatar-img {margin-top: .26rem;}
.songlist-avatar-img img {width: .48rem;height: .48rem;border-radius: 50%;margin-right: 5%;vertical-align: middle;}
.songlist-avatar-img span {font-size: 0.12rem;vertical-align: middle;}

.list{margin-bottom: 100px;}
.list>li{display: flex;align-content: center;width: 100%;border-bottom: 1px solid #eee;padding: 2% 0;}
.list>li>div{align-self: center;}
.list div:first-child{width:10%;text-align: center;}
.list div:last-child{width: 10%;}
.list_com{width:80%;}
.list_com label{font-size: 0.12rem;color: #888;}

.fade-enter-active {
  transition: all .5s ease;
}
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
</style>
