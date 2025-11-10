<template>
  <div class="marketplaceSection marketplaceSection-white" v-if="models && models.length">
    <div class="marketplace-container">
      <div class="marketplaceSection-head">
        <h3 class="marketplaceSection-title">Best Collections</h3>
      </div>
      <ul class="collections">
        <li v-for="(model,index) in models" :key="index">
          <nuxt-link :to="'/products?collection_id='+model.id">
            <div class="collection-item" v-if="model.products && model.products.length">
              <div class="collection-item-cell" v-for="(product,pIndex) in model.products" :key="pIndex" :class="{'collection-item-cell-full':pIndex==1}">
                <div class="imgBox" :style="`background-image: url(${product.image_full});`"></div>
              </div>
            </div>
          </nuxt-link>
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
      list: 'collections/list',
    }),
    getModels(){
      this.list().then(res => {
        this.models = res['data'];
      })
    }
  }
}
</script>
