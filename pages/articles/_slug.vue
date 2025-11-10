<template>
  <div class="inner-container" v-loading="loadRunning">
    <div class="whitepaper-container">
      <div class="whitepaper-content">
        <div class="whitepaper-content-min" v-if="model">
          <div class="mb-3">
            <nuxt-link to="/articles" class="link linkBack">
              <i class="icon-arrow-prev"></i>  
              <span>View all</span>
            </nuxt-link>
          </div>

          <div class="whitepaper-content-head">
            <h1 class="whitepaper-content-title">{{model.title}}</h1>
          </div>
          <div class="whitepaper-content-txt" v-html="model.content"></div>
          <div class="whitepaper-footer">
            <div class="whitepaper-updated">{{model.updated_at|date('DD.MM.YYYY')}}</div>
          </div>
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
      bySlug: 'articles/bySlug',
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
