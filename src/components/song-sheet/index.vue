<template>
  <div>
      歌单列表
  </div>
</template>

<script>
import http from '../../http';
import api from '../../http/api';
export default {
    data() {
        return {

        }
    },
    created () {
        let id = this.$route.query.id;
        http.get(api['playlistDetail'],{id:id})
            .subscribe(data => {
                console.log( data);
                
            })
    }

}
</script>

<style lang="scss" scoped>

</style>

