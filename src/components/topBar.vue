<template>
      <div class="home">
        <slot name="left"></slot>
          <slot></slot>
        <label><slot name="right"></slot></label>
        <slot name="next"></slot>
      </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .home{width: 100%;}
  // .home{display: flex;width: 100%;justify-content:space-around;background-color: red;height: 0.6rem;align-items: center;color: #fff;}
//   .home-lab{
//     width: 70%;display: flex;justify-content: center;
//     a {
//       outline-style: none;
//       text-decoration: none;
//       color: #c3c3c3;
//       i {
//         font-size: 0.3rem;
//       }
//     }
//   }
</style>
