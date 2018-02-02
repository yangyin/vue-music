<template>
    <div class="audio-ly">
        <div class="voice">
            <i class="iconfont icon-shengyin"></i>
            <range-slider class="slider" min="0" max="100" step="1" v-model="sliderValue"></range-slider>
            <label>{{sliderValue}}</label>
        </div>
        <div class="ly" >
            <ul v-if="lrc">
                <li v-for="(value,key) in lrc" :key="key" :class="audioControls.progressTime == key ? 'li-active': ''">
                    {{value}}{{key}}
                </li>
            </ul>
        </div>
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
    created () {
        this.$store.dispatch('getLyric',this.audioPlay.id)
    },
    components: {
        RangeSlider
    },
    computed:{
        ...mapState([
            'audioControls','audioPlay'
        ]),
        lrc() {
            if(this.audioPlay.lrc !== '') {
                return this.parseLrc(this.audioPlay.lrc) || null;
            } else {
                return false;
            }
        }
    },
    methods: {
        //解析歌词
        parseLrc(lrc) {
            var lyrics = lrc.split("\n");
            var lrcObj = {};
            for (var i = 0; i < lyrics.length; i++) {
                var lyric = decodeURIComponent(lyrics[i]);
                var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
                var timeRegExpArr = lyric.match(timeReg);
                if (!timeRegExpArr) continue;
                var clause = lyric.replace(timeReg, '');
                for (var k = 0, h = timeRegExpArr.length; k < h; k++) {
                    var t = timeRegExpArr[k];
                    var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                        sec = Number(String(t.match(/\:\d*/i)).slice(1));
                    var time = min * 60 + sec;
                    lrcObj[time] = clause;
                }
            }
            return lrcObj;
        },  
    },
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
            overflow: hidden;
            margin: 1rem 0;
            text-align: center;
            ul {
                height: 100%;
                color: #bbb;
                font-size: 1.5rem;
                li {
                    padding: 1rem 0;
                }
                .li-active {
                    color: #fff;
                }
            }
        }
    }
</style>
