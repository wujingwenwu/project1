<template>
 <div>
   <el-table
    :data="arr.slice((currentPage - 1) * pageSize,currentPage*pageSize)"
    style="width: 100%">
    <el-table-column
      label="名称"
      width="450" align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.NAME }}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="商品编号"
      width="180"  align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.GOODS_SERIAL_NUMBER }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="原价"
      width="180"  align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.ORI_PRICE}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="现价"
      width="180"  align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE}}</span>
      </template>
    </el-table-column>

    
    <el-table-column label="操作"  align="center">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" class="release"><i class="iconfont icon-modify"></i>修改</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"><i class="iconfont icon-shanchu"></i>删除</el-button>
      </template>
    </el-table-column>
  </el-table>
   
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="694">
    </el-pagination>
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
     arr:[],
      currentPage: 1,
      pageSize: 10,
   }
   },
   components: {

   },
   methods: {
     getdata(){
         axios.get('/api/tableData').then(res=>{
            this.arr = res.data.data 
             console.log(res.data);
         }).catch(err=>{
             console.log(err);
         })
     },
      handleSizeChange(val) {
      this.pageSize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
    handleDelete(index,row){
      this.arr.splice(index,1)
    },
    
    handleEdit(index, row) {
        
         
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
.release{
  background: rgb(64, 158, 255);
  color: white;
}
</style>