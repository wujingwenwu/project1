<template>
 <div>
     <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="未读消息()" name="first"></el-tab-pane>
    <el-tab-pane label="已读消息()" name="second"></el-tab-pane>
    <el-tab-pane label="回收箱()" name="third"></el-tab-pane>
    <div class="tab">
    <div class="d-f">
     <div>[系统通知]该系统将于今晚凌晨2点到5点进行升级维护</div>
    
    </div>
    </div>
  
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