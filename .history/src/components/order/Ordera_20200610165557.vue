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
    
     <!-- <div v-for="(item,index) in arr" :key="index"> -->
     <!-- </div> -->
    
  </el-table>
  </div>
  
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     arr:{}
   }
   },
   components: {

   },
   methods: {
       getdata(){
           axios.get('/api/orderData').then(res=>{
               this.arr = res.data.data
              console.log(rse.data);
           }).catch(err=>{
               console.log(err);
           })
       },
       tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
   },
   mounted() {
      this.getdata()
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