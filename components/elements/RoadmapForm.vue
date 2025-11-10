<template>
  <div>
    <p>
      <nuxt-link to="/admin/roadmap">Back</nuxt-link>
    </p>
    <div class="table-head">
      <h1 class="pageTitle20">Roadmap</h1>
    </div>

    <el-form ref="form" class="form-type" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item label="Title" prop="title" :rules="[vRequired]">
        <el-input v-model="form.title" />
      </el-form-item>

      <el-form-item label="State" prop="state" :rules="[vRequired]">
        <el-select v-model="form.state">
          <el-option label="Done" :value="2"></el-option>
          <el-option label="We are here" :value="1"></el-option>
          <el-option label="Featured" :value="3"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="Period" prop="period" :rules="[vRequired]">
        <el-input v-model="form.period" />
      </el-form-item>

      <el-form-item label="Content" prop="content" :rules="[vRequired]">
        <Editor v-model="form.content" />
      </el-form-item>

      <div class="enterFormSubmit">
        <button class="btn btn-primary btn-large w-100" type="submit" v-loading="loadRunning">Submit</button>
      </div>

    </el-form>
    
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import Editor from '@/components/elements/Editor'
export default {
  components:{
    Editor
  },
  data(){
    return {
      form: {
        title: null,
        period: null,
        state: null,
        content: "",
      },
      parents: [],
    }
  },
  computed: {
    paramId(){
      return this.$route.params['id'];
    },
  },
  mounted(){
    this.getParents();
  },
  methods: {
    ...mapActions({
      list: 'roadmap/list',
      create: 'roadmap/create',
      update: 'roadmap/update',
    }),
    getParents(){
      this.list().then(res => {
        this.parents = res['data'];
        this.getModel();
      })
    },
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if(this.paramId){
            this.form['id'] = this.paramId;
            this.update(this.form).then(res => {
              this.$router.push('/admin/roadmap')
            })
          }else{
            this.create(this.form).then(res => {
              this.$router.push('/admin/roadmap')
            })
          }
        }
      })
    },
    getModel(){
      if(this.paramId){
        var model = this.parents.find(item => item.id == this.paramId);
        this.form = {...this.form, ...model}
      }
    }
  }
}
</script>
