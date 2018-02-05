<template>
    <div class="audio-ly">
        <div class="voice">
            <i class="iconfont icon-shengyin"></i>
            <range-slider class="slider" min="0" max="100" step="1" v-model="sliderValue"></range-slider>
            <label>{{sliderValue}}</label>
        </div>
       
        <div class="ly" >
            <ul v-if="lrc&& lrc.length>0" ref="lrcUl">
                <li v-for="(value,key) in lrc" :key="key">
                    <!-- <label v-if="key == 0" :class="(audioControls.progressTime < lrc[1].num) ? 'li-active': ''"></label> -->
                    <label 
                        v-if="key>0" 
                        :data-key="key"
                        :data-all="lrc.length"
                        :class="(audioControls.progressTime < lrc[key].num && audioControls.progressTime > lrc[key-1].num ) ? 'li-active': ''"> 
                        {{ lrc[key-1].msg }}
                    </label>   
                </li>
            </ul>
            <ul v-else>
                <li style="color:#fff;">该歌曲目前暂无歌词！</li>  
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
            sliderValue:this.$store.state.audioControls.volume,
            // offsetTop:0,
            // index:0,
        }
    },
    created () {
        this.$store.dispatch('getLyric',this.audioPlay.id);
        this.$store.dispatch('getLyircShow',true);
        
    },
    beforeDestroy() {
        this.$store.dispatch('getLyircShow',false);
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
            // console.log('*************',lrc);
            // let lines = lrc.split('\n');
            // let pattern = /\[\d{2}:\d{2}.\d{2}\]/g;
            // let result = [];
            // while (!pattern.test(lines[0])) {
            // lines = lines.slice(1);
            // }
            // lines[lines.length - 1].length === 0 && lines.pop();
            // for (let data of lines) {
            // let index = data.indexOf(']');
            // let time = data.substring(0, index + 1);
            // let value = data.substring(index + 1);
            // let timeString = time.substring(1, time.length - 2);
            // let timeArr = timeString.split(':');
            //     result.push({num:parseInt(timeArr[0], 10) * 60 + parseFloat(timeArr[1]),msg: value});
            // }
            // result.sort(function(a, b) {
            // return a[0] - b[0];
            // });
            //  console.log(result)
            //  return result;
            var lyrics = lrc.split("\n");
            let arr =[];
            var lrcObj = {};
            for (var i = 0; i < lyrics.length; i++) {

                var lyric = decodeURIComponent(lyrics[i]);
                var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
                var timeRegExpArr = lyric.match(timeReg);
                // console.log('timeRegExpArr*****',timeReg)
                if (!timeRegExpArr) continue;
                var clause = lyric.replace(timeReg, '');
                // console.log('clause***',clause);
                for (var k = 0, h = timeRegExpArr.length; k < h; k++) {
                    var t = timeRegExpArr[k];
                    var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                        sec = Number(String(t.match(/\:\d*/i)).slice(1));
                    var time = min * 60 + sec;
                    lrcObj[time] = clause;
                    // console.log('lrc***',clause);
                    // console.log('time****',time)
                    if(clause) {
                        arr.push({num:time,msg:clause})
                    }
                    
                }
               
            }
            // console.log('arr****',arr);
            return arr;
        },  
    },
    watch: {
        'sliderValue':function(val,old) {
            
            this.$store.dispatch('updateAudioControls',{mode:'volume',val:val});
        },
        'audioControls.progressTime':function(val,old) {
            if(document.querySelector('.li-active')) {
                let liActive = document.querySelector('.li-active');
                let key = liActive.getAttribute('data-key');
                let allKey = liActive.getAttribute('data-all');
                // console.log('key****',key)
                if(key >=6 && (allKey - key) > 3) {
                    let offsetTop = liActive.offsetTop;
                    // if(this.offsetTop != offsetTop && offsetTop > 250) {
                        // this.offsetTop = offsetTop;
                        this.$refs.lrcUl.style.top =(key-4) *-44 + 'px';
                        // this.index +=1; 
                    // }
                }
                
            }

            if(parseInt(this.audioPlay.details[0].dt/1000) <= val || val == 0) {
                // this.index=0;
                if(this.$refs.lrcUl) {
                    this.$refs.lrcUl.style.top =0;
                }
                
            }
            
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
            position: relative;
            ul {
                height: 100%;
                color: #bbb;
                font-size: 1.5rem;
                position: absolute;
                top:0;
                left: 0;
                right: 0;
                transition: top 1s;
                li {
                    padding: 1rem 0;
                    .li-active {
                        color: #fff;
                        font-size: 1.6rem;
                    }
                }
                
            }
        }
    }
</style>
