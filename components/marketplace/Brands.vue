<template>
  <div class="marketplaceSection">
    <div class="marketplace-container">
      <div class="marketplaceSection-head">
        <h3 class="marketplaceSection-title">Brands</h3>
      </div>

      <ul class="brands">
        <li v-for="(model,index) in models" :key="index">
          <div class="brand-item">
            <nuxt-link :to="'/products?brand_id='+model.id">
              <div class="brand-item-image">
                <img :src="model.logo_full" alt="">
              </div>
              <div class="brand-item-title">{{model.title}}</div>
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
  data(){
    return {
      models: []
    }
  },
  mounted(){
    this.getModels();
  },
  methods: {
    ...mapActions({
      list: 'brands/list',
    }),
    getModels(){
      this.list().then(res => {
        this.models = res['data'];
      })
    },
  }
}
</script>
