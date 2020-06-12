<template>
 <div class="push">
   <div class="publish">
     <div class="d-f publish1">
       <el-button type="danger">查看</el-button>
        <el-button type="primary">发布</el-button>
     </div>
   </div>     
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
.publish{
    width: 1200px;
    height: 40px;
    background: #59a586;
    position: relative;
}
.publish1{
    position: absolute;
    right: 20px;
}
.push{
    height: 662px;
}

</style>