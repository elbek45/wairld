<template>
  <div v-loading="loadRunning">
    <div class="mdContainer">
      <div class="product-page" v-if="model">
        <div class="product-page-col1">
          <div class="product-page-image">
            <ClientOnly>
              <Object3d v-if="model.object3d_full" :objectpath="model.object3d_full" />
              <img v-else :src="model.image_full" alt="">
            </ClientOnly>
          </div>
          <Tabs :model="model" />
          <div class="product-page-tags" v-if="model.tags && model.tags.length">
            <a href="#" v-for="(tag,index) in model.tags" :key="index">#{{tag}}</a>
          </div>
        </div>
        <div class="product-page-col2">
          <div class="product-info">
            <div class="product-owner pe-4 ps-4" v-if="model.owner">
              <div class="product-owner-img" :style="`background-image: url(${model.owner.photo_full});`"></div>
              <div class="product-owner-cont">
                <div class="product-owner-fullname">{{model.owner.full_name}}</div>
              </div>
            </div>
            <div class="product-owner pe-4 ps-4" v-else>
              <div class="product-owner-img" style="background-image: url('/img/owner.png');"></div>
              <div class="product-owner-cont">
                <div class="product-owner-fullname">Wairld</div>
              </div>
            </div>
            <div class="product-info-card">
              <h1 class="product-title">{{model.title}}</h1>
            </div>
            <div class="product-owner pe-4 ps-4 mb-5 c-pointer" v-if="model.creator" @click="$router.push(`/creator/${model.creator.id}`)">
              <div class="product-owner-img" :style="`background-image: url(${model.creator.photo_full});`"></div>
              <div class="product-owner-cont">
                <div class="product-owner-fullname">{{model.creator.full_name}}</div>
                <div class="product-owner-username">Creator</div>
              </div>
            </div>
            <div class="product-owner pe-4 ps-4 mb-5" v-else>
              <div class="product-owner-img" style="background-image: url('/img/owner.png');"></div>
              <div class="product-owner-cont">
                <div class="product-owner-fullname">Wairld</div>
                <div class="product-owner-username">Creator</div>
              </div>
            </div>
            <div class="product-info-card pt-5 ps-5 pe-5 pb-4">
              <div class="product-price-label">Price</div>
              <div class="product-price-swc">{{model.swc_price}} SWC</div>
              <!-- <div class="product-price mb-2">511$</div>
              <div class="product-price text-center mb-3">last price 13 swc</div> -->
              <!-- <button class="btn btn-primary w-100 mb-3">Buy now</button> -->
              <!-- <div class="row">
                <div class="col-md-8">
                  <button class="btn btn-white w-100">Place bid</button>
                </div>
                <div class="col-md-4">
                  <button class="btn btn-white w-100 p-btn-10">
                    <img src="/img/icons/basket.svg" alt="">
                  </button>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <div class="mobProductTabs" v-if="model">
        <Tabs :model="model" />
        <div class="product-page-tags" v-if="model.tags && model.tags.length">
          <a href="#" v-for="(tag,index) in model.tags" :key="index">#{{tag}}</a>
        </div>
      </div>
      
    </div>
    <div class="marketplace-container">
      <MoreNFT />
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/product-tabs/Tabs'
import MoreNFT from '@/components/elements/MoreNFT'
import {mapActions} from 'vuex';
import Object3d from '@/components/elements/Object3d';
export default {
  components:{
    Tabs,
    MoreNFT,
    Object3d
  },
  data(){
    return {
      model: null
    }
  },
  computed:{
    paramId(){
      return this.$route.params['id'];
    }
  },
  mounted(){
    this.getModel();
  },
  methods: {
    ...mapActions({
      show:'products/show'
    }),
    getModel(){
      this.show(this.paramId).then(res => {
        this.model = res['data'];
      })
    }
  }
}
</script>
