<template>
  <div>
    <el-table
      :data="arr.slice((currentPage - 1) * pageSize,currentPage*pageSize)"
      border
      style="width: 100%" 
    >
      <el-table-column prop="date" label="#" width="50" type="index" align="center"></el-table-column>
      <el-table-column prop="title" label="标题" width="150" align="center"></el-table-column>
      <el-table-column prop="author" label="作者" width="150" align="center"></el-table-column>
      <el-table-column prop="category" label="类目" width="150" align="center"></el-table-column>
      <el-table-column prop="source" label="来源" width="150" align="center"></el-table-column>
      <el-table-column prop="star" label="重要性" width="180" align="center"></el-table-column>
      <el-table-column prop="date" label="发布时间" width="180" align="center"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" type="success" @click="handleDeletes(scope.$index, scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="index"
    ></el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [],
      currentPage: 1,
      pageSize: 10
    };
  },
  components: {},
  methods: {
    getData() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          this.arr = res.data.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleDelete(index, row) {
      axios
        .post(`/api/article/delete`, {
          _id: row._id
        })
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success("删除成功");
          }
          this.getData();
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>