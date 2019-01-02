<template>
    <tab-bar>
      <tab-bar-item path="home/0" @select="changePath">
        <img slot="item-icon" :src="!(id === 0) ? imgUrl1 : imgUrl2" alt="">
        <!--<img slot="item-active-icon" src="~assets/img/tabbar/home_active.svg" alt="">-->
        <span slot="item-title">首页</span>
      </tab-bar-item>
      <tab-bar-item path="category/1" @select="changePath">
        <img slot="item-icon" :src="!(id === 1) ? imgUrl3 : imgUrl4" alt="">
        <!--<img slot="item-icon" :src="imgUrl3" alt="">
        <img slot="item-active-icon" src="~assets/img/tabbar/category_active.svg" alt="">-->
        <span slot="item-title">分类</span>
      </tab-bar-item>
      <tab-bar-item path="shopcart/2" @select="changePath">
        <img slot="item-icon" :src="!(id === 2) ? imgUrl5 : imgUrl6" alt="">
       <!-- <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-active-icon" src="~assets/img/tabbar/shopcart_active.svg" alt="">-->
        <span slot="item-title">购物车</span>
      </tab-bar-item>
      <tab-bar-item path="profile/3" @select="changePath">
        <img slot="item-icon" :src="!(id === 3) ? imgUrl7 : imgUrl8" alt="">
       <!-- <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-active-icon" src="~assets/img/tabbar/profile_active.svg" alt="">-->
        <span slot="item-title">我的</span>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar';
  import TabBarItem from 'components/common/tabbar/TabBarItem';
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    },
    data() {
      return {
        id :0,
        imgUrl1 :require('../../assets/img/tabbar/home.svg'),
        imgUrl2 :require('../../assets/img/tabbar/home_active.svg'),
        imgUrl3 :require('../../assets/img/tabbar/category.svg'),
        imgUrl4 :require('../../assets/img/tabbar/category_active.svg'),
        imgUrl5 :require('../../assets/img/tabbar/shopcart.svg'),
        imgUrl6 :require('../../assets/img/tabbar/shopcart_active.svg'),
        imgUrl7 :require('../../assets/img/tabbar/profile.svg'),
        imgUrl8 :require('../../assets/img/tabbar/profile_active.svg'),
      }
    },
    methods: {
      changePath(newTd) {
        this.id = parseInt(newTd);
        // console.log(this.id);
      }
    }
  }
</script>

<style scoped>

</style>
