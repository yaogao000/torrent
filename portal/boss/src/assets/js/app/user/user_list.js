require(['zepto', 'template', 'common/urls', 'common/ajax', 'common/pagination', 'iscroll'],
function($, template, urls, ajax, pagination, IScroll) {
	// 设置菜单活性
	$(".item.icon_brand").addClass("active");
	
	var _topHeader = $('.top_banner img').height();
	$('#S_ld_cont2').css('top', _topHeader);
	$('#S_ld_nav2').css('top', _topHeader);

	var _sldNav = new IScroll('#S_ld_nav2', { click: true  });
	var _sldCont = new IScroll('#S_ld_cont2', { click: true  });
	$('.brand_list_sidebar').height($(window).height());
	
	var _catId = null;
	
	var init = function() {
		// 加载类目
		loadSecondCategory();
		// 加载更多动作
		addPageHandle();
	};
	// 加载更多动作
	var addPageHandle = function() {
		// 注册内容列表分页按钮操作
		pagination.setPageHandle('comp_page', loadContents);
	}
	// 加载类目
	var loadSecondCategory = function() {
		var url = urls.r('rest/brand/category');
		ajax.getJSON({
			url : url,
			success : function(response) {
				if (response && response.success != false) {
					var categorys = response.data;
					$(categorys).each(function(){
						url = 'brand_list?catId=' + this.id;
						var li = '<li class="sidebar_item" data-cat_id="' + this.id + '"><a href="'+url+'">'+this.name+'</a></li>';
						$("#second_category").append(li);
					});
					
					// 获取是否有指定类目选择选中
					var selectedCatId = urls.v('catId');
					if(selectedCatId != null && selectedCatId != ''){
						var categorys = $("li.sidebar_item");
						categorys.each(function(){
							var catId = $(this).data('cat_id');
							if(selectedCatId == catId){
								$(this).addClass("active");
								_catId = catId;
							}
						});
					}else{
						// 如果没有选中，默认选中第一个
						var category = $("li.sidebar_item").first();
						category.addClass("active");
						var catId = category.data('cat_id');
						_catId = catId;
					}
					// 加载内容列表
					loadContents();
				}
			}
		});
	};
	// 根据类目id获取内容列表
	var loadContents = function(index ,size) {
		var param = pagination.createPageParam(index, size);
		var url = urls.r('rest/brand/category/{0}/content', [_catId]);
		ajax.getJSON({
			url : url,
			data : param,
			success : function(response){
				if (response && response.success != false) {
					// 分页对象
					var page = response.data.pagination;
					// 分页起始页
					var index = page.index;
					// 每页条数
					var size = page.size;
					// 总数
					var count = page.count;

					var contents = response.data.contents;
					$(contents).each(function(){
						var detailUrl = 'brand_detail?contentId=' + this.id;
						var li = '<li class="problem_item"><a href="'+detailUrl+'">'+this.name+'</a></li>';
						$("#content_list").append(li);
					});
					
					// 画分页组件
					pagination.pageComponent('comp_page', count, index, size);
				}
			}
		});
	};
	$("body").on("touchstart", function(){
		_sldCont.refresh();
	});
	
	init();
});