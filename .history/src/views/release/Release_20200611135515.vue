<template>
 <div>
     <el-table
    :data="arr"
    style="width: 100%"
    row-key="id"
    border
    lazy
    
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="date"
      label="日期"
      width="40">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
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
         axios.get('/api/article/allArticle').then(res=>{
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