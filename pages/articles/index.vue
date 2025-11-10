<template>
  <div class="inner-container" v-loading="loadRunning">
    <div class="mainContainer">
      <div class="marketplaceSection-head">
        <h3 class="marketplaceSection-title">Articles</h3>
      </div>
      <ul class="products">
        <li v-for="(model,index) in models" :key="index">
          <div class="product-item">
            <nuxt-link :to="`/articles/${model.slug}`">
              <div class="product-image" :style="`background-image: url(${model.image_full});`"></div> 
              <div class="product-title mb-2">{{ model.title }}</div>
              <div class="product-params">
                <div class="product-param">
                  <div class="product-param-label">{{model.created_at|date('DD.MM.YYYY')}}</div> 
                  <div class="product-param-value">{{model.description}}</div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </li>
      </ul>
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
      models: [],
    }
  },
  computed: {
  },
  mounted(){
    this.getModels();
  },
  methods: {
    ...mapActions({
      publisheds: 'articles/publisheds',
    }),
    getModels(){
      this.publisheds().then(res => {
        this.models = res['data'];
      })
    },
  }
}
</script>
<style scoped>
.inner-container{
  padding: 30px 0 50px;
}
.products li{
  flex: 0 0 25%!important;
}
@media screen and (max-width: 1100px) {
  .products li{
    flex: 0 0 33.333333%!important;
  }
}
@media screen and (max-width: 900px) {
  .products li{
    flex: 0 0 50%!important;
  }
}
@media screen and (max-width: 600px) {
  .products li{
    flex: 0 0 100%!important;
  }
}
</style>
