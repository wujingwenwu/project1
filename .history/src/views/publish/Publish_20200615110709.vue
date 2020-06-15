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
        <el-form-item label="文章标题" prop="title" :rules="[{ required: true}]">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item  label="文章摘要" prop="article" :rules="[{ required: true}]">
          <el-input v-model="ruleForm.abstract"></el-input>
        </el-form-item>
      </el-form>

    </div>
    <div class="d-f">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        label-width="100px"
        class="demo-ruleForm d-f publish2"
      >
        <el-form-item label="作者" prop="author" :rules="[{ required: true}]" class="item3">
          <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>
        <el-form-item
          :model="ruleForm"
          label="类目"
          prop=" category"
          :rules="[{ required: true, trigger: 'blur' }]"
          class="item2"
        >
          <el-select v-model="ruleForm.category" placeholder="请选择">
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
        <el-form-item
          :model="ruleForm"
          label="来源"
          prop="source"
          :rules="[{ required: true, trigger: 'blur' }]"
          class="item2"
        >
          <el-select v-model="ruleForm.source" placeholder="请选择">
            <el-option label="原创" value="shanghai"></el-option>
            <el-option label="转载" value="beijing"></el-option>
            <el-option label="与他人合作 " value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          :model="ruleForm"
          label="重要性"
          prop="star"
          :rules="[{ required: true, trigger: 'blur' }]"
          class="item2"
        >
          <el-select v-model="ruleForm.star" placeholder="请选择">
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
            v-model="ruleForm.date"
            type="datetime"
            placeholder="选择日期时间"
            prop="date"
            default-time="12:00:00"
            class="item m-l-10"
          ></el-date-picker>
        </div>
      </el-form>
    </div>
    <mavon-editor prop="text" />

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
      ruleForm:'',
      ruleForm: {
        text: "",
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
        .post("/api/article/create")
        .then(res => {
          title: this.ruleForm.title;
          abstract: this.ruleForm.abstract;
          text: this.ruleForm.text;
          category: this.ruleForm.category;
          source: this.ruleForm.source;
          star: this.ruleForm.star;
          date: this.ruleForm.date;

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