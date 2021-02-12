package pl.krystian.Enum;

/**
 * Hello world!
 *
 */
public class App 
{
	public enum Color{
		RED, GREEN, BLUE;
	}
	
    public static void main( String[] args )
    {
    	
    	Color c = Color.RED;
    	
    	switch (c) {
		case BLUE:
			System.out.println("Blue color");
			break;

		case RED:
			System.out.println("Red color");
			break;
			
		case GREEN:
			System.out.println("Green color");
			break;
		}
    }
}
