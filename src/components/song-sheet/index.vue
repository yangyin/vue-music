<template>
  <div class="song-sheet">
    <header>
        <TopBar>
            <div class="title">
                <div slot="left" class="title-left">
                    <router-link to="/">
                        <i class="iconfont icon-iconfontzuojiantou"></i>
                    </router-link>
                    <div>
                        <p>歌单</p>
                        <label>{{playlist.name}}</label>
                    </div>
                </div>
                
                <div slot="right" class="title-right">
                    <router-link to="/" >
                        <i class="iconfont icon-sousuo"></i>
                    </router-link>
                    <i class="iconfont icon-fengexianICONCopy"></i> 
                </div>
            </div>
        </TopBar>              
    </header> 
    <div class="content">
        <SheetContent v-if="playlist" :child-data="playlist"></SheetContent>
    </div>
    <footer class="footer">
        footer 预留位置
    </footer>   
  </div>
</template>

<script>
import http from '../../http';
import api from '../../http/api';

import TopBar from '../topBar.vue';
import SheetContent from './sheet-content';
export default {
    data() {
        return {
            playlist:{},
        }
    },
    components: {
        TopBar,SheetContent
    },
    created () {
        let id = this.$route.query.id;
        http.get(api['playlistDetail'],{id:id})
            .subscribe(data => {
                console.log( data);
                this.playlist = data.playlist;
            })
    }

}
</script>

<style lang="scss" scoped>
.song-sheet {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 36px;
    background: red;
    color: #fff;
    width: 100%;
    padding: 0 2%;
    .title-left {
        display: flex;
        align-items: center;
        max-width: 80%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        div {
            margin-left: 1rem;
            // max-width: 80%;
            p{
                font-size: 1.5rem;
            
            }
            label {
                font-size: 0.1rem;
                color: #d4bcbc;
            }
        }
    }
    a {
        text-decoration: none;
        color:#fff;
        i {
            font-size: 2rem;
        }
    }
}
.content {
    flex: 1;
}
.footer {
    width: 100%;
    height: 30px;
    background: red;
}

</style>

