<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>HighChart</title>
		<!-- 스타일 시트 -->
		<link rel="stylesheet" href="./css/style.css">
		
		<!-- 하이차트 라이브러리 -->
		<script src="https://code.highcharts.com/highcharts.js"></script>
		<script src="https://code.highcharts.com/modules/exporting.js"></script>
		<script src="https://code.highcharts.com/modules/export-data.js"></script>
		<script src="https://code.highcharts.com/modules/accessibility.js"></script>
		
		<!-- 데이터 & 차트 스크립트 -->
		<script src="./js/data.js"></script>
		<script src="./js/chart.js"></script>
	</head>
	<body>
		<!-- 종목 표시 -->
		<div id="titleContainer">
			<h1 id="stockTitle">삼성전자</h1>
		</div>
		
		<!-- 종목 선택 -->
		<div id="selectContainer">
			<select id="stockSelect">
				<option value="">종목을 선택하세요</option>
			</select>
		</div>
		
		<!-- 차트 컨테이너 -->
		<figure class="highcharts-figure">
			<div id="container"></div>
		</figure>
		
		<!-- 기사 표시 -->
		<div id="newsContainer">
			<div class="news-section" id="positiveNews">
				<h3>긍정 기사</h3>
				<p></p>
			</div>
			<div class="news-section" id="negativeNews">
				<h3>부정 기사</h3>
				<p></p>
			</div>
		</div>
</body>
</html>