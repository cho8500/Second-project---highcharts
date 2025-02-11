<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="ezen.vo.DataVO" %>
<%@ page import="ezen.dto.DataDTO" %>
<%@ page import="java.util.HashSet"%>
<%@ page import="java.util.ArrayList" %>
<%@ page import="com.google.gson.Gson" %>
<%@ page import="com.google.gson.JsonObject"%>

<%
/* DB에서 차트에 필요한 데이터를 모두 불러오기 */
DataDTO dto = new DataDTO();
ArrayList<DataVO> data_list = dto.getChartData();

System.out.println("불러온 데이터 : " + data_list.size());

/* 불러온 데이터에서 셀렉트 박스에 쓸 종목이름 뽑아오기 */
HashSet<String> stockNames = new HashSet<String>();
for ( DataVO data : data_list ) { stockNames.add(data.getName()); }

System.out.println("종목 테이블 개수 : " + stockNames.size());

/* DB에서 URL 데이터 불러오기 */
ArrayList<DataVO> url_list = dto.getNews();

System.out.println("불러온 URL 데이터 : " + url_list.size());

/* JSON 객체를 생성하고 데이터와 종목리스트를 함께 반환 */
JsonObject jsonResponse = new JsonObject();
jsonResponse.add("data",   new Gson().toJsonTree(data_list));
jsonResponse.add("stocks", new Gson().toJsonTree(stockNames));
jsonResponse.add("news",   new Gson().toJsonTree(url_list));

response.setContentType("application/json");
response.setCharacterEncoding("UTF-8");

out.print(jsonResponse.toString());
out.flush();
%>