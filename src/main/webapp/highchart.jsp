<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>HighChart data</title>
		<style>
			.highcharts-figure, .highcharts-data-table table {
				min-width: 310px;
				max-width: 800px;
				margin: 1em auto;
			}
			
			#container {
				height: 400px;
			}
			
			.highcharts-data-table table {
				font-family: Verdana, sans-serif;
				border-collapse: collapse;
				border: 1px solid #ebebeb;
				margin: 10px auto;
				text-align: center;
				width: 100%;
				max-width: 500px;
			}
			
			.highcharts-data-table caption {
				padding: 1em 0;
				font-size: 1.2em;
				color: #555;
			}
			
			.highcharts-data-table th {
				font-weight: 600;
				padding: 0.5em;
			}
			
			.highcharts-data-table td, .highcharts-data-table th,
				.highcharts-data-table caption {
				padding: 0.5em;
			}
			
			.highcharts-data-table thead tr, .highcharts-data-table tr:nth-child(even)
				{
				background: #f8f8f8;
			}
			
			.highcharts-data-table tr:hover {
				background: #f1f7ff;
			}
			
			.highcharts-description {
				margin: 0.3rem 10px;
			}
		</style>
	</head>
	<body>
		<script src="https://code.highcharts.com/highcharts.js"></script>
		<script src="https://code.highcharts.com/modules/exporting.js"></script>
		<script src="https://code.highcharts.com/modules/export-data.js"></script>
		<script src="https://code.highcharts.com/modules/accessibility.js"></script>
	
		<figure class="highcharts-figure">
			<div id="container"></div>
			<p class="highcharts-description">Chart showing a combination of a
				column and a line chart, using multiple y-axes. Using multiple axes
				allows for data within different ranges to be visualized together.</p>
		</figure>
		<script src="./data.js"></script>
		<script>
			Highcharts.chart('container', data)
		</script>
	</body>
</html>