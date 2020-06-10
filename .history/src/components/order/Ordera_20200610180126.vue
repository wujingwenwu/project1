<template>
 <div>
  <div class="d-f j-c-s-a order">
    <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="num"
      label="Order_No"
      width="300">
    </el-table-column>
    <el-table-column
      prop="price"
      label="Price"
      width="180">
    </el-table-column>
    <template  slot-scope="scope">
    <el-table-column prop="status" label="Status">
    
    <el-tag type="success" v-if="tableData.stqatus===1">标签二</el-tag>
    
    
    </el-table-column> 
    </template>
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
       
       tableRowClassName() {
        if (status === 0) {
          this.status='pending';
        } else if(status === 1) {
          this.status= 'uccess-rows'
        }
        
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