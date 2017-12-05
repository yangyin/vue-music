<template>
  <div>
    <AudioComponent></AudioComponent>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>

</template>

<script>
import AudioComponent from '../../components/audio';
export default {
  data() {
    return {

    }
  },
  components: {
    AudioComponent
  }
}
</script>

<style>

</style>
