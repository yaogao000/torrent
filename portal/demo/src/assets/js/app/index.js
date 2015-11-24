require(['common/ajax', 'common/urls', 'common/pagination', 'template'], function(ajax, urls, pagination, template) {
    $(function() {
        var page = {
            init: function() {
                member.init();
            }
        };

        var member = {
            init: function() {
                ajax.getJSON({
                    url: urls.r('member/list.do'),
                    data: pagination.createPageParam({
                        'index': 1,
                        'size': 10
                    }, {
                        'certain': {
                            'name': 'gordon',
                            'age': 20
                        }
                    }, {
                        'field': 'id',
                        'direction': 'asc'
                    }),
                    success: function(response) {
                        if (response && 200 === response.status_code) {
                            var data = response.data;

                            if (!data || data.length <= 0) {

                            } else {
                                member.$holder.memberList.html(template('member-item', {
                                    data: data
                                }));
                            }
                        }
                    }
                });
                member.bindEvent();
            },
            bindEvent: function() {

            },
            $holder: {
                memberList: $("#member_list")
            }
        }


        // init
        page.init();
    });
});
