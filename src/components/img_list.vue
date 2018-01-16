<template>
    <div>
        <h4 class="songTitle">{{data.title}}&nbsp;&nbsp;></h4>

        <div class="songContainer" v-if="data.data">
            <div v-for="(item,index) in data.data" :key="item.id" @click="handleSongSheet(item.id)" :style="` width:${width}% `">
                <span>
                    <img :src="item.picUrl" alt="">
                    <label v-if="isPlain" class="plain">{{item.program.dj.brand}}</label>
                </span>
                
                <p>{{item.name}}</p>
                <div v-if="item.artistName" class="subtitle">
                    <!-- {{item.artists}} -->
                    <span v-for="(obj,num) in item.artists" :key="num">{{obj.name}} <i v-if="num < item.artists.length-1">/</i> </span>
                </div>

                <label v-if="isIcon" class="icon"><i class="iconfont" v-if="data.icon" :class="data.icon"></i>{{item.playCount/10000 | floor}}<span v-if="data.icon == 'icon-weibiaoti1'">万</span></label>
                
            </div>
        </div>
    </div>
</template>

<script>
/**@augments
 * props  
 * 1:column:一列排几个图片 默认：3
 * 2 isIcon:是否显示图标  默认：true
 * 3 icon  图标样式
 * 4 iconPos 图标位置 默认：right top
 * 5 isPlain:是否显示说明 默认：fasle
 * 6 plainPos 说明位置 默认：left bottom
 * 7 title:标题
 */
export default {
    data() {
        return {
            data:this.$props.message,
            width:33,
            isIcon:true,
            isPlain:false,
        }
    },
    props:['message'],
    computed: {
 
    },
    mounted () {
        // console.log(this.$props.msg)
    },
    methods: {
        handleSongSheet(id) {
            this.$router.push({ name: 'song_sheet',query:{id:id}});
        }
    },
    watch: {
        'message':function(val) {
            this.data = val;

            if(typeof val.column != 'undefined') { // 计算一列图片数量
                this.width = (100/val.column) - 0.3
            }
            
            if(typeof val.isIcon != 'undefined') { // 是否显示icon
                // console.log(val.isIcon)
                this.isIcon = val.isIcon;
            }
            if(typeof val.isPlain != 'undefined') { // 是否显示说明
                // console.log(val.isIcon)
                this.isPlain = val.isPlain;
            }
            
        }
    },
    filters: {
        floor: (value) => {
            return Math.floor(value)
        }
    }
}
</script>

<style lang="scss" scoped>
.songTitle {
    width: 100%;
    padding: 5% 0;
    font-weight: normal;
    font-size: 0.22rem;
}

.songTitle::before {
    content: '';
    border-left: 2px solid red;
    margin-right: 3%;
}

.songContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.songContainer>div {
    // width: 33%;
    position: relative;
    margin-bottom: 3%;
}

.songContainer>div img {
    width: 100%;
}

.songContainer>div p {
    font-size: 1rem;
    width: 94%;
    padding: 0 3%;
    color: #333;
    text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;
}

.songContainer>div {
    label {
        position: absolute;
        color: white;
        font-size: 12px;
        /* width: 30%; */
        height: 20px;
        
        /* background-image: linear-gradient(to right, #c1baba, #bbbbbb); */
        
    }
    .icon {
        right: 0;
        top: 0;
        background-color: rgba(0, 0, 0, .1);
        text-align: right;padding-left: 5%;
    }
    span {
        position: relative;
    }
    .plain {
        left: 0;
        bottom: -0.1rem;
        text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1;-webkit-box-orient: vertical;
    }
    .subtitle {
        padding: 0 3%;
        color: #777;
    }

}

</style>

