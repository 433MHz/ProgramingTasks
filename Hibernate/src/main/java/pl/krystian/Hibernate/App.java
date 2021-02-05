package pl.krystian.Hibernate;


public class App 
{
    public static void main( String[] args )
    {
    	User user = new User();
    	user.setId(5);
    	user.setName("Krystian Izdebski");
    	user.setAge(21);
    	
    	UserDao userDao = new UserDao();
    	userDao.saveUser(user);
    	
    	
    	
    	for (User users : userDao.getUsers()) {
			System.out.print(users.getId());
			System.out.print(" | ");
			System.out.print(user.getName());
			System.out.print(" | ");
			System.out.print(user.getAge());
			System.out.println();
		}
    }
}
