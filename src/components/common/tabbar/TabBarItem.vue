<template>
  <div id="tab-bar-item" @click="itemClick" >
    <div class="item-icon"><slot name="item-icon"></slot></div>
    <!--<div v-else class="item-active-icon"><slot name="item-active-icon"></slot></div>-->
    <div class="item-title" :style="activeStyle"><slot name="item-title"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String,
        request: true
      },
      activeColor: {
        type: String,
        default: '#ff5777'
      }
    },
    data() {
      return {
        id :0
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path.split('/')[0]) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path.split('/')[0]);
        this.$emit('select',this.path.split('/')[1])
      }
    }
  }
</script>

<style scoped>
  #tab-bar-item {
    flex: 1;
    font-size: 14px;
  }
  .item-icon img,.item-active-icon img{
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }

</style>
