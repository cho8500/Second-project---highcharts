/**
 * 하이차트를 실행하는 JS파일
 */

let stockChart;

/* 차트 초기화 */
function initChart()
{
	stockChart = Highcharts.chart("container", {
		chart : {
			zoomType : "xy",
			width    : 1500,
			height   : 900
		},
		title : { text     : "Analysis chart for stock and news_sentiment_score" },
		xAxis : { categories : chartData.categories,
				  crosshair  : true
		},
		yAxis : [{
			title    : { text   : "Stock Price" },
			labels   : { formatter : function() { return Highcharts.numberFormat(this.value, 0, '.', ',') + " KRW"; } },
			height   : "50%",
			offset   : 0
		}, {
			title    : { text   : "Sentiment Score" },
			labels   : { format : "{value} points" },
			opposite : true,
			min      : 0,
			max      : 100,
			top      : "50%",
			height   : "50%",
			offset   : 0,
			plotLines : [{
				value : 50,
				color : "red",
				width : 1,
				dashStyle : "dash"
			}]
		}],
		series : [{
			name : "Stock Price",
			data : chartData.series[0].data,
			type : "spline",
			marker : { enabled : false },
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
		
		document.querySelector("#stockTitle").textContent = `${selectedStock}`;
	});
});