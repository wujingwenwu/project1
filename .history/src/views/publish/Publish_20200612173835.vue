<template>
  <div class="push">
    <div class="publish">
      <div class="d-f publish1">
        <el-button type="danger">查看</el-button>
        <el-button type="primary">发布</el-button>
      </div>
    </div>
    <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item
        label="文章标题"
        prop="name"
        :rules="[{ required: true, message: '请输入标题', trigger: 'blur' }]">
        <el-input></el-input>
      </el-form-item>
      <el-form-item
        label="文章摘要"
        prop="name"
        :rules="[{ required: true, message: '请输入内容', trigger: 'blur' }]">
        <el-input></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
        rules:'',
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.publish {
  width: 1200px;
  height: 40px;
  background: #59a586;
  position: relative;
}
.publish1 {
  position: absolute;
  right: 20px;
}
.push {
  height: 662px;
}
</style>