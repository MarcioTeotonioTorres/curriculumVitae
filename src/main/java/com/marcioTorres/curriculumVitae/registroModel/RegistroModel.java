package com.marcioTorres.curriculumVitae.registroModel;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name = "registro")
public class RegistroModel extends AbstractEntity<Long> {

	/**
	 * 
	 */
	
	@Column(name = "NOME", nullable = false, unique = true)
	private String nome;

	@Column(name = "EMAIL", nullable = false, unique = true)
	private String email;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	

}
