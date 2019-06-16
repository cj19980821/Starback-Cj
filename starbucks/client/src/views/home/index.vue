<template>
  <div class="wrap">
    <el-head>
      <router-link to="/search" class="search">
        <i class="iconfont icon-fangdajing"></i>
      </router-link>
    </el-head>
    <tableMenu @change="tableMenu"/>
    <tableTitle @change="tableTitle"/>
    <todoList :listdata="todoList"/>
  </div>
</template>
<script>
// import axios from "axios";
import request from "@/utils/request";
import tableMenu from "./components/tableMenu";
import tableTitle from "./components/tableTitle";
import todoList from "./components/todolist";
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      dataOpions: {
        page: 1,
        pageSize: 10,
        create_at: 0,
        type: "overtime", //加班
        status: 0 //待处理
      },
      todoList: []
    };
  },

  created() {
    this.getUserInfo();
    this.getTasklist();
    // console.log(this.$router);
    // console.log(this.$route);
  },
  components: {
    tableMenu,
    tableTitle,
    todoList
  },
  methods: {
    ...mapActions('user',['getUserInfo']),
    getTasklist() {
      request.get("/api/task/list", this.dataOpions).then(res => {
        // console.log(res.data);
        this.todoList = res.data;
      });
    },
    tableMenu(status) {
      this.dataOpions.status = status;
      this.getTasklist();
    },
    tableTitle(type) {
      this.dataOpions.type = type;
      this.getTasklist();
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/static/scss/common.scss";
.search {
  i {
    font-size: pxTorem(25px);
  }
}
.wrap {
  display: flex;
  flex-direction: column;
}
</style>
