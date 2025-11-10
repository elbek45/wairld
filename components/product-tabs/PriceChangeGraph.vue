<template>
  <div>
    <div class="product-page-tabs-body-inner pb-0">
      <div class="title-24 mb-2">Price change graph <span>(swc)</span></div>
    </div>
    <lineChart :data="dataChart" dateX="category" valueY="value" height="306px" />
  </div>
</template>

<script>
import lineChart from '@/components/charts/line-chart'
export default {
  components: {
    lineChart
  },
  data(){
    return {
      dataChart: [{
        'category': "2020-01-01",
        'value': 10,
      },{
        'category': "2020-02-01",
        'value': 12,
      },{
        'category': "2020-03-01",
        'value': 9,
      },{
        'category': "2020-04-01",
        'value': 30,
      },{
        'category': "2020-05-01",
        'value': 62,
      },{
        'category': "2020-06-01",
        'value': 40,
      },{
        'category': "2020-07-01",
        'value': 10,
      },{
        'category': "2020-08-01",
        'value': 12,
      },{
        'category': "2020-09-01",
        'value': 9,
      },{
        'category': "2020-10-01",
        'value': 30,
      },{
        'category': "2020-11-01",
        'value': 62,
      },{
        'category': "2020-12-01",
        'value': 40,
      }]
    }
  },
  methods: {
  }
}
</script>
