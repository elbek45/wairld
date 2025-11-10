<template>
  <div class="marketplaceSection pt-0">
    <div class="marketplace-container">
      <div class="marketplaceSection-head">
        <h3 class="marketplaceSection-title">New Categories</h3>
      </div>

      <div class="nowrap-items" v-dragscroll.x>
        <ul class="categoriesCells">
          <li>
            <div class="category-cell">
              <a href="#" style="background-image: url('/img/top-category.png');">
                <div class="category-cell-title">House & garden</div>
              </a>
            </div>
          </li>
          <li>
            <div class="category-cell">
              <a href="#" style="background-image: url('/img/top-category.png');">
                <div class="category-cell-title">House & garden</div>
              </a>
            </div>
          </li>
          <li>
            <div class="category-cell">
              <a href="#" style="background-image: url('/img/top-category.png');">
                <div class="category-cell-title">House & garden</div>
              </a>
            </div>
          </li>
          <li>
            <div class="category-cell">
              <a href="#" style="background-image: url('/img/top-category.png');">
                <div class="category-cell-title">House & garden</div>
              </a>
            </div>
          </li>
          <li>
            <div class="category-cell">
              <a href="#" style="background-image: url('/img/top-category.png');">
                <div class="category-cell-title">House & garden</div>
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
