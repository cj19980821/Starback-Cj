<template>
    <header>
        <span @click="$router.back()" v-if="back">
            <i class="iconfont icon-arrow-left backicon"></i>
        </span>
        <b class="title">{{$route.meta.title}}</b>
        <div>
            <slot></slot>
        </div>
    </header>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        back:{
            default:true
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/static/scss/common.scss";
header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: pxTorem(50px);
    line-height: pxTorem(50px);
  .backicon {
    font-size: pxTorem(25px);
    flex: 1;
  }
  .title {
      flex: 3;
      text-align: center;
  }
  >div {
      flex: 1;
  }
}
</style>
