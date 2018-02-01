<template>
    <div class="audio-ly">
        <div class="voice">
            <i class="iconfont icon-shengyin"></i>
            <range-slider class="slider" min="0" max="100" step="1" v-model="sliderValue"></range-slider>
            <label>{{sliderValue}}</label>
        </div>
        <div class="ly">{{audioControls}}</div>
    </div>
</template>

<script>
import RangeSlider from 'vue-range-slider'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            sliderValue:this.$store.state.audioControls.volume
        }
    },
    components: {
        RangeSlider
    },
    computed:mapState([
        'audioControls'
    ]),
    watch: {
        'sliderValue':function(val,old) {
            this.$store.dispatch('updateAudioControls',{mode:'volume',val:val});
        }
    }
}
</script>

<style lang="scss" scoped>
    .audio-ly {
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .voice {
            width: 100%;
            height: 30px;
            box-sizing: border-box;
            padding: 0 2%;
            display: flex;
            align-items: center;
            i  {
                width: 5%;
            }
            .range-slider{
                width: 90%;
            }
            label {
                width: 5%;
            }
        }
        .ly {
            width: 100%;
            flex: 1;
            background: red;
        }
    }
</style>
