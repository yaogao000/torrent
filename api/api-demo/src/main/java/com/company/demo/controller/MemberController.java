package com.company.demo.controller;

import java.util.LinkedList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.company.demo.common.web.ResponseMessssage;
import com.company.demo.common.web.dto.PaginableSortableCondition;
import com.company.demo.common.web.dto.Pagination;
import com.company.demo.dao.model.Member;

/**
 * 
 * @author yaogaolin
 *
 */
@Controller
@RequestMapping(value = "/member")
public class MemberController {
	private final static Logger logger = LoggerFactory.getLogger(MemberController.class);

	@RequestMapping(value = "list.do", produces = "application/json", method = RequestMethod.GET)
	@ResponseBody
	public ResponseMessssage list(PaginableSortableCondition paginableSortableCondition,
			@RequestParam(value = "other", required = false) String other,
			HttpServletRequest request) {
		if (Pagination.isIllegal(paginableSortableCondition.getPagination())) {
			return ResponseMessssage.ERROR();
		}
		
		logger.info("output test: member/list.do" + paginableSortableCondition);

		List<Member> members = new LinkedList<>();
		Pagination pagination = paginableSortableCondition.getPagination();
		for (int i = pagination.getIndex(); i < pagination.getSize(); i++) {
			Member member = new Member();
			member.setId(i);
			member.setAge(20);
			member.setName("name" + i);
			member.setHigh(1.7d);

			members.add(member);
		}

		return ResponseMessssage.OK(members);
	}
}
