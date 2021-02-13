package pl.krystian.JUnit;

import java.util.LinkedList;
import java.util.NoSuchElementException;

public class BarberShop {

	private int maxCustomers;
	private LinkedList<String> queue;
	
	public BarberShop(int maxCustomers) {
		this.maxCustomers = maxCustomers;
		queue = new LinkedList<String>();
	}
	
	public int getMaxQueueSize() {
		return maxCustomers;
	}
	
	public void addCustomer(String name) {
		if(queue.size() < maxCustomers) {
			queue.add(name);
		}
		else {
			throw new RuntimeException("Queue is full!");
		}
	}
	
	public String removeCustomer() throws NoSuchElementException{
		return queue.pop();
	}
	
	
	public String printQueue() {
		return queue.toString();
	}
}
