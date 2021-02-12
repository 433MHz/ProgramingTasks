package pl.krystian.Lambda;

/**
 * Hello world!
 *
 */
public class App 
{

	
    public static void main( String[] args ){
    	
    	Car car = () -> System.out.println("Brrrrr");
    	
    	car.run();
    }
}




