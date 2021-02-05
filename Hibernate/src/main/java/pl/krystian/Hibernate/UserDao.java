package pl.krystian.Hibernate;



import java.util.List;

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


	public List<User> getUsers(){
		Session session = HibernateUtil.getSessionFactory().openSession();
		List<User> lista = session.createQuery("from User", User.class).list();
		
		return lista;
	}
}
