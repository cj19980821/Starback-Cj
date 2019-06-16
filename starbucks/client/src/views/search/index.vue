<template>
  <div class="wrap">搜索</div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  created() {
    // request.get("/api/user/info").then(res=>{
    //   console.log('then',res)
    // })
    this.getUserInfo();
  },
  methods: {
    ...mapActions('user',['getUserInfo'])
  }

  // axios
  //   .get("/api/user/info", {
  //     headers: {
  //       token: ""
  //     }
  //   })
  //   .catch(error => {
  //     if (error.response.status === 401) {
  //       this.$router.push("/login");
  //     }
  //   });
};
</script>