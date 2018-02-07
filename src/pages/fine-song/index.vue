<template>
<div class="fine-song">
    <header>
        <TopBar>
            <div class="title">
                <div slot="left" class="title-left">
                    <router-link to="/">
                        <i class="iconfont icon-iconfontzuojiantou"></i>
                    </router-link>
                    <div>
                        <p>精品歌单-全部</p>
                    </div>
                </div>
                <div slot="right" class="title-right">
                    筛选
                </div>
            </div>
        </TopBar>              
    </header> 
    <div class="content">
        <ul class="list" v-if="playlist">
            <li v-for="item of playlist" :key="item.id" @click="itemHandler(item.id)">
                <div class="list-left">
                    <img :src="item.coverImgUrl" alt="" />
                    <label class="icon">
                        <i class="iconfont icon-weibiaoti1"></i>
                        {{item.playCount/10000 | floor}}
                        <span>万</span>
                    </label>
                </div>
                <div class="list-right">
                    <h2>{{item.name}}</h2>
                    <p class="nickname">by {{item.creator.nickname}}</p>
                    <p>
                        <span class="tag">{{item.tag}}</span> 
                        <label class="copywriter">{{item.copywriter}}</label> 
                    </p>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import TopBar from '../../components/topBar.vue';
import http from '../../http';
import api from '../../http/api';
export default {
    data() {
        return {
            playlist:[]
        }
    },
    components: {
        TopBar
    },
    async subscriptions () {
        let res =await http.get(api['highquality']).toPromise();
        console.log(res.playlists);
        this.playlist = res.playlists;

    },
    methods: {
        itemHandler(id) {
            this.$router.push({ name: 'song_sheet',query:{id:id}});
        }
    },
    filters: {
        floor: (value) => {
            return Math.floor(value)
        }
    }
}
</script>
<style lang="scss" scoped>
.fine-song {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;width: 100%;
    .title {
        display: flex;
        height: 36px;
        justify-content: space-around;
        align-items: center;
        color: #fff;
        font-size: 1.5rem;
        .title-left {
            display: flex;
            width: 80%;
            a {
                text-decoration: none;
                color: #fff;
                margin-right: 0.5rem;
                align-self: center;
            }
        }
        .title-right {
            font-size: 1rem;
        }
    }
    .content {
        flex: 1;
        width: 100%;
        position:relative;  
        overflow:auto;  
        .list{
            li {
                display: flex;
                margin-bottom: .5rem;
                .list-left {
                    flex: 1;
                    position: relative;
                    margin-right: .5rem;
                    img {
                        width: 100%;
                    }
                    .icon {
                        position: absolute;
                        color: white;
                        font-size: 10px;
                        height: 20px;
                        right: 0;
                        top: 0;
                        background-color: rgba(0, 0, 0, .1);
                        text-align: right;padding-left: 5%;
                    }
                }
                .list-right {
                    flex:3;
                    border-bottom: 1px solid #eee;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: flex-start;
                    h2 {
                        font-weight: 100;
                        color: #000;
                    }
                    .nickname {
                        font-size: .1rem;
                        color: #888;
                        // margin: .3rem 0;
                    }
                    .copywriter {
                        font-size: 1.2rem;
                        color: #555;
                    }
                    .tag {
                        display: inline-block;
                        padding: 0 .5rem;
                        border: 1px solid red;
                        color: red;
                        font-size: .1rem;
                    }
                }
            }
        }  
    }
}
</style>

