package pl.krystian.JUnit;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	BarberShop bs = new BarberShop(5);
    	
    	bs.addCustomer("Tomek");
    	bs.addCustomer("Krystian");
    	bs.addCustomer("Krystian2");
    	bs.addCustomer("Tomek2");
    	bs.addCustomer("TOmek3");
    	
    	System.out.println(bs.printQueue());
    	
    }
}
