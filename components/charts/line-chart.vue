<template>
  <div class="chartdiv" ref="chartdiv">
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    dateX: {
      type: String,
      required: true
    },
    valueY: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: () => '500px',
    },
  },
  mounted() {
    let {am4core, am4charts, am4themes_animated, am4themes_dark} = this.$am4core();
    am4core.useTheme(am4themes_animated);
    
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

    chart.padding(0, 0, 0, 0);
    
    chart.data = this.data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.tooltip.disabled = true;
    dateAxis.renderer.labels.template.disabled = true;
    dateAxis.renderer.minGridDistance = 30;
    // dateAxis.renderer.grid.template.location = 0;
    // dateAxis.renderer.grid.template.strokeOpacity = 0;
    // dateAxis.dateFormats.setKey("second", "ss");
    // dateAxis.renderer.axisFills.template.disabled = true;
    // dateAxis.renderer.ticks.template.disabled = true;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.line.opacity = 0;
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.renderer.baseGrid.strokeOpacity = 0;
    valueAxis.min = 0;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = this.dateX;
    series.dataFields.valueY = this.valueY;
    series.strokeWidth = 2;
    series.fillOpacity = 0.5;
    series.fill = am4core.color("#6665DD");
    series.stroke = am4core.color("#37187A");
    var fillModifier = new am4core.LinearGradientModifier();
    fillModifier.opacities = [1, 0];
    fillModifier.offsets = [0, 1];
    fillModifier.gradient.rotation = 90;
    series.segments.template.fillModifier = fillModifier;

    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";
    series.tooltip.background.fill = am4core.color("#fff");

    // Make bullets grow on hover
    var bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#37187A");
    bullet.circle.stroke = am4core.color("#FFFFFF");

    var bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;

    series.name = name;
    series.tooltipText = "{valueY}";
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panX";
    chart.cursor.lineX.opacity = 0;
    chart.cursor.lineY.opacity = 0;

    this.chart = chart;
    this.$refs.chartdiv.style.height=this.height;
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
};
</script>
<style scoped>
  .chartdiv {
    width: 100%;
  }
</style>
