<template>
  <div class="push">
    <div class="publish">
      <div class="d-f publish1">
        <el-button type="danger">查看</el-button>
        <el-button type="primary">发布</el-button>
      </div>
    </div>
    <div class="m-t-30">
      <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item
          label="文章标题"
          prop="name"
          :rules="[{ required: true, message: '请输入标题', trigger: 'blur' }]"
        >
          <el-input></el-input>
        </el-form-item>
        <el-form-item
          label="文章摘要"
          prop="name"
          :rules="[{ required: true, message: '请输入内容', trigger: 'blur' }]"
        >
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="d-f">
      <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm  d-f">
        <el-form-item
          label="作者"
          prop="name"
          :rules="[{ required: true, message: '请输入名字', trigger: 'blur' }]"
        >
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="类目" prop="region" :rules="[{ required: true, trigger: 'blur' }]">
          <el-select v-model="ruleForm.region" placeholder="请选择">
            <el-option label="vue" value="shanghai"></el-option>
            <el-option label="React" value="beijing"></el-option>
             <el-option label="Nodejs" value="beijing"></el-option>
              <el-option label="性能优化" value="beijing"></el-option>
               <el-option label="JavaScript" value="beijing"></el-option>
                <el-option label="小程序" value="beijing"></el-option>
                <el-option label="工具类" value="beijing"></el-option>
                <el-option label="其他" value="beijing"></el-option>
          </el-select>
        </el-form-item>
          <el-form-item label="来源" prop="region" :rules="[{ required: true, trigger: 'blur' }]">
    <el-select v-model="ruleForm.region" placeholder="请选择">
      <el-option label="原创" value="shanghai"></el-option>
      <el-option label="转载" value="beijing"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      rules: "",
      ruleForm: {
        name: ""
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