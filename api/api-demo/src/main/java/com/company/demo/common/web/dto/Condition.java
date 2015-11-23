package com.company.demo.common.web.dto;

import java.util.HashMap;
import java.util.Map;

public class Condition {

	private Map<String, Object> certain;
	private Map<String, Object> fuzzy;
	private Map<String, Object> preFuzzy;
	private Map<String, Object> postFuzzy;
	private Map<String, Object> createTime;

	public Map<String, Object> getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Map<String, Object> createTime) {
		this.createTime = createTime;
	}

	public Map<String, Object> getCertain() {
		return certain;
	}

	public void setCertain(Map<String, Object> certain) {
		this.certain = certain;
	}

	public Map<String, Object> getFuzzy() {
		return fuzzy;
	}

	public void setFuzzy(Map<String, Object> fuzzy) {
		this.fuzzy = fuzzy;
	}

	public Map<String, Object> getPreFuzzy() {
		return preFuzzy;
	}

	public void setPreFuzzy(Map<String, Object> preFuzzy) {
		this.preFuzzy = preFuzzy;
	}

	public Map<String, Object> getPostFuzzy() {
		return postFuzzy;
	}

	public void setPostFuzzy(Map<String, Object> postFuzzy) {
		this.postFuzzy = postFuzzy;
	}

	public void addCertain(Map<String, Object> additional) {
		if (certain != null) {
			certain.putAll(additional);
		} else {
			certain = additional;
		}
	}

	public void addCertain(String key, Object value) {
		if (certain == null) {
			certain = new HashMap<String, Object>();
		}
		certain.put(key, value);
	}

}
