<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>HighChart data</title>
		<!-- 스타일 시트 -->
		<link rel="stylesheet" href="./css/style.css">
		
		<!-- 하이차트 라이브러리 -->
		<script src="https://code.highcharts.com/highcharts.js"></script>
		<script src="https://code.highcharts.com/modules/exporting.js"></script>
		<script src="https://code.highcharts.com/modules/bubble.js"></script>
		<script src="https://code.highcharts.com/modules/export-data.js"></script>
		<script src="https://code.highcharts.com/modules/accessibility.js"></script>
		
		<!-- 데이터 & 차트 스크립트 -->
		<script src="./js/data.js"></script>
		<script src="./js/chart.js"></script>
	</head>
	<body>
		<!-- 종목선택 셀렉트 박스 -->
		<div class="stock_select_box">
			<label for="stockSelect">종목 선택 : </label>
			<select id="stockSelect">
				<option value="">전체 보기</option>
			</select>
		</div>
		
		<!-- 차트 컨테이너 -->
		<figure class="highcharts-figure">
			<div id="container"></div>
		</figure>
	</body>
</html>