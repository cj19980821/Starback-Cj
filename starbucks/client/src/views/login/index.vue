<template>
  <div class="wrap">
    <el-head></el-head>
    <section class="login">
      <p>
        <input type="text" placeholder="手机号码" v-model="phone_value">
      </p>
      <p>
        <input type="text" placeholder="验证码" v-model="pwd_value">
      </p>
      <button class="loginbtn" @click="handlelogin">登录/注册</button>
    </section>
  </div>
</template>
<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      phone_value: "",
      pwd_value: "",
      phoneReg: /^1[3579]\d{9}$/
    };
  },
  methods: {
    handlelogin() {
      if (
        this.pwd_value.trim() !== "" &&
        this.phoneReg.test(this.phone_value)
      ) {
        //login
        request
          .post("/api/login", {
            phone: this.phone_value,
            password: this.pwd_value
          })
          .then(data => {
            let { token } = data;
            window.localStorage.setItem("token", token);
            this.$router.back();
          })
          .catch(error => {
            console.log(error);
            alert(error.response.data.message);
          });
      } else {
        alert("密码和手机号输入有误");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/static/scss/_minix.scss";
@import "@/static/scss/common.scss";

.wrap {
  font-size: pxTorem(14px);
}
.login {
  width: 100%;
  @include sizing;
  padding: pxTorem(15px);
  p {
    height: pxTorem(55px);
    line-height: pxTorem(55px);
    border-bottom: pxTorem(1px) solid #ccc;
  }
  .loginbtn {
    margin-top: pxTorem(72px);
    width: 100%;
    background: none;
    border: none;
    outline: none;
    height: pxTorem(40px);
    line-height: pxTorem(40px);
    background: #eee;
    color: #fff;
    border-radius: pxTorem(20px);
    font-size: pxTorem(14px);
    font-weight: bold;
  }
}
</style>
