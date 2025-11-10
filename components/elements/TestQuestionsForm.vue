<template>
  <div class="minContainer">
    <p>
      <nuxt-link to="/admin/test-questions">Back</nuxt-link>
    </p>
    <div class="table-head">
      <h1 class="pageTitle20">Test question</h1>
    </div>

    <el-form ref="form" class="form-type" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item label="Number" prop="number" :rules="[vRequired]">
        <el-input v-model="form.number" type="number" />
      </el-form-item>
      
      <el-form-item label="Title" prop="title" :rules="[vRequired]">
        <el-input v-model="form.title" />
      </el-form-item>
      
      <el-form-item label="Type" prop="type" :rules="[vRequired]">
        <el-select v-model="form.type">
          <el-option label="Checkbox" value="checkbox"></el-option>
          <el-option label="Radio button" value="radio"></el-option>
        </el-select>
      </el-form-item>

      <TestQuestionOptionsForm :form="form" class="mb-3" />

      <div class="enterFormSubmit">
        <button class="btn btn-primary btn-large w-100" type="submit" v-loading="loadRunning">Submit</button>
      </div>

    </el-form>
    
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import TestQuestionOptionsForm from '@/components/elements/TestQuestionOptionsForm'
export default {
  components:{
    TestQuestionOptionsForm
  },
  data(){
    return {
      form: {
        title: "",
        number: "",
        type: "",
        options: [],
      },
    }
  },
  computed: {
    paramId(){
      return this.$route.params['id'];
    },
  },
  mounted(){
    this.getModel();
  },
  methods: {
    ...mapActions({
      show: 'testQuestions/show',
      create: 'testQuestions/create',
      update: 'testQuestions/update',
    }),
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if(this.paramId){
            this.form['id'] = this.paramId;
            this.update(this.form).then(res => {
              this.$router.push('/admin/test-questions')
            })
          }else{
            this.create(this.form).then(res => {
              this.$router.push('/admin/test-questions')
            })
          }
        }
      })
    },
    getModel(){
      if(this.paramId){
        this.show(this.paramId).then(res => {
          this.form = {...this.form, ...res['data']}
        })
      }
    }
  }
}
</script>
