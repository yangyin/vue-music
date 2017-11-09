<template>
    <div class="search">
        <header>
            <TopBar>
                <div class="search_title">
                    <router-link to="/" slot="left">
                        <i class="iconfont icon-iconfontzuojiantou"></i>
                    </router-link>
                    
                    <div class="home-lab">
                        <input type="text" placeholder="音乐、视频、歌词、电台"/>
                        <p>x</p>  
                    </div>   
                </div>
                <div slot="next" class="next">
                    <div>单曲</div>
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
            <div>2222222222</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>           
            <div>11111</div>   
        </section>        
    </div>
</template>

<script>
import TopBar from '../../components/topBar.vue';

import http from '../../http';
import api from '../../http/api';
export default {
    data() {
        return {

        }
    },
    components:{
        TopBar
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
                position: relative;
                input {
                    width: 90%;height: 100%;outline: none;border: none;background: none;color:#fff;
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
