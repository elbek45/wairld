<template>
  <el-dialog
    :visible.sync="outerVisible"
    width="560px"
    class="headerNone"
    append-to-body
    :before-close="handleClose">
    
    <el-form ref="form" class="form-type2" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item label="Category" prop="category_id" :rules="[]">
        <el-select v-model="form.category_id" multiple>
          <el-option label=" - " :value="null"></el-option>
          <el-option v-for="(item,index) in categories" :key="index" :label="item.title" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="Logo" prop="logo_file" :rules="model?[]:[vRequired]">
        <UploadBox v-model="form.logo_file" :oldimg="oldLogo" />
      </el-form-item>

      <el-form-item label="Title" prop="title" :rules="[vRequired]">
        <el-input v-model="form.title" />
      </el-form-item>

      <div class="enterFormSubmit">
        <button class="btn btn-primary btn-large w-100" type="submit" v-loading="loadRunning">Submit</button>
      </div>

    </el-form>
    
  </el-dialog>
</template>

<script>
import modals from "@/mixins/modals";
import UploadBox from "@/components/elements/UploadBox"
import { mapActions } from 'vuex'
export default {
  props:['model','categories'],
  components: {
    UploadBox,
  },
  mixins: [modals],
  data() {
    return {
      form:{
        category_id: [],
        logo_file: null,
        title: null,
      },
    };
  },
  computed: {
    oldLogo(){
      return this.model?this.model.logo_full:null;
    },
  },
  created() {
    if(this.model){
      this.form = {...this.form, ...this.model}
    }
  },
  methods: {
    ...mapActions({
      create: 'brands/create',
      update: 'brands/update',
    }),
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if(this.model){
            this.form['id'] = this.model.id;
            this.update(this.form).then(res => {
              this.$emit('submited', res);
              this.close();
            })
          }else{
            this.create(this.form).then(res => {
              this.$emit('submited', res);
              this.close();
            })
          }
        }
      })
    },
  },
};
</script>