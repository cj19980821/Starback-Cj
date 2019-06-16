<template>
  <div class="wrap">
    详情
  </div>
</template>
<script>
import request from "@/utils/request";
export default {
  props: {
    type: String,
    id: String
  },
  created() {
    // console.log(`/api/apply/${this.type}?applicationNumber=${this.id}`);
    this.getdata();
  },
  methods: {
    getdata() {
      request
        .get(`/api/apply/${this.type}`, {
          applicationNumber: this.id
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
