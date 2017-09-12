import {biddata, askdata} from './data.js';
var config = {
  chart: {
    type: 'area'
  },
  title: {
    text: 'Market Depth'
  },
  xAxis: {
    labels: {
      formatter: function() {
        return this.value+'$';
      }
    }
  },
  navigator: {
    enabled: false
  },
  scrollbar: {
    enabled: false
  },
  yAxis: {
    title: {
      text: 'BTC',
      margin:30
    },
    labels: {
      formatter: function() {
        return this.value;
      }
    }
  },
  rangeSelector: {
    selected: 4,
    inputEnabled: false,
    buttonTheme: {
      visibility: 'hidden'
    },
    labelStyle: {
      visibility: 'hidden'
    }
  },

  plotOptions: {
    area: {

      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  },
  series: [{
    name: 'asks',
    data:askdata
  }, {
    name: 'bids',
    data: biddata
  }]
}
