<template>
  <div class="page">
    <header class="header">
    <TopBar>
        <div class="first_lab">
            <i class="iconfont icon-liebiao" slot="left" style="font-size:3rem;"></i>
            <div class="home-lab">
                <router-link to="/manage" >
                    <i class="iconfont icon-yinle"></i>
                </router-link>
                <router-link to="/home/music" class="middle" :class="path.includes('home')? 'router-link-active' : ''">
                    <i class="iconfont icon-wangyiyunyinle"></i>
                </router-link>
                <router-link to="/fade" >
                    <i class="iconfont icon-wode"></i>
                </router-link>
            </div>
            <i class="iconfont icon-sousuo" slot="right" style="font-size:2.2rem;"></i>            
        </div>

        <div slot="next" class="next" v-if="path.includes('/home')">
            <div :class="path.includes('/home/music')? 'active' : ''">
                <router-link to="/home/music">音乐</router-link>
            </div>
            <div :class="path.includes('/home/video')? 'active' : ''">
                <router-link to="/home/video">视频</router-link>
            </div>
            <div :class="path.includes('/home/radio_station')? 'active' : ''">
                <router-link to="/home/radio_station">电台</router-link>
            </div>
        </div>
        </TopBar> 
        <!-- <div style="height:20px;background:orange;width:100%">111</div>        -->
    </header>
    <section class="content">
        <router-view/>
    </section>  
    <footer class="footer">
        footer
    </footer> 
  </div>
</template>

<script>
import TopBar from '../components/topBar.vue';
export default {
    data() {
        return {
            path:this.$route.path
        }
    },
    components: {
        TopBar
    },
    beforeRouteUpdate(to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        // console.log(to.path)
        this.path = to.path;
        next()
  },
}
</script>

<style lang="scss" scoped>
.page{  
    display:-webkit-box;  
    -webkit-box-orient:vertical;  
    height:100%;  
    .content{  
        position:relative;  
        -webkit-box-flex:1;  
        -webkit-flex:1;  
        flex:1;  
        overflow:auto;  
        -webkit-overflow-scrolling:touch;  
    
        // background-color:#ccc;  
    }
    /*flex头部*/  
    .header{  
        display: -webkit-box;  
        .first_lab {
            height: 3rem;
            
            display: flex;
            justify-content: space-around;
            align-items: center;
            color: #fff;
            background-color: red;
            .home-lab{
                width: 70%;display: flex;justify-content: center;align-items: center;
                .middle{
                    margin: 0 10%;
                    i {
                        font-size: 2.5rem;
                    }
                }
                a {
                    outline-style: none;
                    text-decoration: none;
                    color: #c3c3c3;
                    i {
                        font-size: 2rem;
                    }
                }
                a.glayColor {color: #c3c3c3;}
                a.router-link-active {color: #fff;}
            }

        }
        .next{
            display: flex;height: 3rem;
            justify-content: space-around;align-items: center;
            div {
                width: 33.3%;
                height: 100%;
                line-height: 3rem;
                text-align: center;
                // padding: 3% 0;
                border-bottom: 1px solid #fff;
                a {
                    text-decoration: none;
                    font-size: 0.1rem;
                    color: #7b7474;
                    display: block;
                    width: 100%;
                    outline: none;
                }
            } 
            div.active {
                border-bottom: 1px solid red;
                a {
                color: red;
                }
            }           

        }
    }  
    .header *{  
        display: block;  
    }     
} 

</style>
