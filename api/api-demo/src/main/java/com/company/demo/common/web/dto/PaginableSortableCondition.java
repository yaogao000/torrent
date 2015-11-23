package com.company.demo.common.web.dto;

public class PaginableSortableCondition {

	private Pagination pagination;
	private Condition condition;
	private Sort sort;

	public PaginableSortableCondition() {
		super();
	}

	public PaginableSortableCondition(Pagination pagination) {
		super();
		this.pagination = pagination;
	}

	public PaginableSortableCondition(Pagination pagination, Condition condition) {
		super();
		this.pagination = pagination;
		this.condition = condition;
	}

	public PaginableSortableCondition(Pagination pagination, Sort sort) {
		super();
		this.pagination = pagination;
		this.sort = sort;
	}

	public PaginableSortableCondition(Pagination pagination, Condition condition, Sort sort) {
		super();
		this.pagination = pagination;
		this.condition = condition;
		this.sort = sort;
	}

	public Pagination getPagination() {
		return pagination;
	}

	public void setPagination(Pagination pagination) {
		this.pagination = pagination;
	}

	public Condition getCondition() {
		return condition;
	}

	public void setCondition(Condition condition) {
		this.condition = condition;
	}

	public Sort getSort() {
		return sort;
	}

	public void setSort(Sort sort) {
		this.sort = sort;
	}

}
