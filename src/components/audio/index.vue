<template>
    <div id="video">
        <div class="header">
            <div>
                <label>
                    <i class="iconfont icon-iconfontzuojiantou" ></i>
                </label>
                <h3>
                    17岁
                    <p>刘德华</p>
                    <!-- {{details.name}}
                    <p v-for="(item,index) in details.ar" :key="index">
                        {{item.name}}
                    </p> -->
                </h3>
            </div>
            <div><i class="iconfont icon-fenxiang"></i></div>
        </div>
        <div class="content">
            <audioImg></audioImg>
        </div>
        <div class="footer">
            <footer-component></footer-component>
        </div>
        <div class="bgFilter">
            <div style="backgroundImage:url(http://p1.music.126.net/-6osWky_WObfAydYYiTvpA==/3236962232773608.jpg)"></div>
        </div>
    </div>
</template>

<script>


import footerComponent from './footer-component';
import audioImg from './audio-img.vue';
export default {
    data() {
        return {
            
        }
    },
    components: {
        footerComponent,audioImg
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
                        color: #b9b9b9;
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
                filter: blur(30px) brightness(100%);
                transition: opacity .3s linear;
            }
        }
    }
</style>
