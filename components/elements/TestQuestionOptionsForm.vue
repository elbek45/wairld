<template>
  <div>
    <h2 class="pageTitle20">Options</h2>

    <div class="row" v-for="(option,index) in form.options" :key="index">
      <div class="col-md-8">
        <el-form-item :label="`Option ${index+1}`" :prop="`options.${index}.title`" :rules="[vRequired]">
          <el-input v-model="option.title" />
        </el-form-item>
      </div>
      <div class="col-md-2">
        <button class="btn btn-danger btn-sm" type="button" @click="deleteOption(index)">Delete</button>
      </div>
    </div>
    
    <button class="btn btn-primary btn-sm" type="button" @click="addOption">Add option</button>
  </div>
</template>

<script>
export default {
  props: ["form"],
  components:{
  },
  data(){
    return {
      optionForm: {
        title: "",
      },
    }
  },
  computed: {
  },
  mounted(){
  },
  methods: {
    addOption(){
      this.form.options.push({...{}, ...this.optionForm});
    },
    deleteOption(index){
      this.form.options.splice(index, 1);
    }
  }
}
</script>
