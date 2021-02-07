package pl.krystian.Hibernate_5._test;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class Api {
	private SessionFactory sessionFactory;

	
	protected void setUp() {
		final StandardServiceRegistry registry = new StandardServiceRegistryBuilder().configure().build();
		
		try {
			sessionFactory = new MetadataSources(registry).buildMetadata().buildSessionFactory();
		} catch (Exception e) {
			StandardServiceRegistryBuilder.destroy(registry);
		}
	}
	
	
	protected void tearDown() {
		if(sessionFactory != null) {
			sessionFactory.close();
		}
	}
	
	
	public void run() {
		Session session = sessionFactory.openSession();
		session.beginTransaction();
		session.save(new User(1, "Krystian", "Izdebski", 21));
		session.getTransaction().commit();
		session.close();
	}
}
