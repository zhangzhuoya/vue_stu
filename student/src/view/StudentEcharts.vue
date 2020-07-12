<template>
  <div class="echarts">
    <div id="areaChart"></div>

    <div id="sexecharts"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stuList: null
    };
  },
  mounted() {
    this.$api.findAll().then(data => {
      this.stuList = data;
      this.areaChart(data);
      console.log(this.stuList);
      this.areaChart();
      this.sexChart();
    });
  },
  methods: {
    //   第一个图标
    init() {
     let  option = {
        //放的是两个图表的相同的配置
        title: {
          text: "",
          subtext: "纯属虚构",
          left: "center"
        },
        legend: {
          data: [],
          orient: "vertical",
          left: "left"
        },
        tooltip: {
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: {
          name: "",
          type: "pie",
          data: [],
          radius: "55%",
          center: ["50%", "60%"],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowColor: "rgba(0,0,0,.5)"
            }
          }
        }
      };
      return option;
    },
    areaChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("areaChart"));
      let legendData = [];
      let seriesData = [];
      var newData = {};
      console.log(this.stuList);
      this.stuList.forEach(item => {
        if (!newData[item.address]) {
          newData[item.address] = 1;
          legendData.push(item.address);
        } else {
          newData[item.address]++;
        }
      });

      for (let i in newData) {
        seriesData.push({
          name: i,
          value: newData[i]
        });
        console.log(i);
      }
      console.log(legendData);
      console.log(seriesData);

      let option = this.init();
      option.title.text = "学生地区分布统计";
      option.legend.data = legendData;
      option.series.namee = "地区分布";
      option.series.data = seriesData;
      myChart.setOption(option);
    },
    sexChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("sexecharts"));
      let legendData = [];
      let seriesData = [];
      var newData = {};
      this.stuList.forEach(item => {
        if (!newData[item.sex]) {
          newData[item.sex] = 1;
          legendData.push(item.sex);
        } else {
          newData[item.sex]++;
        }
      });

      seriesData = [
        {
          name: "男",
          value: newData[0]
        },
        {
          name: "女",
          value: newData[1]
        }
      ];
      console.log(legendData);
      console.log(seriesData);

      let option = this.init();
      option.title.text = "学生性别分布统计";
      option.legend.data = legendData;
      option.series.namee = "性别分布";
      option.series.data = seriesData;
      myChart.setOption(option);
    }
  }
};
</script>

<style>
.echarts {
  display: flex;
  margin-top: 30px;
}
#areaChart,
#sexecharts {
  width: 400px;
  height: 400px;
}
</style>