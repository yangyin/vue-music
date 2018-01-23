let state = {
    audioPageStatus:false, // 播放器详情页，是否显示
    isPlay:false,//当前播放器的状态：=> 播放：true，暂停：false(默认)
    audioPlay: { // audio 播放状态，URL
        id:'',//当前播放歌曲的ID
        url:'',//当前播放歌曲的URL
        details:'',//当前播放歌曲的详情q
    },
    footerList:[], // 底部footer 弹出框列表数据
    audioControls:{ // 音乐播放器控制器
        volume:50, //音量
        progressTime:0,//当前播放位置
        mode:1,//歌曲播放方式   1=>列表循环 2 => 随机播放 0 => 单曲循环
    },
}

export default state;