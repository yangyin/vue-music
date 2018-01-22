const state = {
    isPlay:false,//当前播放器的状态：=> 播放：true，暂停：false(默认)
    audioPlay: { // audio 播放状态，URL
        id:'',//当前播放歌曲的ID
        url:'',//当前播放歌曲的URL
        details:'',//当前播放歌曲的详情q
    },
    footerList:'' // 底部footer 弹出框列表数据
}

export default state;