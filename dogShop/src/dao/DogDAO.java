package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import static db.JdbcUtil.*;

import vo.Dog;

public class DogDAO {
	
	Connection con;
	private static DogDAO boardDAO;

	public DogDAO() {
		// TODO Auto-generated constructor stub
	}

	public void setConnection(Connection con) {
		this.con = con;
	}
	
	public static DogDAO getInstance() {
		
		if(boardDAO ==null) {
			boardDAO = new DogDAO();
		}
		return boardDAO;
	}
	
	public ArrayList<Dog> selectDogList(){
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<Dog> dogList = null;
		
		try {
			pstmt = con.prepareStatement("select * from dog");
			rs = pstmt.executeQuery();
			
			dogList = new ArrayList<Dog>();
			
			while(rs.next()) {
				dogList.add(new Dog(
						rs.getInt("id")
						,rs.getString("kind")
						,rs.getInt("price")
						,rs.getString("image")
						,rs.getString("country")
						,rs.getInt("height")
						,rs.getInt("weight")
						,rs.getString("content")
						,rs.getInt("readcount")));
			}
		}catch(SQLException e) {
			e.printStackTrace();
		} finally {
			close(rs);
			close(pstmt);
		}
		
		return dogList;
	}
	
	public Dog selectDog(int id) {
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		Dog dog = null;
		
		try {
			pstmt = con.prepareStatement("select * from dog where id = ?");
			pstmt.setInt(1, id);
			rs = pstmt.executeQuery();
			
			
			while(rs.next()) {
				dog = new Dog(
						rs.getInt("id")
						,rs.getString("kind")
						,rs.getInt("price")
						,rs.getString("image")
						,rs.getString("country")
						,rs.getInt("height")
						,rs.getInt("weight")
						,rs.getString("content")
						,rs.getInt("readcount"));
			}
			
		}catch(SQLException e) {
			e.printStackTrace();
		} finally {
			close(rs);
			close(pstmt);
		}
		return dog;
	}
	
	public int updateReadCount(int id) {
		PreparedStatement pstmt = null;
		int updateCount = 0;
		String sql = "";
		
		try {
			sql = "UPDATE dog SET readcount = readcount + 1 WHERE id=?";
			pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, id);
			updateCount = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return updateCount;
	}
	
	public int insertDog(Dog dog) {
		PreparedStatement pstmt = null;
		int insertCount = 0;
		String sql = "";
		
		try {
			sql = "insert into dog(kind,price,image,country,height,weight,content,readcount)"
					+ "values(?,?,?,?,?,?,?,?) ";
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1,  dog.getKind());
			pstmt.setInt(2, dog.getPrice());
			pstmt.setString(3,  dog.getImage());
			pstmt.setString(4,  dog.getCountry());
			pstmt.setInt(5,  dog.getHeight());
			pstmt.setInt(6,  dog.getWeight());
			pstmt.setString(7,  dog.getContent());
			pstmt.setInt(8,  dog.getReadcount());
			insertCount = pstmt.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close(pstmt);
		}
		
		return insertCount;
	}
	
	

}
