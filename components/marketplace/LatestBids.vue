<template>
  <div class="marketplaceSection" v-if="models && models.length">
    <div class="marketplace-container">
      <div class="marketplaceSection-head">
        <h3 class="marketplaceSection-title">Latest Bids</h3>
      </div>

      <div class="nowrap-items" v-dragscroll.x>
        <ul class="products">
          <li v-for="(model,index) in models" :key="index">
            <div class="product-item">
              <nuxt-link :to="`/products/${model.id}`">
                <div class="product-image" :style="`background-image: url(${model.image_full});`"></div>
                <!-- <div class="product-owner">
                  <div class="product-owner-img" style="background-image: url('/img/owner.png');"></div>
                  <div class="product-owner-cont">
                    <div class="product-owner-fullname">InvisibleFriend #54</div>
                    <div class="product-owner-username">@INVISIBLE_FRIEND.CO</div>
                  </div>
                </div> -->
                <div class="product-params">
                  <div class="product-param old-price">
                    <div class="product-param-label">price</div>
                    <div class="product-param-value">{{model.swc_price}} SWC</div>
                  </div>
                  <!-- <div class="product-param">
                    <div class="product-param-label">on sale</div>
                    <div class="product-param-value">1.55 SWC</div>
                  </div> -->
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
import {mapActions} from 'vuex';
export default {
  data(){
    return {
      models: [],
    }
  },
  mounted(){
    this.getModels();
  },
  computed: {},
  methods:{
    ...mapActions({
      publisheds:'products/publisheds'
    }),
    getModels(){
      this.publisheds().then(res => {
        this.models = res['data']['data'];
      })
    }
  }
}
</script>
