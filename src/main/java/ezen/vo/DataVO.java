package ezen.vo;

/**
 * 작성자 : 조강희
 * 작성일 : 2025.02.07
 * 하이차트를 그리기 위해 DB에서 받아온 데이터를 관리할 VO
 */

public class DataVO
{
	private String date;		// 날짜
	private String name;		// 종목이름
	private String code;		// 종목코드
	private String sise;		// 종가
	private String score;		// 분석점수
	private String count;		// 분석기사 수
	
	public String getDate()  { return date;  }
	public String getName()  { return name;  }
	public String getCode()  { return code;  }
	public String getSise()  { return sise;  }
	public String getScore() { return score; }
	public String getCount() { return count; }
	
	public void setDate(String date)   { this.date = date;   }
	public void setName(String name)   { this.name = name;   }
	public void setCode(String code)   { this.code = code;   }
	public void setSise(String sise)   { this.sise = sise;   }
	public void setScore(String score) { this.score = score; }
	public void setCount(String count) { this.count = count; }
}
