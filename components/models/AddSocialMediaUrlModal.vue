<template>
  <el-dialog
    :visible.sync="outerVisible"
    width="400px"
    class="headerNone"
    append-to-body
    :before-close="handleClose">
    
    <el-form ref="form" class="form-type mt-3" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item prop="link" :rules="[vRequired, vUrl]">
        <el-input v-model="form.link" placeholder="link" type="url" />
      </el-form-item>

      <button class="btn btn-primary btn-large w-100" type="submit">Submit</button>

    </el-form>
    
  </el-dialog>
</template>

<script>
import modals from "@/mixins/modals";
export default {
  mixins: [modals],
  data() {
    return {
      form:{
        link: "",
      },
    };
  },
  computed: {
  },
  created() {
  },
  methods: {
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$emit('submited', this.form.link); 
        }
      })
    },
  },
};
</script>