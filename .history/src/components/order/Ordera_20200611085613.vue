<template>
 <div>
  <div class="d-f j-c-s-a order">
 
     
    
    <el-table
    :data="tableData"
    style="width: 100%"
    >
     
    <el-table-column
      prop="num"
      label="Order_No"
      width="300" align="center">
    </el-table-column>
    <el-table-column
      prop="price"
      label="Price"
      width="180" align="center">
    </el-table-column>
    
    <el-table-column prop="status" label="Status" align="center">
    <template  slot-scope="scope">
    <div v-if="scope.row.status===0">
    <el-tag type="danger" >pending</el-tag>
    </div>
    <div v-if="scope.row.status===1">
    <el-tag type="success">success</el-tag>
    </div>
   
    </template>
    </el-table-column> 
     </el-card>
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
     
      tableData:[]
   }
   },
   components: {
      
   },
   methods: {
       getdata(){
           axios.get('/api/orderData').then(res=>{
               this.tableData = res.data.data
              console.log(rse.data);
           }).catch(err=>{
               console.log(err);
           })
       },
       
       
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