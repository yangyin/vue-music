<template>
    <div id="video">
        <div class="header">
            <div>
                <label>
                    <i class="iconfont icon-iconfontzuojiantou" ></i>
                </label>
                <h3>1111
                    <!-- {{details.name}}
                    <p v-for="(item,index) in details.ar" :key="index">
                        {{item.name}}
                    </p> -->
                </h3>
            </div>
            <div><i class="iconfont icon-fenxiang"></i></div>
        </div>
        <div class="bgFilter" style="backgroundImage:url(http://p1.music.126.net/-6osWky_WObfAydYYiTvpA==/3236962232773608.jpg)"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #video {
        width: 100%;
        height: 100%;
        position: fixed;top: 0;bottom: 0;left: 0;z-index: 999;
        .header {
            width: 100%;
            display: flex;
            justify-content: space-around;
            color:rgba(255, 255, 255, .87);
            margin-top:20px;
        }
        .bgFilter {
            position: absolute;top: 0;left: 0;z-index: -1;
            width: 100%;height: 100%;
            background-size: auto 100%;background-repeat: no-repeat;
            transform: scale(2);transform-origin: top top;
            filter: blur(50px) brightness(70%);
            transition: opacity .3s linear;
        }
    }
</style>
