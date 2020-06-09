<template>
 <div>
   <el-container>
  <el-header class="d-f a-i-c ">
  
  <div class=" f-c-b pages">欢迎{{obj.username}}来到小爱后台管理系统</div>
  <div class="d-f pages">
   <div>{{item}},亲爱的{{obj.username}}</div>
   <div>上次登录时间：</div>
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
 export default {
   name:'',
   props:{

    },
   data () {
     return {
      obj:{}
   }
   },
   components: {

   },
   methods: {
        
   },
   mounted() {
       this.obj = JSON.parse(localStorage.getItem('user'))
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
.pages{
    padding: 0 10px;
}
</style>