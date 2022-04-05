package com.freelance.pixstation.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.freelance.pixstation.Service.PostService;

@Controller
public class SiteController {
	@Autowired
	PostService ps;
	
	@RequestMapping("/")
	public String index() {
		return "index";
	}
}
