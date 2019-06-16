<template>
    <header class="header">
         <p class="header_left"><img :src="require('../static/imgs/back.png')"/></p> 
          <p class="header_cen"><slot></slot></p> 
         <p class="header_right"><img :src="require('../static/imgs/teach.png')"/> <i class="iconfont icon-fangdajing"></i></p> 
    </header>
    
</template>
<script>
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

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../static/scss/common.scss";
    header{
       width: 100%;
       height: pxTorem(27px);
       display: flex;
       font-size: pxTorem(16px);

    }
    .header_left{
        width: 15%;
        justify-content: center;
        display: flex;
        align-items: center;
        flex-shrink: 0;
        align-items: center;
        img{
            width: 50%;
            height: 60%;;
        }
    } 
    .header_cen{
        flex:1;
        justify-content: center;
        display: flex;
        align-items: center;
    }
    .header_right{
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: pxTorem(17px);
        img:nth-child(1){
            width: pxTorem(20px);
            height: pxTorem(20px);
            margin-right: pxTorem(20px)
        }
    }
   
</style>