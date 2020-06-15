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
          :rules="[{ required: true, message: '请输入名字', trigger: 'blur' }]" class="item3"
        >
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="类目" prop="region" :rules="[{ required: true, trigger: 'blur' }]" class="item2">
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
          <el-form-item label="来源" prop="region" :rules="[{ required: true, trigger: 'blur' }]" class="item2">
    <el-select v-model="ruleForm.region" placeholder="请选择">
      <el-option label="原创" value="shanghai"></el-option>
      <el-option label="转载" value="beijing"></el-option>
      <el-option label="与他人合作 " value="beijing"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="重要性" prop="region" :rules="[{ required: true, trigger: 'blur' }]" class="item2">
    <el-select v-model="ruleForm.region" placeholder="请选择">
      <el-option label="1" value="shanghai"></el-option>
      <el-option label="2" value="beijing"></el-option>
      <el-option label="3" value="beijing"></el-option>
       <el-option label="4" value="beijing"></el-option>
        <el-option label="5" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <div class="block m-l-10">
    <span class="demonstration f-s-14">发布时间</span>
    <el-date-picker
      v-model="value3"
      type="datetime"
      placeholder="选择日期时间"
      default-time="12:00:00" class="m-l-10">
    </el-date-picker>
  </div>
      </el-form>
      
    </div>
     <mavon-editor @change="markdownChange" @save="markdownSave" />
 <div v-html="htmlValue"></div>
  <el-button type="primary" class="publish3" v-model="clickItem">发布</el-button>
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
  methods: {
    clickItem(){
      axios.post("/api/api/article/create").then(res=>{
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
    },
       markdownChange(value, render) {
    this.htmlValue = render;
    },
    // 触发ctrl+s事件
    markdownSave(value, render) {
      this.htmlValue = render;
    }
  },
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
.publish3{
  position: absolute;
  left: 625px;
  margin-top: 10px;
}
.item{
  width: 150px;
}
.item2{
  margin-left: -30px;
  width: 300px;
}
.item3{
  width: 250px;
}

</style>