<template>
  <div class="marketplaceSection">
    <div class="marketplace-container">
      <div class="marketplaceSection-head">
        <h3 class="marketplaceSection-title">Brands</h3>
        <div>
          <a href="#" class="link">
            <span>View all</span>
            <i class="icon-arrow-sm-right"></i>  
          </a>
        </div>
      </div>

      <div class="nowrap-items" v-dragscroll.x>
        <ul class="brands">
          <li>
            <div class="brand-item">
              <a href="#">
                <div class="brand-item-image">
                  <img src="/img/brand1.png" alt="">
                </div>
                <div class="brand-item-title">Ferrari</div>
              </a>
            </div>
          </li>
          <li>
            <div class="brand-item">
              <a href="#">
                <div class="brand-item-image">
                  <img src="/img/brand2.png" alt="">
                </div>
                <div class="brand-item-title">Adidas</div>
              </a>
            </div>
          </li>
          <li>
            <div class="brand-item">
              <a href="#">
                <div class="brand-item-image">
                  <img src="/img/brand1.png" alt="">
                </div>
                <div class="brand-item-title">Ferrari</div>
              </a>
            </div>
          </li>
          <li>
            <div class="brand-item">
              <a href="#">
                <div class="brand-item-image">
                  <img src="/img/brand2.png" alt="">
                </div>
                <div class="brand-item-title">Adidas</div>
              </a>
            </div>
          </li>
          <li>
            <div class="brand-item">
              <a href="#">
                <div class="brand-item-image">
                  <img src="/img/brand1.png" alt="">
                </div>
                <div class="brand-item-title">Ferrari</div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods: {
  }
}
</script>
