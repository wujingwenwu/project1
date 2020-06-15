<template>
  <div>
    <el-table :data="arr" border style="width: 100%">
      <el-table-column prop="date" label="#" width="50" type="index"></el-table-column>
      <el-table-column prop="title" label="标题" width="180"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="author" label="类目"></el-table-column>
      <el-table-column prop="author" label="来源"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: []
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