<template>
 <div class="d-f j-c-s-a">
   <el-table
    :data="arr"
    style="width: 100%">
    <el-table-column
      label="名称"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.NAME }}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="商品编号"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.GOODS_SERIAL_NUMBER }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="原价"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.ORI_PRICE}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="现价"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE}}</span>
      </template>
    </el-table-column>

    
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" class="release"><i class="iconfont icon-modify"></i>修改</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"><i class="iconfont icon-shanchu"></i>删除</el-button>
      </template>
    </el-table-column>
  </el-table>
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
     arr:[]
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
.release{
  background: rgb(64, 158, 255);
  color: white;
}
</style>