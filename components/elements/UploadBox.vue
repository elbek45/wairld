<template>
  <div>
    <el-upload
        class="uploader-box"
        action=""
        :show-file-list="false"
        :auto-upload="false"
        :drag="true"
        :on-change="beforeAvatarUpload"
        accept=".jpg, .png, .jpeg">
            <div class="uploader-box-img" v-if="imageUrl">
              <img :src="imageUrl" alt="">
            </div>
            <div class="uploader-box-img" v-else-if="oldimg">
              <img :src="oldimg" alt="">
            </div>
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
export default {
  props: ['oldimg', 'resBase64'],
  data() {
    return {
      imageUrl:"" 
    };
  },
  mounted() {
  },
  methods: {
    beforeAvatarUpload(file, fileList) {
        file = file.raw;
        const types = ['image/jpeg', 'image/png'];
        if(types.indexOf(file.type) < 0){
            this.$message.error('Формат файла должно быть один из следующих (JPG, JPEG, PNG).');
            return 
        }

        const isLt2M = file.size / 1024 / 1024 < 10;
        if(!isLt2M){
            this.$message.error('Размер файла не должно превышать 10мб.');
            return 
        }

        this.encodeImageFileAsURL(file).then(res => {
            this.imageUrl = res;
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
  }
};
</script>
<style>
.uploader-box .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: block;
}
.uploader-box .el-upload:hover {
    border-color: #409EFF;
}
.uploader-box-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.uploader-box .el-upload-dragger{
    width: 100%;
}
.uploader-box .avatar-cube{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}
.uploader-box .el-upload{
    display: block;
}
.uploader-box .el-upload-dragger{
  width: 100%;
  border: 1px dashed #1A7F9F;
  background: none;
  line-height: 160px;
}
.uploader-box .el-upload-dragger .icon-upload{
  font-size: 37px;
}
.uploader-box .el-upload-dragger .upload-file__text{
  border-bottom: 1px solid;
  display: table;
  margin: 0 auto;
}
.uploader-box-img{
  height: 100%;
}
.uploader-box-img img{
  max-height: 100%;
}
</style>
