<template>
  <div id="app">
    <!-- <div id="loading">
      <img src="../static/img/loading.gif" alt="">
    </div> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

@import url('./style/font/iconfont.css');

* {  
    margin:0;  
    padding:0;  
    list-style:none;  
} 
html {  
    font-size:62.5%;  
    width:100%;  
    height:100%;  
    /*-webkit-font-smoothing:antialiased;  */
}  
body {  
    width:100%;  
    height:100%;  
  
} 

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}


#loading {
  position: absolute;left:0;top:0;width: 100%;height: 100%;background-color:rgba(193,193,193,.5);
  display: flex;justify-content: center;align-items:center;
  img {
    width: 100%;

  }
}
.router-link-active {color: red;}
</style>
