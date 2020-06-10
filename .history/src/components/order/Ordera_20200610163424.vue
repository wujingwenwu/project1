<template>
 <div>
  <div class="d-f j-c-s-a order">
    <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="Order_No"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Price"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Status">
    </el-table-column>
  </el-table>
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
       getdata(){
           axios.get('/api/orderData').then(res=>{
              console.log(object);
           }).catch(err=>{
               console.log(err);
           })
       }
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
.order{
    color: rgb(172, 151, 149);
}
el-table .warning-row {
    background: oldlace;
  }
  .el-table .success-row {
    background: #f0f9eb;
  }
</style>