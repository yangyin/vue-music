<template>
  <div>
    <scroller :on-refresh="refresh" :on-infinite="infinite">

    </scroller>     
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
    subscriptions() {
        http.get()
    }
}
</script>

<style>

</style>
