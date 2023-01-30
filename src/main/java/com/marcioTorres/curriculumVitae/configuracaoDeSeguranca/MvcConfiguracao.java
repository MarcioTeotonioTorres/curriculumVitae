package com.marcioTorres.curriculumVitae.configuracaoDeSeguranca;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfiguracao implements WebMvcConfigurer {

	public void addViewControllers(ViewControllerRegistry registry) {

	//	registry.addViewController("/").setViewName("index.html");

//		registry.addViewController("/apresentacao").setViewName("templates/apresentacao.html");

	}

}
