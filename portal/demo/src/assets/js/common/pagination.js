define([], function() {
	var _default_pagination_index = 1;
	var _default_pagination_size = 10;
	
	return {
		createPageParam : function(pagination, condition, sort) {
			var data = {

			};
			if(pagination){
				data['pagination.index'] = pagination.index<=0 ? _default_pagination_index : pagination.index,
				data['pagination.size'] = pagination.size<=0 ? _default_pagination_size : pagination.size
			}

			if(condition){
				//TODO
			}

			if(sort){
				//TODO		
			}

			return data;
		}
	};
});