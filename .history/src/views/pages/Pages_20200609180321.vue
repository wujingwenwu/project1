<template>
 <div>
   <el-container>
  <el-header class="d-f a-i-c j-c-s-b">
  
  <div class=" f-c-b">欢迎{{obj.username}}来到小爱后台管理系统</div>
  <div class="d-f">
   <div class=" f-c-b">{{a}},亲爱的{{obj.username}}</div>
   <div class=" f-c-b">上次登录时间：{{time}}</div>
   </div>
  </el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main<router-view></router-view></el-main>
  </el-container>
</el-container>

 </div>
</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs'
 export default {
   name:'',
   props:{

    },
   data () {

     return {
      obj:{},
      time:'',
      a: {}    
   }
   },
   components: {

   },
   methods: {
        
   },
   mounted() {
       this.obj = JSON.parse(sessionStorage.getItem('user'))
       this.time=dayjs(this.obj.date).format('YYYY年MM月DD日HH时mm分ss秒')
       let a = dayjs(this.obj.date).format('HH')
       if (a>5 && a <=12) {
           this.a= '早上好'
       } else if(a >12 && a <= 14) {
           this.a= '中午好'
       } else if(a > 14 && a <= 18) {
           this.a= '下午好'
       } else{
           该睡觉了
       }
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.el-header{
    background: rgb(46, 94, 133);
    width: 100%;
    
}
.el-aside{
    background: rgb(52, 64, 85);
    height: 662px;
}

</style>