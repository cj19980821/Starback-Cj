<template>
    <div class="app">
        <div>加班</div>
        <div>休假</div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "@/static/scss/common.scss";
.app {
  width: 100%;
  height: pxTorem(40px);
  background: #eee;
  display: flex;
  flex-direction: row;
  div {
    width: 50%;
    height: pxTorem(40px);
    line-height: pxTorem(40px);
    background: green;
    color: #fff;
    text-align: center;
    font-size:pxTorem(15px);
  }
}
</style>
