<template>
<div id="app">
  <router-view/>
</div>
   
</template>
<script>
import request from './utils/request.js';
export default {
  props:{

  },
  components:{

  },
  data(){
    return {
        
    }
  },
  computed:{

  },
  methods:{

  },
  created(){
    // console.log('app created')
    // request.get('/api/user/info').then(res=>{
    //   console.log(res)
    // }).catch(error=>{
    //   console.log(error)
    // })
    
    // axios.get('/api/user/info',{
    //   header:{//请求头
    //     token: //
    //   },
    //   params:{//请求体

    //   }
    // })
  },
  mounted(){

  }
}
</script>
<style lang="scss">
  @import "./static/scss/common.scss";
</style>