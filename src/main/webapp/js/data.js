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
let newsData      = [];
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
	displayNews(stockName);
}

/* 뉴스를 표시하는 함수 */
function displayNews(stockName)
{
	let positiveContainer = document.getElementById("positiveNews");
	let negativeContainer = document.getElementById("negativeNews");
	
	// 기존 내용 초기화
	positiveContainer.innerHTML = "<h3>긍정 기사</h3>";
	negativeContainer.innerHTML = "<h3>부정 기사</h3>";
	
	let positiveNews = [];
	let negativeNews = [];
	
	// 선택한 종목의 뉴스 필터링
	let stockNews = newsData.filter(article => article.name === stockName);
	
	// 점수 정렬
	let sortedNews = stockNews.sort((a, b) => b.score - a.score);
	
	// 긍정 기사 3개 선택 (60점 이상)
	positiveNews = sortedNews.filter(article => article.score >= 60).slice(0, 3);
	
	// 부정 기사 3개 선택 (40점 이하)
	negativeNews = sortedNews.filter(article => article.score <= 40).slice(0, 3);
	
	// 긍정 기사 추가
	if (positiveNews.length > 0) {
		positiveNews.forEach(article => {
			positiveContainer.innerHTML += `<p><a href="${article.url}" target="_blank">${article.name} - ${article.score}점</a></p>`;
		});
	} else {
		positiveContainer.innerHTML += "<p>관련 뉴스가 없습니다.</p>";
	}
	
	// 부정 기사 추가
	if (negativeNews.length > 0) {
		negativeNews.forEach(article => {
			negativeContainer.innerHTML += `<p><a href="${article.url}" target="_blank">${article.name} - ${article.score}점</a></p>`;
		});
	} else {
		negativeContainer.innerHTML += "<p>관련 뉴스가 없습니다.</p>";
	}
}

/* 데이터와 종목리스트 로드 */
fetch("data.jsp")
	.then(response => response.json())
	.then(response => {
		allData   = response.data;
		stockList = Array.from(response.stocks);
		newsData   = response.news;
		
		StockSelectLoad();
		filterStockData(selectedStock);
		displayNews(selectedStock);
	})
	.catch(error => console.error("Error loading data : ", error));
