package pl.krystian.Hibernate;


public class App 
{
    public static void main( String[] args )
    {
    	User user = new User();
    	user.setId(1);
    	user.setName("Krystian Izdebski");
    	user.setAge(21);
    	
    	UserDao userDao = new UserDao();
    	userDao.saveUser(user);
    }
}
