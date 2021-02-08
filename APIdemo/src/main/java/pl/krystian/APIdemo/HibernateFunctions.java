package pl.krystian.APIdemo;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class HibernateFunctions {
	SessionFactory sessionFactory;

	
	public void addUser(User user) {
		setUp();
		add(user);
		close();
	}
	
	
	public ArrayList<User> getUsers(){
		setUp();
		ArrayList<User> arrayList = get();
		close();
		return arrayList;
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
	
	private ArrayList<User> get(){
		Session session = sessionFactory.openSession();
		session.beginTransaction();
		ArrayList<User> arrayList = new ArrayList<User>();
		List result = session.createQuery("from userzy").list();
		for(User user : (List<User>) result) {
			arrayList.add(user);
		}
		session.getTransaction().commit();
		session.close();
		return arrayList;
	}

}
