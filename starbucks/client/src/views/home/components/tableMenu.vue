<template>
    <nav class="nav">
        <ul>
            <li
                v-for="(val) in navdata"
                :class="{
                active:index===val.status
            }"
                @click="change(val.status)"
                :key="val.status"
            >
                <i :class="'iconfont' + val.icon"></i>
                <span>{{val.title}}</span>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      navdata: [
        {
          title: "待处理",
          icon: "icon-05",
          status: 0
        },
        {
          title: "已发起",
          icon: "icon-07",
          status: 1
        },
        {
          title: "已处理",
          icon: "icon-success-fill",
          status: 2
        }
      ]
    };
  },
  methods: {
    change(status) {
      this.index = status
    // console.log(status)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/static/scss/common.scss";
.nav {
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      font-size: pxTorem(14px);
      color: #ccc;
      i {
        font-size: pxTorem(60px);
      }
      &.active {
        color: green;
      }
    }
  }
}
</style>
