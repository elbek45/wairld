<template>
  <div v-loading="loadRunning">
    <div class="inner-container">
      
      <h1 class="page-title mb-3">Products</h1>
      
      <div class="products-body">
        <ul class="products">
          <li v-for="(model,index) in models" :key="index">
            <div class="product-item">
              <nuxt-link :to="`/products/${model.id}`">
                <div class="product-image" :style="`background-image: url(${model.image_full});`"></div>
                <div class="text-center">
                  <div class="product-item-title">{{model.title}}</div>
                  <div class="product-item-txt" v-if="model.categories && model.categories.length">
                    <span v-for="(category,cindex) in model.categories" :key="cindex"><span v-if="cindex > 0">, </span> {{category.title}}</span>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </li>
        </ul>      
      </div>

    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      models: []
    }
  },
  computed: {
    queries(){
      return this.$route.query;
    }
  },
  mounted(){
    this.getModels();
  },
  methods: {
    ...mapActions({
      list:'products/list'
    }),
    getModels(){
      this.list(this.queries).then(res => {
        this.models = res['data']
      })
    }
  }
}
</script>
