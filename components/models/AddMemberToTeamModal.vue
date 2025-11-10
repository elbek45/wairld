<template>
  <el-dialog
    :visible.sync="outerVisible"
    width="560px"
    class="headerNone"
    append-to-body
    :before-close="handleClose">
    
    <el-form ref="form" class="form-type" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item label="Photo" prop="photo_file" :rules="[]">
        <UploadBox v-model="form.photo_file" :oldimg="oldPhoto" />
      </el-form-item>
      
      <el-form-item label="Full name" prop="full_name" :rules="[vRequired]">
        <el-input v-model="form.full_name" />
      </el-form-item>

      <el-form-item label="Position" prop="position" :rules="[vRequired]">
        <el-input v-model="form.position" />
      </el-form-item>

      <el-form-item label="Description" prop="description" :rules="[]">
        <el-input v-model="form.description" type="textarea" autosize />
      </el-form-item>
      
      <el-form-item label="Social networks" prop="social_networks" :rules="[]">
        <SocialNetworksField v-model="form.social_networks" />
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
import SocialNetworksField from '@/components/elements/SocialNetworksField'
import { mapActions } from 'vuex'
export default {
  props: ['model'],
  components: {
    UploadBox,
    SocialNetworksField
  },
  mixins: [modals],
  data() {
    return {
      form:{
        photo_file: "",
        full_name: "",
        position: "",
        description: "",
        social_networks: "",
      },
    };
  },
  computed: {
    oldPhoto(){
      if(this.model){
        return this.model.photo_full;
      }
      return null;
    }
  },
  created() {
    this.setData();
  },
  methods: {
    ...mapActions({
      create: 'team/create',
      update: 'team/update',
    }),
    setData(){
      if(this.model){
        this.form = {...this.form, ...this.model};
      }
    },
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if(this.model){
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