package pl.krystian.Enum;

/**
 * Hello world!
 *
 */
public class App 
{
	public enum Color{
		RED, GREEN(100), BLUE(300);
		
		int price;
		
		Color(){
			price = 200;
			System.out.println("In empty constructor | " + price);
		}
		
		Color(int x){
			price = x;
			System.out.println("In int constructor | " + price);
		}
	}
	
    public static void main( String[] args )
    {
    	
    	Color c = Color.BLUE;
    	
    	switch (c) {
		case BLUE:
			System.out.println("Blue color | " + c.price);
			break;

		case RED:
			System.out.println("Red color | " + c.price);
			break;
			
		case GREEN:
			System.out.println("Green color | " + c.price);
			break;
		}
    }
}
