export default {
  data() {
    return {
      filter: {},
      filterClone: null,
    };
  },
  computed:{
    queries(){
      return this.$route.query;
    },
    isFiltered(){
      return JSON.stringify(this.filter) != JSON.stringify(this.filterClone);
    }
  },
  created() {
    this.filterClone = this.cloneObject(this.filter);
    this.setFilter();
  },
  methods: {
    setFilter(){
      this.filter = {...this.filter, ...this.queries};
    },
    submitFilter(){
      this.filter['page'] = 1;
      this.$router.push({name: this.$route.name, query: this.filter});
    },
    changePage(page){
      this.filter['page'] = page;
      this.$router.push({name: this.$route.name, query: this.filter});
    },
    clearFilter(){
      this.filter = this.cloneObject(this.filterClone);
      this.$router.push({name: this.$route.name});
    },
  },
};
