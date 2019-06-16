<template>
  <ul class="list">
    <li
      v-for="item in listdata"
      :key="item.applicationNumber"
      @click="todetail(item.list_type,item.applicationNumber)"
    >
      <!-- {{item}} -->
      <div class="nav">
        <div>
          <span class="wen">{{item.applicationNumber}}</span>
        </div>
        <div>
          <span id="icon" class="icon_discovery icon iconfont">&#xeb97;</span>
          <span class="wen">待审批</span>
        </div>
      </div>
      <div class="content">
        <div>申请人:
          <span>{{item.nickname}}</span>
        </div>
        <div>加班类型:
          <span>{{item.describes}}</span>
        </div>
        <div>加班时间:
          <span>{{item.startTime}}</span>
        </div>
        <div>加班时数:
          <span>{{item.type}}</span>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    listdata: Array
  },
  methods: {
    todetail(type, id) {
      this.$router.push({
        name: "detail",
        params: {
          type,
          id
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/static/scss/common.scss";
.list {
  width: 100%;
  flex: 1;
  overflow: auto;
  /* margin-top: pxTorem(15px);
  background: rgba(0, 0, 0, 0.5); */
}
.nav {
  display: flex;
  justify-content: space-between;
  margin: pxTorem(10px) 0;
}
#icons {
  font-size: pxTorem(23px);
}
.wen {
  font-size: pxTorem(18px);
}
.content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.content div {
  width: 45%;
  margin: pxTorem(10px) pxTorem(5px);
  font-size: pxTorem(15px);
}
.items {
  margin: pxTorem(20px) 0;
  background: #fff;
  padding: 0pxtorem (10px);
}
</style>
