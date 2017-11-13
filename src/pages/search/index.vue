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
                        <input type="text" placeholder="音乐、视频、歌词、电台" ref="input" v-model="search"/>
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
            <keep-alive v-if="is_router">
                <router-view />
            </keep-alive>
            
        </section>   
        <footer>footer 预留位置{{ keywords }}</footer>  
        <div class="search_suggest" v-if="is_search_suggest">
            <p v-if="search != ''" @click="change_search(search)">搜索"{{search}}"</p>
            <ul>
                <li v-for="item of search_result.songs" :key="item.id" >
                    <i class="iconfont icon-sousuo"></i>
                    <label>{{item.artists[0].name}}</label>
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
            keywords:'',
            search:'',
            is_search_suggest:false, //是否显示弹出框
            is_router:false //是否显示router内容
        }
    },
    components:{
        TopBar
    },
    methods: {
        change_search(val) {
            // let DinputVal = this.$refs.input.value;

            // DinputVal != '' ? this.keywords = DinputVal :this.keywords = '';
            // console.log(val)
            this.keywords = val;
            this.is_search_suggest = false;
            this.$router.push({path:'/search/single',query: {keywords:val}});
            this.is_router = true;

        } 
    },
    subscriptions() {
        /**@argument
         * 获取热门歌手
         */

         return {
             /**@augments
              * 输入INPUT框时，发送的请求
              */
             'search_result':this.$watchAsObservable('search')
                            .pluck('newValue')
                            .filter(text => text.length > 0)
                            .debounceTime(500)
                            .distinctUntilChanged()
                            .map(data => { this.is_search_suggest=false;return data;})
                            .switchMap(fetchTerm)
                            .map(data => {this.is_search_suggest=true;return data})
                            .map(formatResult)
         }
    },
    
}

function fetchTerm (term) {
  return http.get(api['search_suggest'],{keywords:term});
}
function formatResult(res) {
    // console.log(res)
    return {
        songs:res.result.songs,
    }
}

</script>

<style lang="scss" scoped>
.search {
    display: -webkit-box; height: 100%;width: 100%;-webkit-box-orient:vertical;  position: relative;
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
    .search_suggest {
        position: absolute;
        width: 80%;
        // height: 20rem;
        top:4rem;left: 0;right: 0;margin: 0 auto;
        background-color: #f3f3f3;
        border-radius: 5px;
        box-shadow: 1px 1px 5px #ccc;
        p {
            font-size: 1.5rem;color: #679dc5;padding: 1rem; border-bottom: 1px solid #e5e5e5;
        }
        li {
            padding: 1rem;
        }
        li:not(:last-of-type) {
            border-bottom: 1px solid #e5e5e5;color: #666;
        }
    }

}
</style>
