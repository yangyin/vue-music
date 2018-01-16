<template>
  <div>
    <header>
        <TopBar>
            <div class="title">
                <div slot="left">
                    <router-link to="/">
                        <i class="iconfont icon-iconfontzuojiantou"></i>
                    </router-link>
                </div>
                
                <div slot="right">
                    <router-link to="/" >
                        <i class="iconfont icon-sousuo"></i>
                    </router-link>
                    <i class="iconfont icon-fengexianICONCopy"></i> 
                </div>
            </div>
        </TopBar>              
    </header>    
  </div>
</template>

<script>
import http from '../../http';
import api from '../../http/api';

import TopBar from '../topBar.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        TopBar
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
.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
        text-decoration: none;
        i {
            font-size: 2.5rem;
        }
    }
}
</style>

