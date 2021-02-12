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
