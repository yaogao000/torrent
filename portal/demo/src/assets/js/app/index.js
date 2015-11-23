require(['common/ajax','common/urls','common/pagination'], function(ajax, urls, pagination) {
	$(function() {
		// pagination, template
		ajax.getJSON({
			url: urls.r('member/list.do'),
			data: pagination.createPageParam({'index':1, 'size':10}),
            success: function(response) {
                if (response && 200 === response.status_code) {
                    console.log(response.data)
                }
            }
		});
	});
});