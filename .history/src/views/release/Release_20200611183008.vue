<template>
  <div>
    <el-table
      :data="arr.slice((currentPage - 1) * pageSize,currentPage*pageSize)"
      style="width: 100%"
    >
      <el-table-column label="名称" width="450" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.NAME }}</span>
        </template>
      </el-table-column>
      <el-table-column label="商品编号" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.GOODS_SERIAL_NUMBER }}</span>
        </template>
      </el-table-column>
      <el-table-column label="原价" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.ORI_PRICE}}</span>
        </template>
      </el-table-column>
      <el-table-column label="现价" width="180" align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.PRESENT_PRICE}}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="dialogVisible= true" class="release">
            <i class="iconfont icon-modify"></i>修改
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
            <i class="iconfont icon-shanchu"></i>删除
          </el-button>
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
      :total="694"
    ></el-pagination>
 
    <el-dialog title :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-from>
        <el-form-item label="名称">
          <el-input v-model="value1"></el-input>
        </el-form-item>
        <el-form-item label="现价">
          <el-input v-model="value2"></el-input>
        </el-form-item>
        <el-form-item label="原价">
          <el-input v-model="value3"></el-input>
        </el-form-item>
      </el-from>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
      pageSize: 10,
      value1: "",
      value2: "",
      value3: "",
      dialogVisible: false
    };
  },
  components: {},
  methods: {
    getdata() {
      axios
        .get("/api/tableData")
        .then(res => {
          this.arr = res.data.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
    handleDelete(index, row) {
      this.arr.splice(index, 1);
    },

    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  mounted() {
    this.getdata();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.release {
  background: rgb(64, 158, 255);
  color: white;
}
</style>