package com.company.demo.common.web.dto;

import org.codehaus.jackson.annotate.JsonIgnore;

public class Pagination {
	private static final int MAX_SIZE = 100;

	private int index;
	private int size;
	private int count;
	@JsonIgnore
	private int offset;

	public Pagination() {
	}

	public Pagination(int index, int size) {
		this.index = index;
		if (size > MAX_SIZE) {
			this.size = MAX_SIZE;
		} else {
			this.size = size;
		}
		this.offset = (index - 1) * size;
	}

	/**
	 * 验证 pagination 是否合法
	 * 
	 * @param pagination
	 * @return
	 */
	public static boolean isIllegal(Pagination pagination) {
		if (null == pagination || !isLagerThanZero(pagination.index) || !isLagerThanZero(pagination.size)) {
			return true;
		} else {
			return false;
		}
	}

	private static boolean isLagerThanZero(int number) {
		if (number <= 0) {
			return false;
		} else {
			return true;
		}
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public int getSize() {
		if (size > MAX_SIZE) {
			size = MAX_SIZE;
		}
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public int getOffset() {
		if (0 == offset) {
			offset = (getIndex() - 1) * getSize();
		}
		return offset;
	}

	public void setOffset(int offset) {
		this.offset = offset;
	}

}
