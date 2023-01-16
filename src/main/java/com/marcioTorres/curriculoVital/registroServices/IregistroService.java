package com.marcioTorres.curriculoVital.registroServices;


import com.marcioTorres.curriculoVital.registroModel.RegistroModel;

public interface IregistroService {
	void salvar(RegistroModel registroModel);
	void editar(RegistroModel registroModel);
}
