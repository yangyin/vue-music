<template>
    <div class="search">
        <header>
            <TopBar>
                <div class="search_title">
                    <router-link to="/" slot="left">
                        <i class="iconfont icon-iconfontzuojiantou"></i>
                        
                    </router-link>
                    
                    <div class="home-lab">
                        <i class="iconfont icon-sousuo" style="font-size:2.2rem;color:#fff;" @click="change_search()"></i>
                        <input type="text" placeholder="音乐、视频、歌词、电台" ref="input"/>
                        <p>x</p>  
                    </div>   
                </div>
                <div slot="next" class="next" v-if="keywords != ''">
                    <router-link :to="{path:'/search/single',query: {keywords:keywords}}">单曲</router-link>
                    <div>歌手</div>
                    <div>专辑</div>
                    <div>歌单</div>
                    <div>视频</div>
                    <div>主播电台</div>
                    <div>用户</div>
                </div>
            </TopBar>              
        </header>
        <section class="content">
            <keep-alive>
                <router-view />
            </keep-alive>
            
        </section>   
        <footer>footer 预留位置{{ keywords }}</footer>     
    </div>
</template>

<script>
import TopBar from '../../components/topBar.vue';

import http from '../../http';
import api from '../../http/api';
export default {
    data() {
        return {
            keywords:''
        }
    },
    components:{
        TopBar
    },
    methods: {
        change_search() {
            let DinputVal = this.$refs.input.value;

            DinputVal != '' ? this.keywords = DinputVal :this.keywords = '';

        }
    },
    subscriptions() {
        /**@argument
         * 获取热门歌手
         */
    }
}
</script>

<style lang="scss" scoped>
.search {
    display: -webkit-box; height: 100%;width: 100%;-webkit-box-orient:vertical;  
    header {
        display: -webkit-box;
        a{outline: none;text-decoration: none;}
        .search_title {
            height: 3rem;width: 100%;display: flex;justify-content: space-around;align-items:center;background:red;padding-bottom:10px;
            a {
                flex: 1;text-align:center;color:#fff;font-weight:100;
                i {font-size: 2rem;}
            }
            .home-lab {
                flex: 8;height: 100%;line-height: 3rem;
                border-bottom: 1px solid #ff8383;
                position: relative; display: flex;
                input {
                    width: 90%;height: 100%;outline: none;border: none;background: none;color:#fff;padding-left: 1%;
                }
                input::-webkit-input-placeholder { /* WebKit browsers */
                    color:#ffc9c9;
                }
                p  {
                    position: absolute;height: 3rem;line-height: 3rem;right: 3%;top: 0;font-size: 2rem;color:#fff;
                }
            }
        }
        .next {height: 3rem;width: 100%;display: flex;justify-content:space-around;align-items: center;}        
    }
    header *{  
        display: block;  
    } 
    .content{  
        position:relative;  
        -webkit-box-flex:1;  
        -webkit-flex:1;  
        flex:1;  
        overflow:auto;  
        -webkit-overflow-scrolling:touch;  
    
        // background-color:#ccc;  
    }

}
</style>
