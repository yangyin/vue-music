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
                        <label  v-if="data.playlist">{{data.playlist.name}}</label>
                    </div>
                </div>
                
                <div slot="right" class="title-right">
                    <router-link to="/search">
                        <i class="iconfont icon-sousuo"></i>
                    </router-link>
                    <i class="iconfont icon-fengexianICONCopy"></i> 
                </div>
            </div>
        </TopBar>              
    </header> 
    <div class="content">
        <keep-alive v-if="data.playlist">
            <SheetContent :child-data="data.playlist" @select-type="onSelectType"></SheetContent>
        </keep-alive>
        
    </div>
    <footer class="footer" v-if="$store.state.audioPlay.details">
        <FooterBar :message="dialogList"></FooterBar>
    </footer>   
  </div>
</template>

<script>
import http from '../../http';
import api from '../../http/api';

import TopBar from '../topBar.vue';
import SheetContent from './sheet-content';
import FooterBar from '../footer-bar';
export default {
    data() {
        return {
            data:{
                
            },
            dialogList:{}
        }
    },
    components: {
        TopBar,SheetContent,FooterBar
    },
    async created () {
        let id = this.$route.query.id;
        let responseData = await http.get(api['playlistDetail'],{id:id}).toPromise();
        this.data = responseData;  
    },
    methods: {
        onSelectType (id) {
            let current_audio_play = this.$store.state.audioPlay;
            this.data.playlist.tracks.forEach(item => {
                if(item.id == id) {
                    item['isChecked'] = true;
                } else {
                    item['isChecked'] = false;
                }
            })

            this.dialogList = this.data.playlist.tracks;
            // console.log('arr******', this.data.playlist);
            
            // this.$store.dispatch('songInfo/getSongsData',id);
            //播放器播放单曲，所以store到公共区域
            this.$store.dispatch('getSongsData',id);
            this.$store.dispatch('footerList',{msg:this.dialogList,id:id});
            // this.$store.dispatch('playStatus',true);

        },
       
    },
    watch: {
        
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
                color: #efefef;
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
    overflow: auto;
}
.footer {
    width: 100%;
}

</style>

