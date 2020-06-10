<template>
  <div class="item1">
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always" class="d-f j-c-s-a a-i-c">
          <drawingb></drawingb>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always" class="d-f j-c-s-a a-i-c">
          <drawinga></drawinga> 
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always" class="d-f j-c-s-a a-i-c">
          <drawingc></drawingc>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Drawinga from "../drawing/Drawinga";
import Drawingb from "../drawing/Drawingb";
import Drawingc from "../drawing/Drawingc";
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {
    Drawinga,
    Drawingb,
    Drawingc
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.item1{
  margin-top: 200px;
}
</style>