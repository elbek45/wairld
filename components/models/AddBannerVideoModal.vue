<template>
  <el-dialog
    :visible.sync="outerVisible"
    width="560px"
    class="headerNone"
    append-to-body
    :before-close="handleClose">
    
    <el-form ref="form" class="form-type" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item label="Video" prop="file" :rules="[]">
        <UploadFile v-model="form.file" />
      </el-form-item>

      <div class="enterFormSubmit">
        <button class="btn btn-primary btn-large w-100" type="submit" v-loading="loadRunning">Submit</button>
      </div>

    </el-form>
    
  </el-dialog>
</template>

<script>
import modals from "@/mixins/modals";
import UploadFile from "@/components/elements/UploadFile"
import { mapActions } from 'vuex'
export default {
  components: {
    UploadFile,
  },
  mixins: [modals],
  data() {
    return {
      form:{
        file: "",
        key: "banner_video",
      },
    };
  },
  computed: {
  },
  created() {
  },
  methods: {
    ...mapActions({
      create: 'mediaFiles/create',
    }),
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.create(this.form).then(res => {
            this.$emit('submited', res);
            this.close();
          })
        }
      })
    },
  },
};
</script>