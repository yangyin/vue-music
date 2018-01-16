<template>
<div>
  <ul class="manage-list">
    <li><i class="iconfont icon-yinle"></i><label>本地音乐(0)</label></li>
    <li><i class="iconfont icon-bofang1"></i><label>最近播放(0)</label></li>
    <li><i class="iconfont icon-xiazai"></i><label>下载管理(0)</label></li>
    <li><i class="iconfont icon-shouyinji01"></i><label>我的电台(0)</label></li>
    <li><i class="iconfont icon-wode"></i><label>我的收藏(专辑/歌手/视频/专栏)</label></li>
  </ul>
  <div class="create-play-list">
    <p class="playlist-title">
      <label>创建的歌单(0)</label>
      <i class="iconfont icon-shezhi"></i>
    </p>
    <div class="play-list">
      <div class="play-left">
        <img src="../../assets/logo.png" alt="">
        <div>
          <p>我喜欢的音乐</p>
          <label>0首</label>
        </div>
      </div>
      <i class="iconfont icon-fengexianICONCopy"></i>
    </div>
  </div>
  <div class="recommend">
    <p>推荐歌单</p>
    <div class="recommend-list">
      <div>
        <img src="http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg" alt="">
        <p>云音乐热歌榜</p>
      </div>
      <div>
        <img src="http://p3.music.126.net/mQy3lRj6YJ0TW3fM9v85YA==/6643249256145165.jpg?param=200y200" alt="">
        <p>那些只听前奏就中毒的英文歌</p>
      </div>
      <div>
        <img src="http://p4.music.126.net/AZEa0RlZxNkxWAi0wpDI4w==/109951163097632993.jpg?param=200y200" alt="">
        <p>2017年度最热新歌TOP100</p>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.manage-list {
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    i {
      width: 10%;
      text-align: center;
      color: red;
    }
    label {
      width: 90%;
      font-size: 1.5rem;
      padding: 1rem 0;
      border-bottom: 1px solid #eee;
    }
  }
}
.create-play-list {
  .playlist-title {
    padding: 0 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    width: 90%;
    background-color: #eee;
    i {
      font-size: 3rem;
    }
  }
  .play-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 0 5%;
    .play-left {
      display: flex;
      align-items: center;
      img {
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
      }
      div {
        p {
          font-size: 1.5rem;
        }
        label {
          font-size: 1rem;
          color: #999;
        }
      }
    }
  }
}
.recommend {
  width: 100%;
  border-top: 1rem solid #eee;
  p {
    text-align: center;
    padding: 1rem;
    font-size: 1.5rem;
  }
  .recommend-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      box-sizing: border-box;
      width: 33%;
      img {
        width: 100%;
      }
      p {
        font-size: 0.5rem;
        padding: 0.2rem 0;
        width: 100%;
        white-space: nowrap;    
        overflow: hidden;   
        text-overflow:ellipsis;
        text-align: left;
      }
    }
  }
}
</style>

