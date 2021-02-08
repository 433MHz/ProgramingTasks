package pl.krystian.HibernateSimpleApi;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import pl.krystian.HibernateSimpleApi.UserObject.HibernateFunctions;
import pl.krystian.HibernateSimpleApi.UserObject.User;

@RestController
public class UsersController {

	
	@GetMapping("/users")
	public List all(){
		HibernateFunctions hibernateFunctions = new HibernateFunctions();
		return hibernateFunctions.proceed();
	}
}
