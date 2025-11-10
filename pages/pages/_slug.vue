<template>
  <div class="inner-container" v-loading="loadRunning">
    <div class="whitepaper-container">
      <div class="whitepaper-content">
        <div class="whitepaper-content-min" v-if="model">
          <div class="whitepaper-content-head">
            <h1 class="whitepaper-content-title">{{model.title}}</h1>
          </div>
          <div class="whitepaper-content-txt" v-html="model.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  layout: 'default2',
  components:{
  },
  data(){
    return {
      model: null,
    }
  },
  computed: {
    modelSlug(){
      return this.$route.params['slug'];
    },
  },
  mounted(){
    this.getModel();
  },
  methods: {
    ...mapActions({
      bySlug: 'pages/bySlug',
    }),
    getModel(){
      this.bySlug(this.modelSlug).then(res => {
        this.model = res['data'];
      })
    },
  }
}
</script>
<style scoped>
.whitepaper-container{
  border-radius: 20px;
}
</style>
