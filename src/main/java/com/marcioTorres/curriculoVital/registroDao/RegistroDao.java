package com.marcioTorres.curriculoVital.registroDao;

import org.springframework.stereotype.Repository;

import com.marcioTorres.curriculoVital.registroModel.RegistroModel;

@Repository
public class RegistroDao extends AbstractDao<RegistroModel, Long> implements IregistroDao {

}
