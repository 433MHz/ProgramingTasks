package pl.krystian.Hibernate;


import org.hibernate.Session;
import org.hibernate.Transaction;

public class UserDao {
	
	public void saveUser(User user) {
		Transaction transaction = null;
		
		Session session = HibernateUtil.getSessionFactory().openSession();
		
		transaction = session.beginTransaction();
		
		session.save(user);
		
		transaction.commit();
	}

}
