Highcharts.chart('columwithnegativecontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Pineapple', 'Oranges', 'Pears', 'Grapes', 'Strawberries']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Zack',
        data: [9, 7, 5, 7, 8]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});