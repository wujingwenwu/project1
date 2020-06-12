<template>
 <div>
     <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">未读消息</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">已读消息</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">回收箱</el-tab-pane>
  
  </el-tabs>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     activeName: 'second'
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

</style>