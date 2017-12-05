<template>
  <div>
    <Video></Video>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>

</template>

<script>
import Video from '../../components/video/index';
export default {
  data() {
    return {

    }
  },
  components: {
    Video
  }
}
</script>

<style>

</style>
