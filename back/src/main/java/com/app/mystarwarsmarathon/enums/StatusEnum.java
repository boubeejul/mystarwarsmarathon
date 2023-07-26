package com.app.mystarwarsmarathon.enums;

public enum StatusEnum {
	ASSISTIDA("Assistida"),
	PENDENTE("Pendente"),
	CANCELADA("Cancelada");
	
	private String status;

	private StatusEnum(String status) {
		this.status = status;
	}

	public String getStatus() {
		return status;
	}
}
