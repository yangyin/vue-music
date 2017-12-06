<template>
    <div class="audio-footer">
        <div class="audio-range">
            <label>00.00</label>
            <range-slider class="slider" min="0" max="100" step="1" v-model="sliderValue"></range-slider>
            <label>04.11</label>
        </div>
        <div class="player-conctrl">
            <div class="play-mode">
                <i class="iconfont icon-shunxubofang"></i>
            </div>
            <div class="prev"><i class="iconfont icon-shangyishou"></i></div>
            <div class="ctrl">
                <!-- <i class="iconfont icon-zanting1"></i> -->
                <i class="iconfont icon-bofang1"></i>
            </div>
            <div class="next"><i class="iconfont icon-next"></i></div>
            <div class="play-list-btn">
                <i class="iconfont icon-fenzu"></i>
            </div>
        </div>
        

    </div>
</template>

<script>
import RangeSlider from 'vue-range-slider'
// you probably need to import built-in style
import 'vue-range-slider/dist/vue-range-slider.css'
export default {
    data() {
        return {
            sliderValue: 50
        }
    },
    components: {
        RangeSlider
    }
}
</script>

<style lang="scss" scoped>
    .audio-footer {
        .audio-range{
            width: 100%;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .slider {
                width: 80%;
            }
        }
        .player-conctrl {
            display: flex;justify-content: space-around;color:#fff;align-items: center;margin:2rem 0;
            i {
                font-size: 2.5rem;
            }
            .icon-shangyishou{font-size: 2rem;}
            .icon-bofang1 {font-size: 3.5rem;}
            .icon-zanting1{font-size: 4rem;}
        }
        
    }
    $knob-size: 10px;
    @import '~vue-range-slider/dist/vue-range-slider.scss';
</style>
