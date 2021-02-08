package pl.krystian.HibernateSimpleApi.UserObject;


import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class HibernateFunctions {

	private SessionFactory sessionFactory;
	
	public List<User> proceed(){
		setUp();
		List list = getAll();
		close();
		
		return list;
	}
	
	private void setUp() {
		final StandardServiceRegistry registry = new StandardServiceRegistryBuilder().configure().build();
		try {
			sessionFactory = new MetadataSources(registry).buildMetadata().buildSessionFactory();
		} catch (Exception e) {
			// TODO: handle exception
			StandardServiceRegistryBuilder.destroy(registry);
		}
	}
	
	private void close() {
		if(sessionFactory != null) {
			sessionFactory.close();
		}
	}
	
	private void add(User user) {
		Session session = sessionFactory.openSession();
		session.beginTransaction();
		session.save(user);
		session.getTransaction().commit();
		session.close();
	}
	
	private List getAll(){
		Session session = sessionFactory.openSession();
		session.beginTransaction();
		List results = session.createQuery("from USERZY").list();
		session.getTransaction().commit();
		session.close();
		return results;
	}
}
