<template>
    <div class="container">
        <headers>加班/休假</headers>
        <nav class="nav">
            <div>
                <span class="iconfont icon-naozhong"></span>
                <span class="nav-tit">待处理</span>
            </div>
            <div>
                <span class="iconfont icon-07"></span>
                <span class="nav-tit">已发起</span>
            </div>
            <div>
                <span class="iconfont icon-yibangding"></span>
                <span class="nav-tit">已处理</span>
            </div>
        </nav>
        <div class="imgs"></div>
        <main>
            <div class="main">
                <span class="active">加班</span>
                <span>休假</span>
                <p>
                    <img src="../static/imgs/3.jpg" alt="">
                </p>
                <p>
                    <img src="../static/imgs/5.jpg" alt="">
                </p>
            </div>
            <div class="onrs">
                <p class="ts">
                    <span>OT2019021222</span>
                    <span>
                        <img src="../static/imgs/6.jpg" alt="">
                        <span>待审批</span>
                    </span>
                </p>
                <p class="tss">
                    <span>申请人</span>
                    <span>CICI wang</span>
                    <span>加班类型</span>
                    <span>工作日加班</span>
                </p>
                <p class="tsss">
                    <span class="ri">加班日</span>
                    <span class="shu">2019-02-02</span>
                    <span class="shu">加班时数</span>
                    <span class="shu">2.5</span>
                </p>
            </div>
            <div class="onrs">
                <p class="ts">
                    <span>OT2019021222</span>
                    <span>
                        <img src="../static/imgs/6.jpg" alt="">
                        <span>待审批</span>
                    </span>
                </p>
                <p class="tss">
                    <span>申请人</span>
                    <span>CICI wang</span>
                    <span>加班类型</span>
                    <span>工作日加班</span>
                </p>
                <p class="tsss">
                    <span class="ri">加班日</span>
                    <span class="shu">2019-02-02</span>
                    <span class="shu">加班时数</span>
                    <span class="shu">2.5</span>
                </p>
            </div>
            <div class="onrs">
                <p class="ts">
                    <span>OT2019021222</span>
                    <span>
                        <img src="../static/imgs/6.jpg" alt="">
                        <span>待审批</span>
                    </span>
                </p>
                <p class="tss">
                    <span>申请人</span>
                    <span>CICI wang</span>
                    <span>加班类型</span>
                    <span>工作日加班</span>
                </p>
                <p class="tsss">
                    <span class="ri">加班日</span>
                    <span class="shu">2019-02-02</span>
                    <span class="shu">加班时数</span>
                    <span class="shu">2.5</span>
                </p>
            </div>
            <div class="onrs">
                <p class="ts">
                    <span>OT2019021222</span>
                    <span>
                        <img src="../static/imgs/6.jpg" alt="">
                        <span>待审批</span>
                    </span>
                </p>
                <p class="tss">
                    <span>申请人</span>
                    <span>CICI wang</span>
                    <span>加班类型</span>
                    <span>工作日加班</span>
                </p>
                <p class="tsss">
                    <span class="ri">加班日</span>
                    <span class="shu">2019-02-02</span>
                    <span class="shu">加班时数</span>
                    <span class="shu">2.5</span>
                </p>
            </div>
            <div class="onrs">
                <p class="ts">
                    <span>OT2019021222</span>
                    <span>
                        <img src="../static/imgs/6.jpg" alt="">
                        <span>待审批</span>
                    </span>
                </p>
                <p class="tss">
                    <span>申请人</span>
                    <span>CICI wang</span>
                    <span>加班类型</span>
                    <span>工作日加班</span>
                </p>
                <p class="tsss">
                    <span class="ri">加班日</span>
                    <span class="shu">2019-02-02</span>
                    <span class="shu">加班时数</span>
                    <span class="shu">2.5</span>
                </p>
            </div>
            <button class="btn">+发起任务</button>
        </main>
    </div>
</template>
<script>
import headers from "../components/headers.vue";
export default {
  props: {},
  components: {
    headers
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
@import "../static/scss/common.scss";
@import "../static/scss/home.scss";
.nav {
  margin-top: 30px;
}
.ts {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
.tss {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}
.btn {
  width: 260px;
  height: 70px;
  background: #0b6242;
  border-radius: 15px;
  color: #fff;
  font-size: 30px;
  position: absolute;
  right: 5%;
  bottom: 3%;
}
.tsss {
  margin-top: 10px;
  .ri {
    margin-left: 20px;
  }
  .shu {
    margin-left: 65px;
  }
}

.ts img {
  width: 30px;
  height: 30px;
}
.imgs {
  width: 100%;
  height: 5px;
  border: 1px solid #eee;
  background: #eee;
}
.onrs {
  margin-top: 30px;
  width: 100%;
  height: 200px;
  font-size: 30px;
  border-bottom: 15px solid #eee;
}
.main {
  width: 100%;
  height: 60px;
  margin-top: 30px;
  display: flex;
  text-align: center;
  justify-content: space-between;
}
.main span {
  width: 200px;
  height: 50px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 50px;
  border-radius: 15px;
}
.active {
  background: #096242;
  color: #fff;
}
.main p img {
  width: 55px;
  height: 55px;
}
</style>