/**
 * DB에서 불러온 데이터를 처리하는 JS파일
 */

let chartData = {
	categories : [],
	series : [
		{ name : "Stock Price",     data : [] },
		{ name : "Sentiment Score", data : [] }
	]
};

let allData       = [];
let stockList     = [];
let selectedStock = "삼성전자";

/* 불러온 데이터에서 종목이름을 추출하고 셀렉트 박스에 추가하는 함수 */
function StockSelectLoad()
{
	const stockSelect = document.querySelector("#stockSelect");
	
	stockList.forEach( stock => {
		const option = document.createElement("option");
		
		option.value       = stock;
		option.textContent = stock;
		stockSelect.appendChild(option);
	})
}

/* 특정 종목을 필터링하는 함수 */
function filterStockData(stockName)
{
	let filteredData = allData.filter(item => item.name === stockName);
	
	// x축 데이터 설정
	chartData.categories = filteredData.map(item => item.date);
	
	// y축 데이터 설정
	chartData.series[0].data = filteredData.map(item => item.sise !== null ? parseInt(item.sise) : null);
	chartData.series[1].data = filteredData.map(item => parseInt(item.score));

	updateChart();
}

/* 데이터와 종목리스트 로드 */
fetch("data.jsp")
	.then(response => response.json())
	.then(response => {
		allData   = response.data;
		stockList = Array.from(response.stocks);
		
		StockSelectLoad();
		filterStockData(selectedStock);
	})
	.catch(error => console.error("Error loading data : ", error));
