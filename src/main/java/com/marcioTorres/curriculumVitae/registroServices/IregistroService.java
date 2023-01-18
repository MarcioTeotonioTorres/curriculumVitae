package com.marcioTorres.curriculumVitae.registroServices;


import com.marcioTorres.curriculumVitae.registroModel.RegistroModel;

public interface IregistroService {
	void salvar(RegistroModel registroModel);
	void editar(RegistroModel registroModel);
}
