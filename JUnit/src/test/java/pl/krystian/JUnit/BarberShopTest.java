package pl.krystian.JUnit;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

public class BarberShopTest {
		@Test
		public void testGetMaxQueueSize_zero() {
			BarberShop bs = new BarberShop(0);
			assertEquals(0, bs.getMaxQueueSize());
		}
		
		@Test
		public void testGetMaxQueueSize_ten() {
			BarberShop bs = new BarberShop(10);
			assertEquals(10, bs.getMaxQueueSize());
		}
		
		@ParameterizedTest
		@ValueSource(ints = {0,1,2,3,4,5,6,7,8,9,10,Integer.MAX_VALUE})
		public void testGetMaxQueueSize_parameterized(int maxCustomers) {
			BarberShop bs = new BarberShop(maxCustomers);
			assertEquals(maxCustomers, bs.getMaxQueueSize());
		}
}
