<template>
  <div class="gloab-loading" v-if="show">
    <div class="el-loading-mask">
      <div class="el-loading-spinner">
        <svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg><!---->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false,
      },
    },
    data: () => ({
    }),
    methods: {
    }
  }
</script>

<style scoped>
.gloab-loading{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
}
</style>