<template>
    <div id="video" v-if="$store.state.audioPageStatus">
        <div class="header">
            <div>
                <label @click="goBack">
                    <i class="iconfont icon-iconfontzuojiantou" ></i>
                </label>
                <h3>
                    <!-- 17岁
                    <p>刘德华</p> -->
                    {{$store.state.audioPlay.details[0].name}}
                    <p v-for="(item,index) in $store.state.audioPlay.details[0].ar" :key="index">
                        {{item.name}}
                    </p>
                </h3>
            </div>
            <div><i class="iconfont icon-fenxiang"></i></div>
        </div>
        <div class="content" @click="controlHandler">
            <audioImg v-if="controlPage"></audioImg>
            <audioLy v-else></audioLy>
        </div>
        <div class="footer">
            <footer-component></footer-component>
        </div>
        <div class="bgFilter">
            <div :style="`backgroundImage:url(${$store.state.audioPlay.details[0].al.picUrl})`"></div>
        </div>
    </div>
</template>

<script>


import footerComponent from './footer-component';
import audioImg from './audio-img.vue';
import audioLy from './audio-ly';
export default {
    data() {
        return {
            controlPage:true // 控制显示 图片页 或者 歌词页
        }
    },
    components: {
        footerComponent,audioImg,audioLy
    },
    methods: {
        /**
         * 关闭播放详情页
         */
        goBack() {
            this.$store.dispatch('updateAudioPageStatus',false);
        },
        controlHandler() {
            this.controlPage = !this.controlPage;
        }
    }
}
</script>

<style lang="scss" scoped>
    #video {
        width: 100%;
        height: 100%;
        position: fixed;top: 0;bottom: 0;left: 0;z-index: 999;
        display: -webkit-box; -webkit-box-orient:vertical; 
        .header {
            width: 94%;
            padding: 0 3%;
            display: flex;
            justify-content: space-between;
            align-self: center;
            align-items: center;
            color:rgba(255, 255, 255, .87);
            margin-top:20px;
            div:first-child {
                flex: 20;
                display: flex;
                align-items:center;
                h3 {
                    font-size: 1.6rem;
                    font-weight:normal;
                    margin-left: 1%;
                    p {
                        font-size: 1rem;
                        color: #ddd;
                    }
                }
            }
            div:last-child {
                flex:1;
            }
            i {
                font-size: 2rem;
            }
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
            color: #fff; 
            display: flex;
        } 
        .footer {
            color: #fff;
        }
        .bgFilter {
            position: absolute;top: 0;left: 0;z-index: -1;
            width: 100%;height: 100%;
            background-color: #fff;
            
            div {
                width: 100%;height: 100%;
                background-size: auto 100%;background-repeat: no-repeat;
                transform: scale(1.5);transform-origin: top top;
                filter: blur(30px) brightness(70%);
                transition: opacity .3s linear;
            }
        }
    }
</style>
