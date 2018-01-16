<template>
    <div class="audio-img">
        <div class="audio-img-top">
            <div data-v-62b3c5ac="" class="player-line"></div>
            <div class="player-needle">
                <img src="../../assets/player-needle.png" alt="">
            </div>
            <div class="record-cover">
                <div class="record-bg">
                    <img  src="http://p1.music.126.net/-6osWky_WObfAydYYiTvpA==/3236962232773608.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="audio-img-bottom">
            <i class="iconfont icon-weibiaoti1"></i> 
            <i class="iconfont icon-xiazai"></i> 
            <i class="iconfont icon-xiaoxi1"></i> 
            <i class="iconfont icon-fengexianICONCopy"></i>
            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.audio-img {
    margin-top: 20px;
    position: relative;
    overflow: hidden;
    .audio-img-top {
        margin-bottom: 2rem;
        .player-line {
            height: 1px;
            background-image: linear-gradient(90deg,transparent,hsla(0,0%,100%,.3),transparent);
        }
        .player-needle {
            position: absolute;
            left: 46%;
            height: 10rem;
            z-index: 1;
            img {
                height: 100%;
            }
        }
        .record-cover {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 6rem;
            animation: rotatebg 20s linear infinite;
            .record-bg {
                width: 20rem;
                height: 20rem;
                border-radius: 50%;
                background: url(../../assets/record-bg.png) no-repeat;
                background-size: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: 70%;
                    border-radius: 50%;
                }
            }
        }
    }
    .audio-img-bottom {
        display: flex;
        justify-content: space-around;
        width: 80%;
        margin: 0 auto;
        i {
            font-size: 2rem;
        }
    }
}

@keyframes rotatebg {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
