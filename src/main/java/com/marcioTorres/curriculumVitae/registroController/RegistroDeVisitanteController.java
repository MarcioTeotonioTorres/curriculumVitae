package com.marcioTorres.curriculumVitae.registroController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.marcioTorres.curriculumVitae.registroModel.RegistroModel;
import com.marcioTorres.curriculumVitae.registroServices.RegistroModelService;

@RestController
public class RegistroDeVisitanteController {

	@Autowired
	private RegistroModelService registroModelService;

	@PostMapping(value = "/salvar", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> salvar(@RequestBody RegistroModel registroModel) {
		
		if (registroModel != null) {
		
			registroModelService.salvar(registroModel);

			return new ResponseEntity<>(HttpStatus.OK);
		} else {			
			return new ResponseEntity<>("Este registro já existe!",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}