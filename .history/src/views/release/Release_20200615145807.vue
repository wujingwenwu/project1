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
      <el-table-column prop="source" label="来源" width="150" align="center">
      <template>
      
      </template>
      </el-table-column>
      <el-table-column prop="star" label="重要性" width="180" align="center">
        <template slot-scope="scope">
          <el-rate v-model="scope.row.star*1 " disabled text-color="#ff9900"></el-rate>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="发布时间" width="180" align="center">
        <template slot-scope="scope">{{scope.row.date}}</template>
      </el-table-column>
      <el-table-column label="操作" align="center">
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
      
    ></el-pagination>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
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
            res.data.data.map(item => {
              item.star = item.star*1;
              item.date = dayjs(item.date).format("YYYY年MM月DD日HH时mm分ss秒");
            });

            this.$message.success("删除成功");
          }
          this.getData();
        })
        .catch(err => {
          console.log(err);
        });
    },
     handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    handleDelete(index, row) {
      this.arr.splice(index, 1);
    },
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