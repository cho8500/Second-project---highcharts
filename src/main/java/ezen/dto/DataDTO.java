package ezen.dto;

import ezen.vo.*;
import ezen.dao.*;
import java.util.ArrayList;

/**
 * 작성자 : 조강희
 * 작성일 : 2025.02.07
 * 하이차트를 그리기 위해 받아온 데이터를 처리할 DTO
 */

public class DataDTO extends DbManager
{
	// Read
	public ArrayList<DataVO> getChartData()
	{
		String sql = "";
		sql += "WITH RECURSIVE date_series AS (";
		sql += "SELECT CURDATE() - INTERVAL 180 DAY AS date ";
		sql += "UNION ALL ";
		sql += "SELECT date + INTERVAL 1 DAY ";
		sql += "FROM date_series ";
		sql += "WHERE date < CURDATE()";
		sql += ") ";
		
		sql += "SELECT ";
		sql +=		"d.date, ";
		sql +=		"COALESCE( s.name, t.name ) AS name, ";
		sql +=		"s.code, ";
		sql +=		"s.sise, ";
//		sql +=		"COALESCE( t.score, 0 ) AS score, ";
		sql +=		"t.score ";
		sql += "FROM date_series d ";
		sql += "LEFT JOIN sise_data s ON d.date = s.date ";
		sql += "LEFT JOIN total_result t ON d.date = t.date AND s.name = t.name ";
		sql += "WHERE COALESCE( s.name, t.name ) IS NOT NULL ";
		sql += "ORDER BY d.date ASC, name ASC;";
		
		System.out.println(sql);
		
		this.driverLoad();
		this.dbConnect();
		this.executeQuery(sql);
		
		ArrayList<DataVO> data_list = new ArrayList<DataVO>();
		
		while(this.next())
		{
			DataVO vo = new DataVO();
			
			vo.setDate(this.getString("date"));
			vo.setName(this.getString("name"));
			vo.setCode(this.getString("code"));
			vo.setSise(this.getString("sise"));
			vo.setScore(this.getString("score"));
			
			data_list.add(vo);
		}
		this.dbDisConnect();
		
		return data_list;
	}
}
