<template>
  <div v-loading="loadRunning">
    <!-- <div class="page-head">
      <div class="inner-container">
        <h1 class="page-title">Inventory</h1>
      </div>
    </div> -->
    <!-- <div class="products-head-wrap">
      <div class="inner-container">
        <div class="products-head">
          <div class="products-head-search">
            <el-input 
              placeholder="Search NFT for exchange"
              v-model="filter.product_name">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>
        </div>
      </div>
    </div> -->
    <div class="inner-container">
      
      <h1 class="page-title mb-3">Inventory</h1>
        <!-- {{ models }} -->
      
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
      filter: {
        product_name: ""
      },
      models: []
    }
  },
  computed: {
    paramId(){
      return this.$route.params['id'];
    }
  },
  mounted(){
    this.getModels();
  },
  methods: {
    ...mapActions({
      byCreatorId:'products/byCreatorId'
    }),
    getModels(){
      this.filter['id'] = this.paramId;
      this.byCreatorId(this.filter).then(res => {
        this.models = res['data']
      })
    }
  }
}
</script>
