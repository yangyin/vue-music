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
            <ul class="list" @click="handleLi($event)">
                <li v-for="(item,index) in data.tracks" :key="item.id" :data-id="item.id">
                    <div :data-id="item.id">{{index + 1}}</div>
                    <div class="list_com" :data-id="item.id">
                        <p :data-id="item.id">{{item.name}}</p>
                        <span>
                            <label v-for="obj in item.ar" :key="obj.id" :data-id="item.id">{{obj.name}}-{{item.name}}</label>
                        </span>
                        
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
            data:this.$props.childData
        }
    },
    props:['childData'],
    methods:{
        handleLi(event) {
            let id = event.target.getAttribute('data-id');
            this.$emit('select-type', id);
        }
    },
    mounted() {
    },
    destroyed () {
        
    }
}
</script>

<style lang="scss" scoped>
.top_info{
    width: 100%;height: 20rem;position: relative;color:#fff;background-color: rgba(0,0,0,.5);
    .top_cont {
        display: flex;margin: 0 5%;height: 15rem;
        .top_left {
            width:30%;align-self: center;
            img {
                width: 100%;
            }
        }
        .top_right {
            width: 70%;margin-left: 1rem;align-self: center;
            h3 {
                font-weight: normal;font-size: 1.6rem;
            }
            .songlist-avatar-img {
                margin-top: 1rem;
                img {
                    width: 3rem;height: 3rem;border-radius: 50%;margin-right: 5%;vertical-align: middle;
                }
                span {
                    font-size: 1rem;vertical-align: middle;
                }
            }
        }
    }
    .top_bar{
        height: 5rem;display: flex;justify-content: space-around;align-content: center;margin-top: 0.3rem;
        div {
            text-align: center;
            line-height: 1.5rem;
        }
    }
    .filter{
        width: 100%;height: 100%;background-size: 100% 100%;filter:opacity(50%);background-repeat: no-repeat;
        position: absolute;top:0;left:0;z-index: -1;
    }
}

.list>li{display: flex;align-content: center;width: 100%;border-bottom: 1px solid #eee;padding: 2% 0;}
.list>li>div{align-self: center;}
.list div:first-child{width:10%;text-align: center;}
.list div:last-child{width: 10%;}
.list_com{width:80%;font-size: 1.3rem;overflow: hidden;}

.list_com {
    span {
        label{
            font-size:0.9rem;color: #888;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }        
    }

}

.list_com label:after {
    content: '/';
    margin: 0 .3rem;
}
.list_com label:last-child::after {
    display: none;
} 

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
