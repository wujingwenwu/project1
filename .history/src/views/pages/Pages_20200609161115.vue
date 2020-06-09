<template>
 <div>
   <el-container>
  <el-header></el-header>
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

   }
   },
   components: {

   },
   methods: {

   },
   mounted() {

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
    height: 50px;
}
.el-aside{
    background: rgb(52, 64, 85);
    height: 650px;
}
</style>