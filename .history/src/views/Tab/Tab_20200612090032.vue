<template>
 <div>
     <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="未读消息()" name="first"></el-tab-pane>
    <el-tab-pane label="已读消息()" name="second"></el-tab-pane>
    <el-tab-pane label="回收箱()" name="third"></el-tab-pane>
  
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