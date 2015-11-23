package com.company.demo.common.web.dto;

public class Sort {

	private String field;
	private String direction;

	public String getSqlString() {
		return String.format("`%s` %s", field, direction);
	}

	public String getSqlString(String alias) {
		return String.format("`%s`.`%s` %s", alias, field, direction);
	}

	public String getField() {
		return field;
	}

	public void setField(String field) {
		this.field = field;
	}

	public String getDirection() {
		return direction;
	}

	public void setDirection(String direction) {
		this.direction = direction;
	}
}
