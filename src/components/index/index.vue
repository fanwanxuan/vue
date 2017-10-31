<template>
  <div class='index'>
    <!-- lunbo -->
    <el-carousel :interval="5000" arrow="always" trigger="">
      <el-carousel-item v-for="(item,index) in banner" :key="index">
        <img :src="item.img">
      </el-carousel-item>
    </el-carousel>
    <!-- lunbo -->
    <!-- xiangmu -->
    <div class='indexPackage'>
      <div class='indexPackageList'>
        <div class='padding10'>
          <span class='left-side'>0000</span>
          <span class='content'>0000</span>
        </div>
      </div>
    </div>
    <!-- xiangmu -->
  </div>
</template>

<script>
  import banner from '../../assets/img/index/banner.png'
  export default {
    name: 'index',
    data() {
      return {
        banner: [{
            img: banner
          }, {
            img: banner
          },
          {
            img: banner
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .index {
    width: 100%;
    height: 100%;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }


  /* 首页项目列表 */

  .indexPackage {
    .indexPackageList {}
  }

  .padding10 {
    padding: 1% 0;
    flex-direction: column;
    display: flex;
    height: 20px;
    .left-side,
    .right-side {
      width: 33%;
      height: auto;
      padding: 1%;
    }
    .content {
      flex-grow: 1;
      padding: 1%;
      height: auto;

    }
  }
</style>
