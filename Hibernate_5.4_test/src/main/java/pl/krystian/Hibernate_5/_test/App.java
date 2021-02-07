package pl.krystian.Hibernate_5._test;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	Api api = new Api();
    	api.setUp();
    	api.run();
    	api.tearDown();
    }
}
