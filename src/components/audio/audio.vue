<template>
<div>
    <audio 
        :src="$store.state.audioPlay.url" 
        autoplay
        preload="auto"
        ref="audio"
        :loop="audioControls.loop" 
        @timeupdate="timeupdate" 
        @play="startPlay" 
        @ended="audioEnd" 
        @volumechange="volumechange"
    >
    <source :src="$store.state.audioPlay.url" type="audio/mpeg" />
        Your browser does not support the audio element.
    </audio> 
    
</div>

</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            progressTime:0, //当前播放位置
        }
    },
    created() {
        
    },
    computed:mapState([
        'audioControls','footerList'
    ]),
    methods: {
        /*
            相当于 setTimeout，播放时，歌曲走的时间
        */ 
        timeupdate() {
            const audioid = this.$refs.audio;
            if(this.progressTime != Math.round(audioid.currentTime) || this.progressTime == 0) {
                 this.progressTime = Math.round(audioid.currentTime)
                 
                // console.log('progressTime******',this.progressTime)
                this.$store.dispatch('updateAudioControls',{mode:'progressTime',val:this.progressTime});
            }
           
        },
        /*
            播放结束时执行
        */ 
        audioEnd() {
            console.log('audio end')
            console.log('***',this.footerList)
            let mode = this.audioControls.mode;
            let list = this.footerList;

            if(mode == 1) {
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
                        break;
                    }
                }
            } else if( mode ==2) {
                let index = this.RandomNum(0,list.length);
                let id = 0;
                for(var i = 0,len = list.length; i< len;i++) {
                    
                    if(i == index) {
                        id = list[i].id;
                        list[i].isChecked = true;
                    } else {
                        list[i].isChecked = false;
                    }
                }
                this.$store.dispatch('footerList',{msg:list,id:id}); //改变弹出框中 选中的item的isChecked字段
                this.$store.dispatch('getSongsData',id); // 改变的是 当前播放歌曲
            } else {
                // this.loop = true;
            }
            

        },
        /*
        *    开始播放时，执行
        */ 
        startPlay() {
            this.volumechange();
            // this.$store.dispatch('play_type',true);

        },
        /*
            控制音量
        */ 
        volumechange() { 
            this.$refs.audio.volume = this.audioControls.volume / 100;
        },
        RandomNum(Min, Max) { // 随机数
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Math.floor(Rand * Range); //舍去
            return num;
        }

    },
    watch: {
        /*
            控制播放状态： 播放、暂停
        */ 
        '$store.state.isPlay':function(val,old) {
            // console.log(val)
            var currentTime=Date.now();
            var protectTime=100;//设置保护性延时 单位毫秒，不要小于50 建议100以上
            if((currentTime-lastRunTime)<protectTime){
                return;//两次执行太过频繁，直接退出
            }
            if(!val) {
                this.$refs.audio.pause();
            } else {
                this.$refs.audio.play();
            }
        },
        'audioControls.volume':function(val,old) {
            this.volumechange();
        }
    }
}
</script>

<style scoped>

</style>
