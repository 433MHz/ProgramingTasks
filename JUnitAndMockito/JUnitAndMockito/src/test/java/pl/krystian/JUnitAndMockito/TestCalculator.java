package pl.krystian.JUnitAndMockito;

import static org.junit.Assert.*;

import org.junit.Test;

public class TestCalculator {

	Calculator c = new Calculator();
	
	@Test
	public void test() {
		assertEquals(5, c.add(2, 3));
	}

}
