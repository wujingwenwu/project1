<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always">
          <Drawingb></Drawingb>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <Drawinga></Drawinga>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <Drawingc></Drawingc>
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

</style>