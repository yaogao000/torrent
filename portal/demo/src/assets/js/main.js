var __env = (function() {
    var mode = 'dev';
    var ctxs = {
        'dev': {
            'mode': 'dev',
            'api': 'http://10.128.3.169:4567/api/',
            'static': 'http://10.128.3.169:4568'
        },
        'staging': {
            'mode': 'staging',
            'api': '',
            'static': ''
        },
        'preview': {
            'mode': 'preview',
            'api': '',
            'static': ''
        },
        'production': {
            'mode': 'production',
            'api': '',
            'static': ''
        },
    };
    return ctxs[mode];
})();

require.config({
    config: {
        'common/urls': {
            'mode': __env['mode'],
            'ctx': __env['api']
        },
        'raty': {
            'path': __env['static']
        }
    },
    baseUrl: __env['static'] + '/js',
    paths: {
        'jquery': 'lib/jquery.min',
        'bootstrap': 'lib/bootstrap.min',
        'template': 'lib/template',
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        },
        'template': {
            exports: 'template',
        }
    }
});

require(['jquery', 'bootstrap'], function($, bs) {
    // 设置全局 错误处理 函数
    $.ajaxSettings.error = function(xhr, message, error) {
        // 判断用户请求是否未登录
        if ("403" == xhr.status && '{"code":403,"message":"未登录"}' == xhr.responseText) {
            alert('未登录');
        } else {
            alert(xhr.responseText);
        }
    };

    var scripts = $('script').eq(0).data('start');
    scripts = scripts.split(',');
    require(scripts);
});
