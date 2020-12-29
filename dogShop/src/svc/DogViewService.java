package svc;

import java.sql.Connection;

import dao.DogDAO;
import vo.Dog;
import static db.JdbcUtil.*;

public class DogViewService {

	public Dog getDogView(int id) {
		
		Connection con = getConnection();
		DogDAO dogDAO = DogDAO.getInstance();
		dogDAO.setConnection(con);
		int updateCount = dogDAO.updateReadCount(id);
		
		if(updateCount>0) {
			commit(con);
		}else {
			rollback(con);
		}
		
		Dog dog = dogDAO.selectDog(id);
		close(con);
		return dog;
	}

}
