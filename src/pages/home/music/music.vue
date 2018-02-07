<template>
  <div class="music">
        <slider :pages="pages" :sliderinit="sliderinit" style="width:100%;margin:0 auto;"></slider>
        <div class="tab-lab">
            <div>
                <i class="iconfont icon-shouyinji01"></i>
                <p>私人FM</p>
            </div>
            <div>
                <i class="iconfont icon-rili"></i>
                <p>每日推荐</p>
            </div>
            <router-link to="/fine_song" tag="div">
                <i class="iconfont icon-yinle"></i>
                <p>精品歌单</p>
            </router-link>
            <div>
                <i class="iconfont icon-regepaihangbang"></i>
                <p>排行榜</p>
            </div>
        </div>
        <img-list :message="recommended_list"  @child-click="emitSongClick"></img-list>
        <img-list :message="personalized_mv" @child-click="emitMvClick"></img-list>
        <img-list :message="personalized_djprogram"  @child-click="emitDjClick"></img-list>
  </div>
</template>

<script>
import slider from 'vue-concise-slider';
import imgList from '../../../components/img_list';

import http from '../../../http';
import api from '../../../http/api';

export default {
    data() {
        return {
             //图片列表[arr]
             pages:[],
            //滑动配置[obj]
            sliderinit: {
                currentPage: 0,//当前页码
                thresholdDistance: 500,//滑动判定距离
                thresholdTime: 100,//滑动判定时间
                autoplay:3000,//自动滚动[ms]
                loop:true,//循环滚动
                infinite:1,//无限滚动前后遍历数
                slidesToScroll:1,//每次滑动项数
            },
            recommended_list: { }, // 推荐歌单
            personalized_djprogram:{ },//推荐电台            
            personalized_mv:{ },//推荐MV           
        }
    },
    components: {
        slider,imgList
    },
    methods:{
        // 推荐MV点击事件
        emitMvClick(id) {
            console.log(id);
            // this.$router.push({ name: 'video',query:{id:id}});
            alert('由于网易云API对 mv 视频 网易做了防盗链处理 , 不能播放。')
        },
        //推荐歌单
        emitSongClick(id) {
            this.$router.push({ name: 'song_sheet',query:{id:id}});
        },
        //推荐电台
        emitDjClick(id) {
            // this.$router.push({ name: 'song_sheet',query:{id:id}});
            console.log('推荐电台ID：',id);
        }
    },
    subscriptions () {
        // 获取slider滚动的图片
        http.get(api['banner'])
        .flatMap(data => data.banners)
        .subscribe((data) => {
            let obj =   {
            style:{
             background:`url(${data.pic})`,
             width:'100%'
            }
          }
            this.pages.push(obj)
        })

        /**
         * @augments
         * 推荐歌单
         */ 
        http.get(api['personalized'])
        .map(data =>data.result)
        .subscribe(data => {
            // console.log(data)
            let obj = {
                data:data,
                icon:'icon-weibiaoti1',
                title:'推荐歌单',
            }
            this.recommended_list = obj;
            // console.log(this.recommended_list)
        })
        /**@augments
         * 推荐MV
         */
        http.get(api['personalized_mv'])
        .map(data =>data.result)
        .subscribe(data => {
            // console.log(data)
            const obj = {
                data:data,
                icon:'icon-weibiaoti1',
                title:'推荐MV',
                column:2
            }
            this.personalized_mv = obj
        })


        /**
         * 推荐电台
         */
        http.get(api['personalized_djprogram'])
        .map(data =>data.result)
        .subscribe(data => {
            // console.log(data)
            let obj = {
                title:'推荐电台',
                isIcon:false,
                isPlain:true,
                data:data
            }
            this.personalized_djprogram = obj;
        })

    }
}
</script>

<style lang="scss" scoped>
.music {
    margin-top: 1px;
    background-color: #fbfbfb61;
    .tab-lab{
        display: flex;justify-content: space-around;
        padding: 1rem 0;border-bottom:1px solid #eee;
        div {
            text-align: center;color:#333;
            i{
                font-size: 2.5rem;color: red;
            }  
            p  {
                font-size: 1rem;
                margin-top: 1rem;
            }      
        }

    }    
}

</style>

