<template>
  <div>
    <el-upload
      class="upload-file"
      action=""
      :show-file-list="false"
      :auto-upload="false"
      :drag="true"
      :on-change="beforeAvatarUpload"
      :accept="accept">
      <div class="upload-file__text" v-if="imageUrl != ''">{{imageUrl}}</div>
      <div class="upload-file__text" v-else>{{text}}</div>
    </el-upload>

    <a class="link" v-if="imageUrl != ''" @click="deleteFile">Удалить</a>
  </div>
</template>

<script>
export default {
  props: ['resBase64','accept'],
  data() {
    return {
      text: 'Загрузить',
      imageUrl:""
    };
  },
  created() {},
  methods: {
    beforeAvatarUpload(file, fileList) {
      file = file.raw;
      // const types = ['video/mp4','video/quicktime','video/x-msvideo','video/x-ms-wmv'];
      // if(types.indexOf(file.type) < 0){
      //     this.$message.error('Формат файла должно быть один из следующих (png, jpg, jpeg, mp4, mov, avi, wmv).');
      //     return 
      // }

      const isLt2M = file.size / 1024 / 1024 < 50;
      if(!isLt2M){
          this.$message.error('Размер файла не должно превышать 50мб.');
          return 
      }

      this.encodeImageFileAsURL(file).then(res => {
            this.imageUrl = file.name;
            if(this.resBase64){
              this.$emit('input', res)
            }else{
              this.$emit('input', file)
            }
        })
    },
    encodeImageFileAsURL(file) {
      return new Promise((resolve, reject) => {
        if (file) {
          var reader = new FileReader();
          reader.onloadend = function () {
            resolve(reader.result);
          }
          reader.readAsDataURL(file);
        }else{
            resolve("");
        }
      });
    },
    deleteFile(){
      this.imageUrl = '';
      if(this.resBase64){
        this.$emit('input', '')
      }else{
        this.$emit('input', '')
      }
    }
  }
};
</script>
<style>
  .upload-file .el-upload {
      display: block;
  }
  .upload-file .el-upload-dragger {
    width: 100%;
    border: 1px dashed #1A7F9F;
    background: none;
    height: 40px;
    color: #1A7F9F;
  }
  .upload-file .icon-upload {
    font-size: 37px;
  }
  .upload-file .upload-file__text{
    border-bottom: 1px solid;
    display: table;
    margin: 0 auto;
    margin-top: 5px;
  }
</style>  