<template>
 <div>
    <el-col :span="8">
    <el-card shadow="always" class="d-f j-c-c a-i-c">
        <div class="drawing">
    <ve-pie :data="chartDatas"></ve-pie>
       </div>
    </el-card>
  </el-col>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
      chartData: {
          columns: ['sales', 'ministration', 'techology','delelopmer','marketing'],
          rows: []
   },
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