<template>
<div>
    <audio 
        :src="$store.state.audioPlay.url" 
        autoplay
        loop="loop" 
        ref="audio" 
        @timeupdate="timeupdate" 
        @play="startPlay" 
        @ended="audioEnd" 
        @volumechange="volumechange"
    >
        Your browser does not support the audio element.
    </audio> 
    
</div>

</template>

<script>
export default {
    data() {
        return {
            progressTime:0, //当前播放位置
        }
    },
    created() {
        
    },
    computed:{

    },
    methods: {
        /*
            相当于 setTimeout，播放时，歌曲走的时间
        */ 
        timeupdate() {
            const audioid = this.$refs.audio;
            if(this.progressTime != Math.round(audioid.currentTime) || this.progressTime == 0) {
                 this.progressTime = Math.round(audioid.currentTime)
                // console.log('progressTime******',this.progressTime)
                // this.$store.dispatch('progressTime',this.progressTime);
            }
           
        },
        /*
            播放结束时执行
        */ 
        audioEnd() {

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
            // this.$refs.audio.volume = this.$store.state.playInfo.volume / 100;
        }

    },
    watch: {
        /*
            控制播放状态： 播放、暂停
        */ 
        '$store.state.isPlay':function(val,old) {
            // console.log(val)
            if(!val) {
                this.$refs.audio.pause();
            } else {
                this.$refs.audio.play();
            }
        },
        /*
            监听音量
        */ 
        // '$store.state.playInfo.volume':function(val) {
        //     // console.log(val)
        //     this.volumechange();
        // }
    }
}
</script>

<style scoped>

</style>
