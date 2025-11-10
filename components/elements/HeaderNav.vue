<template>
  <div class="headerNav">
    <nav>
      <ul>
        <li v-for="(model,index) in models" :key="index">
          <NuxtLink :to="model.url">
            {{model.title}}
          </NuxtLink>
        </li>
      </ul>
    </nav>
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
      list: 'menu/list',
    }),
    getModels(){
      this.list().then(res => {
        this.models = res['data'];
      })
    },
  }
}
</script>
