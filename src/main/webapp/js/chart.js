/**
 * 하이차트를 실행하는 JS파일
 */

let stockChart;

/* 차트 초기화 */
function initChart()
{
	stockChart = Highcharts.chart("container", {
		chart : { zoomType : "xy" },
		title : { text     : "Analysis chart for stock and news_sentiment_score" },
		xAxis : { categories : chartData.categories,
				  crosshair  : true
		},
		yAxis : [{
			title    : { text   : "Stock Price" },
			labels   : { format : "{value} KRW" }
		}, {
			title    : { text   : "Sentiment Score" },
			labels   : { format : "{value} points" },
			opposite : true
		}],
		series : [{
			name : "Stock Price",
			data : chartData.series[0].data,
			type : "line",
			connectNulls : true
		}, {
			name : "Sentiment Score",
			data : chartData.series[1].data,
			type : "column",
			yAxis : 1
		}]
	});
}

/* 차트 업데이트 */
function updateChart()
{
	stockChart.xAxis[0].setCategories(chartData.categories, false);
	
	stockChart.series[0].setData(chartData.series[0].data, false);
	stockChart.series[1].setData(chartData.series[1].data, false);
	
	stockChart.redraw();
}

/* 페이지 로드 시 실행 */
document.addEventListener("DOMContentLoaded", () => {
	initChart();
	
	document.querySelector("#stockSelect").addEventListener("change", function () {
		selectedStock = this.value;
		filterStockData(selectedStock);
	});
});