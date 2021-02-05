package pl.krystian.Hibernate;

import java.util.Properties;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.cfg.Environment;
import org.hibernate.service.ServiceRegistry;

public class HibernateUtil {
	private static SessionFactory sessionFactory;

	public static SessionFactory getSessionFactory() {
		Properties settings = new Properties();
    	settings.put(Environment.DRIVER, "com.mysql.cj.jdbc.Driver");
    	settings.put(Environment.URL, "jdbc:mysql://localhost:3306/hibernate");
    	settings.put(Environment.USER, "root");
    	settings.put(Environment.PASS, "");
    	settings.put(Environment.HBM2DDL_AUTO, "update");
    	
    	Configuration config = new Configuration();
    	
    	config.setProperties(settings);
    	config.addAnnotatedClass(User.class);
    	
    	
    	ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
    			.applySettings(config.getProperties()).build();
    	
    	sessionFactory = config.buildSessionFactory(serviceRegistry);
    	return sessionFactory;
    			
	}

}
