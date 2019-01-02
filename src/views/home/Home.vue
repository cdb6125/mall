<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <span>首页</span>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import HomeSwiper from 'views/home/childComps/HomeSwiper'
  import {require} from "network/network";
  import {getMultiData,getProductData} from "network/home";

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    components: {
      NavBar,
      HomeSwiper
    },
    /*created() {
      axios.get('http://123.207.32.32:8000/home/multidata')
          .then(res => {
            console.log(res);
          }).catch(error => {
            console.log(error);
          })
    }*/
    created() {
      /*网络请求*/
      this._getMultiData()

      // this._getProductData()

     /* require({
        url: 'http://123.207.32.32:8000/home/data',
        params: {
          type: 'sell',
          page: 1
        }
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })*/

      //es5
      /*require({
        url: 'http://123.207.32.32:8000/home/multidata'
      },res => {
        console.log(res);
      },error => {
        console.log(error);
      })*/
    },
    methods: {
      _getMultiData() {
        getMultiData().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
          console.log(this.banner, this.recommend);
        })
      },
      _getProductData() {
        getProductData("sell",1).then(res => {
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #FFF;
  }
</style>
