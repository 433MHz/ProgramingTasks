package pl.krystian.Hibernate;



import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity()
public class User {
	@Id
	private int id;
	private String name;
	private int age;
}
