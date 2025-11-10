<template>
  <el-dialog
    :visible.sync="outerVisible"
    width="560px"
    class="headerNone"
    append-to-body
    :before-close="handleClose">
    
    <el-form ref="form" class="form-type" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item label="File" prop="file" :rules="model?[]:[vRequired]">
        <UploadBox v-model="form.file" :oldimg="oldImage" />
      </el-form-item>

      <el-form-item label="Title" prop="title" :rules="[vRequired]">
        <el-input v-model="form.title" />
      </el-form-item>

      <el-form-item label="Description" prop="description" :rules="[vRequired]">
        <el-input v-model="form.description" type="textarea" autosize />
      </el-form-item>

      <el-form-item label="Link" prop="link" :rules="[vRequired]">
        <el-input v-model="form.link" />
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
  props:['model'],
  components: {
    UploadBox,
  },
  mixins: [modals],
  data() {
    return {
      form:{
        file: "",
        title: "",
        description: "",
        link: "",
        key: "link_block",
      },
    };
  },
  computed: {
    oldImage(){
      return this.model?this.model.file_full_path:null;
    }
  },
  created() {
    if(this.model){
      this.form = {...this.form, ...this.model}
    }
  },
  methods: {
    ...mapActions({
      create: 'textBlocks/create',
      update: 'textBlocks/update',
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