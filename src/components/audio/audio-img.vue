<template>
    <div class="audio-img">
        <div class="audio-img-top">
            <div data-v-62b3c5ac="" class="player-line"></div>
            <div class="player-needle" :class="$store.state.isPlay? 'player-play':'player-pause'">
                <img src="../../assets/player-needle.png" alt="">
            </div>
            <div class="record-cover">
                <div class="record-bg">
                    <img :style="`backgroundImage:url(${$store.state.audioPlay.details[0].al.picUrl})`" alt="">
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
    flex:1;
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
            transform-origin: 0 0;
            
            img {
                height: 100%;
            }
        }
        .player-play {
            animation: pointover 1s 1;
            animation-fill-mode: forwards;
        }
        .player-pause {
            animation: pointleave 1s 1;
            animation-fill-mode: forwards;
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
                    width: 70%;height: 70%;
                    border-radius: 50%;
                    background-size: 100%;
                }
            }
        }
    }
    .audio-img-bottom {
        display: flex;
        justify-content: space-around;
        width: 80%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 2rem;
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
@keyframes pointover {
    from {
        transform: rotate(-34deg);
    }
    to {
        transform: rotate(0deg);
    }
}
@keyframes pointleave {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-34deg);
    }
}
</style>
