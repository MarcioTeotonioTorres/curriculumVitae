package com.marcioTorres.curriculumVitae.registroServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.marcioTorres.curriculumVitae.registroDao.RegistroDao;
import com.marcioTorres.curriculumVitae.registroModel.RegistroModel;

@Service
@Transactional(readOnly = false)
public class RegistroModelService implements IregistroService{

	@Autowired
	private RegistroDao registroDao;
	
	
	@Override
	public void salvar(RegistroModel registroModel) {
		registroDao.save(registroModel);
	}

	@Override
	public void editar(RegistroModel registroModel) {
		registroDao.update(registroModel);		
	}

}
