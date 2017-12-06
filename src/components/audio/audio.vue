<template>
<div>
    <audio 
        :src="$store.getters.sigleUrl" 
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

}
</script>

<style lang="scss" scoped>

</style>

