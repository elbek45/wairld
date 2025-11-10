<template>
  <span v-if="model">{{title}}</span>
</template>

<script>
export default {
  props: {
    id: {
      type: Number | String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: "title"
    }
  },
  data() {    
    return {
    }
  },
  computed:{
    model(){
      return this.items.find(item => item.id == this.id);
    },
    title(){
      if(this.model){
        return this.model[this.label];
      }
      return "";
    },
  },
  methods: {
  }
}
</script>