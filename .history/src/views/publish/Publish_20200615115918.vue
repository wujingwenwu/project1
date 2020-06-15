<template>
  <div class="push">
    <div class="publish">
      <div class="d-f publish1">
        <el-button type="danger">查看</el-button>
        <el-button type="primary" @click="pub">发布</el-button>
      </div>
    </div>
    <div class="m-t-30">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item
          label="文章标题"
          prop="title"
          :rules="[{ required: true, message: '请输入标题', trigger: 'blur' }]"
        >
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item
          label="文章摘要"
          prop="abstract"
          :rules="[{ required: true, message: '请输入摘要', trigger: 'blur' }]"
        >
          <el-input v-model="ruleForm.abstract"></el-input>
        </el-form-item>
      </el-form>
    </div>
    
    </div>
    <mavon-editor v-model="text" />

    <el-button type="primary" class="publish3" @click="pub">发布</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      text: "",
      ruleForm: {
        title: "",
        abstract: "",
        category: "",
        source: "",
        star: "",
        date: ""
      }
    };
  },
  components: {},
  methods: {
    pub() {
      axios
        .post(`/api/article/create `, {
          title: this.ruleForm.title,
          abstract: this.ruleForm.abstract,
          text: this.text,
          category: this.ruleForm.category,
          source: this.ruleForm.source,
          star: this.ruleForm.star,
          date: this.ruleForm.date
        })
        .then(res => {
          if(res.data.code===200){
             this.$message.success("发布成功");
          }else{
            this.$message.error("发布失败");
          }
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.publish {
  width: 1260px;
  height: 40px;
  background: #59a586;
  position: relative;
  margin-left: 20px;
}
.publish1 {
  position: absolute;
  right: 20px;
}
.push {
  height: 662px;
}
.publish2 {
  margin-left: -25px;
}
.publish3 {
  position: absolute;
  left: 625px;
  margin-top: 10px;
}
.item {
  width: 150px;
}
.item2 {
  margin-left: -30px;
  width: 300px;
}
.item3 {
  width: 250px;
}
</style>