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
      <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm  d-f publish2">
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
      <el-option label="与他人合作 " value="beijing"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="重要性" prop="region" :rules="[{ required: true, trigger: 'blur' }]" style="width: 100px;">
    <el-select v-model="ruleForm.region" placeholder="请选择">
      <el-option label="1" value="shanghai"></el-option>
      <el-option label="2" value="beijing"></el-option>
      <el-option label="3" value="beijing"></el-option>
       <el-option label="4" value="beijing"></el-option>
        <el-option label="5" value="beijing"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="发布时间" required>
    
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="选择日期时间" v-model="ruleForm.date2" style="width: 150px;"></el-time-picker>
      </el-form-item>
    </el-col>
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
.publish2{
  margin-left: -25px;
}
</style>