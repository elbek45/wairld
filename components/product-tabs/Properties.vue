<template>
  <div class="product-page-tabs-body-inner">
    <div class="title-24">Properties</div>
    <table class="properties">
      <tr>
        <th>Name</th>
        <td>{{model.title}}</td>
      </tr>
      <tr>
        <th>Category</th>
        <td>
          <div v-if="model.categories && model.categories.length">
            <span v-for="(category,index) in model.categories" :key="index">
              <span v-if="index > 0">, </span>{{ category.title }}
            </span>
          </div>
        </td>
      </tr>
      <tr v-if="model.type">
        <th>Type</th>
        <td>{{model.type}}</td>
      </tr>
      <tr>
        <th>Color</th>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
            <path d="M13.4019 1.5C14.5566 -0.499999 17.4434 -0.5 18.5981 1.5L31.5885 24C32.7432 26 31.2998 28.5 28.9904 28.5H3.00962C0.700218 28.5 -0.743157 26 0.411543 24L13.4019 1.5Z" :fill="model.color"/>
          </svg>
        </td>
      </tr>
      <tr v-if="model.damage_bonus">
        <th>Damage bonus*</th>
        <td>{{model.damage_bonus}}%</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["model"],
  data(){
    return {
    }
  },
  methods: {
  }
}
</script>
