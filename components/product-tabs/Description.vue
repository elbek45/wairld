<template>
  <div class="product-page-tabs-body-inner">
    <div class="title-24">Description</div>
    <div class="txt-16" v-html="model.description"></div>
  </div>
</template>

<script>
export default {
  props: ["model"],
  data(){
    return {
    }
  },
  methods: {
  }
}
</script>
