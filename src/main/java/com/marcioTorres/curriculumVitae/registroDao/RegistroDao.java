package com.marcioTorres.curriculumVitae.registroDao;

import org.springframework.stereotype.Repository;

import com.marcioTorres.curriculumVitae.registroModel.RegistroModel;

@Repository
public class RegistroDao extends AbstractDao<RegistroModel, Long> implements IregistroDao {

}
