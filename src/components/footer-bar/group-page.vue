<template>
<div class="group-bg"  @click="bgHandle">
    <div class="group-page" :class=" isClass ? 'addMove' : 'removeMove' ">
        <div class="title">
            <div class="left">
                <p @click="playOrder">
                    <label v-if="audioControls.mode == 1"><i class="iconfont icon-shunxubofang"></i>列表循环</label>
                    <label v-if="audioControls.mode == 2"><i class="iconfont icon-suiji-copy-copy"></i>随机播放</label>
                    <label v-if="audioControls.mode == 0"><i class="iconfont icon-danquxunhuan"></i>单曲循环</label>
                    （{{$store.state.footerList.length}}）
                </p>
            </div>
            <div class="right">
                <span><i class="iconfont icon-wenjianjia"></i>收藏全部</span>
                <span><i class="iconfont icon-shanchu"></i></span>
            </div>
        </div>
        <ul class="list" @click="handleLi($event)">
            <li v-for="(item,index) in $store.state.footerList" :key="item.id" :data-id="item.id">
                <div class="list_com" :class="{'list-active':item.isChecked}" :data-id="item.id">
                    <i class="iconfont icon-shengyin" v-if="item.isChecked"></i>
                    <p :data-id="item.id">{{item.name}} - </p> 
                    <span>
                        <label v-for="obj in item.ar" :key="obj.id" :data-id="item.id">{{obj.name}} </label>
                    </span>
                    
                </div>
                <div class="list-right">
                    <i>X</i>
                </div>
            </li>
        </ul> 
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            isClass:true
        }
    },
    computed:mapState([
        'audioControls'
    ]),
    methods: {
        bgHandle(e) {
            if(e.target.className.includes('group-bg')) {
               this.isClass = false;
               setTimeout(()=> {
                   this.$emit('close-bg',false); 
               },500)
            }
        },
        handleLi(event) {
            let id = event.target.getAttribute('data-id');
            // console.log(id)
            this.$emit('click-id',id);
        },
        playOrder() { // 控制播放模式
            this.$store.dispatch('updateAudioControls',{mode:'mode'});
        },
    },
    watch: {
        
    }
}
</script>
<style lang="scss" scoped>
.group-bg {
    width: 100%;
    height:100%;
    background: rgba(0,0,0,.1);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    .group-page {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 33rem;
        background: #fff;
        color: #666;
        .title {
            display: flex;
            align-items: center;
            height: 3rem;
            border-bottom: 1px solid #ddd;
            box-sizing: border-box;
            .left {
                width: 60%;
                p {
                    font-size: 1.2rem;
                    margin-left: .5rem;
                    i {
                        margin-right: .2rem;
                    }
                }
            }
            .right {
                width: 40%;
                text-align: right;
                margin-right: .5rem;
                align-self: center;
                align-items: center;
                span {
                    align-items: center;
                    font-size: 1.2rem;
                    i {
                        font-size: 1.8rem;
                    }
                }
                span:last-child {
                    margin-left: .5rem;
                }
            }
        }
        .list {
            height: 30rem;
            overflow-y: auto;
            li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 0;
                border-bottom: 1px solid #f1f1f1;
                .list_com{
                    display: flex;
                    box-sizing: border-box;
                    width: 80%;
                    margin-left: .5rem;
                    align-items: center;
                    i {
                        margin-right: .5rem;
                        font-size: 1rem;
                    }
                    p  {
                        margin-right: .2rem;
                        font-size: 1.3rem;
                        white-space: nowrap;
                    }
                    span {
                        overflow: hidden;/*内容超出后隐藏*/
                        text-overflow: ellipsis;/* 超出内容显示为省略号*/
                        white-space: nowrap;/*文本不进行换行*/
                        label {
                            
                            font-size: .1rem;
                            color:#999;
                        }
                        label:after {
                            content: '/';
                        }
                        label:last-child::after {
                            display: none;
                        } 
                    }
                    
                }
                .list-active {
                    color: red;
                    span {
                        label {
                            color:red;
                        }
                    }
                   
                }
                .list-right {
                    width: 10%;
                    box-sizing: border-box;
                    text-align: center;
                }
            }
        }
        
    }
    .addMove {
        animation:mymove .5s 1;
    }
    .removeMove {
        animation:removeMove .5s 1;
    }
}
@keyframes mymove
{
	from {height:0;}
	to {height:33rem;}
}

@keyframes removeMove
{
	from {height:33rem;}
	to {height:0;}
}
</style>
</style>

