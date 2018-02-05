<template>
    <div class="audio-footer">
        <div class="audio-range">
            <label>{{audioControls.progressTime | timeFormat}}</label>
            <range-slider class="slider" min="0" :max="audioPlay.details[0].dt/1000" step="1" v-model="sliderValue"></range-slider>
            <label>{{audioPlay.details[0].dt/1000 | timeFormat}}</label>
        </div>
        <!-- {{sliderValue}} -->
        <div class="player-conctrl">
            <div class="play-mode" @click="playOrder">
                <i v-if="audioControls.mode == 1" class="iconfont icon-shunxubofang"></i>
                <i v-if="audioControls.mode == 2" class="iconfont icon-suiji-copy-copy"></i>
                <i v-if="audioControls.mode == 0" class="iconfont icon-danquxunhuan"></i>
            </div>

            <div class="prev" @click="prevHandler"><i class="iconfont icon-shangyishou"></i></div>
            <div class="ctrl">
                <i class="iconfont icon-zanting1" v-if="$store.state.isPlay" @click.stop="play"></i>
                <i class="iconfont icon-bofang1" v-else @click.stop="pause"></i>
            </div>
            <div class="next" @click="nextHandler"><i class="iconfont icon-next"></i></div>
            <div class="play-list-btn" @click.stop="hanleList">
                <i class="iconfont icon-fenzu"></i>
            </div>
        </div>
        <div v-if="groupStatus">
            <GroupPage @close-bg="closeDialog" @click-id="childClickId"></GroupPage>
        </div>
        

    </div>
</template>

<script>
import RangeSlider from 'vue-range-slider'
import { mapState } from 'vuex'
// you probably need to import built-in style
import 'vue-range-slider/dist/vue-range-slider.css'
import GroupPage from '../footer-bar/group-page.vue';
export default {
    data() {
        return {
            groupStatus:false, //是否显示右侧弹出栏目 
        }
    },
    components: {
        RangeSlider,GroupPage
    },
    computed:{
         ...mapState([
            'audioControls','audioPlay','isLyirc'
        ]),
        sliderValue:{
            get:function() {
                return this.audioControls.progressTime
            },
            set:function(val) {
                // console.log('val***',val)
                // this.$store.dispatch('setCurrentTimes',val);
                this.audioControls.setCurrentTime = val;
            }
        }
    },
    methods:{
        play() { //暂停
            this.$store.dispatch('playStatus',false);
        },
        pause() { // 播放
            this.$store.dispatch('playStatus',true);
        },
        prevHandler(){//上一首
            let list = this.$store.state.footerList;
            for(let i =0,len = list.length; i< len;i++) {
                if(list[i].isChecked == true) {
                    let id = 0;
                    if(i == 0) {
                        id = list[len-1].id;
                        list[i].isChecked = false;
                        list[len - 1].isChecked = true;
                    } else {
                        id = list[i-1].id;
                        list[i].isChecked = false;
                        list[i - 1].isChecked = true;
                    }
                    this.$store.dispatch('footerList',{msg:list,id:id}); //改变弹出框中 选中的item的isChecked字段
                    this.$store.dispatch('getSongsData',id); // 改变的是 当前播放歌曲
                    this.$store.dispatch('getLyric',id);
                    
                    break;
                }
            }
        },
        nextHandler() { //下一首
            let list = this.$store.state.footerList;
            for(let i =0,len = list.length; i< len;i++) {
                if(list[i].isChecked == true) {
                    let id = 0;
                    if(i == len-1) {
                        id = list[0].id;
                        list[i].isChecked = false;
                        list[0].isChecked = true;
                    } else {
                        id = list[i+1].id;
                        list[i].isChecked = false;
                        list[i + 1].isChecked = true;
                    }
                    
                    this.$store.dispatch('footerList',{msg:list,id:id}); //改变弹出框中 选中的item的isChecked字段
                    this.$store.dispatch('getSongsData',id); // 改变的是 当前播放歌曲
                    this.$store.dispatch('getLyric',id) //获取歌词
                    break;
                }
            }
            // console.log(index);
           
        },
        playOrder() { //控制播放模式
            this.$store.dispatch('updateAudioControls',{mode:'mode'});
        },
        /*
            点击列表展示
        */ 
        hanleList() {
            this.groupStatus = true;
        },
         closeDialog(val) {
            this.groupStatus = false;
        },
        /**
         * 弹出框选中的Li
         */
        childClickId(id) {
            // console.log(id);
            let list = this.$store.state.footerList;
            this.$store.dispatch('footerList',{msg:list,id:id}); //改变弹出框中 选中的item的isChecked字段
            this.$store.dispatch('getSongsData',id); // 改变的是 当前播放歌曲
            this.$store.dispatch('getLyric',id) //获取歌词

            // console.log('******',this.$store.state.footerList)
            
        }
    },
    filters: {
        timeFormat(value) {
            let min = parseInt(value / 60)
            let sec = parseInt(value % 60)
            min = min < 10 ? '0' + min : min
            sec = sec < 10 ? '0' + sec : sec
            return min + ':' + sec
        }
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
            .icon-zanting1{font-size: 3.5rem;}
        }
        
    }
    $knob-size: 10px;
    @import '~vue-range-slider/dist/vue-range-slider.scss';
</style>
