<template>
 <div>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="名称"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="商品编号"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="原价">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     arr:''
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

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>