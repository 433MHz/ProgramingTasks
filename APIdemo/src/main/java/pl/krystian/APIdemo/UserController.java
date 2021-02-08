package pl.krystian.APIdemo;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

	@CrossOrigin
	@PostMapping("get")
	public ArrayList<User> user(@RequestBody(required = false) User user) {
		HibernateFunctions hibernateFunctions = new HibernateFunctions();
		hibernateFunctions.addUser(user);
		return hibernateFunctions.getUsers();
	}
}
