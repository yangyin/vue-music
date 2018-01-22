<template>
<div class="group-bg"  @click="bgHandle">
    <div class="group-page" :class=" isClass ? 'addMove' : 'removeMove' ">
        <div class="title">
            <div class="left">
                <p><i class="iconfont icon-shunxubofang"></i>列表循环（58）</p>
            </div>
            <div class="right">
                <span><i class="iconfont icon-wenjianjia"></i>收藏全部</span>
                <span><i class="iconfont icon-shanchu"></i></span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isClass:true
        }
    },
    methods: {
        bgHandle(e) {
            if(e.target.className.includes('group-bg')) {
               this.isClass = false;
               setTimeout(()=> {
                   this.$emit('close-bg',false); 
               },500)
            }
        }
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

