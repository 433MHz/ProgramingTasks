package pl.krystian.JUnit;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.NoSuchElementException;

import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class BarberShopTest {
		
		@ParameterizedTest
		@ValueSource(ints = {0,1,2,3,4,5,6,7,8,9,10,Integer.MAX_VALUE})
		void testGetMaxQueueSize_parameterized(int maxCustomers) {
			BarberShop bs = new BarberShop(maxCustomers);
			assertEquals(maxCustomers, bs.getMaxQueueSize());
		}
		
		
		@Nested
		class AddCustomerTest{
			@Test
			void testAddCustomer_spaceAvailable() {
				BarberShop bs = new BarberShop(3);
				bs.addCustomer("Krystian");
				bs.addCustomer("Tomek");
				
				assertEquals("[Krystian, Tomek]", bs.printQueue());
			}
			
			@Test
			void testAddCustomer_noSpaceAvailable() {
				BarberShop bs = new BarberShop(3);
				bs.addCustomer("Krystian");
				bs.addCustomer("Tomek");
				bs.addCustomer("Mariusz");
				
				assertThrows(RuntimeException.class, () -> {bs.addCustomer("Monika");});
			}
		}
		
		@Nested
		class RemoveCustomerTest{
		
		@Test
		void testRemoveCustomer() {
			BarberShop bs = new BarberShop(3);
			bs.addCustomer("Krystian");
			bs.addCustomer("Tomek");
			
			assertEquals("Krystian", bs.removeCustomer());
			assertEquals("Tomek", bs.removeCustomer());
		}
		
		@Test
		void testRemoveCustomerWhenQueueEmpty() {
			BarberShop bs = new BarberShop(3);

			assertThrows(NoSuchElementException.class, () -> bs.removeCustomer());
		}
		}
}
		
