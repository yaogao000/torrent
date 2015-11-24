define(['module'], function(module) {
    var config = module.config();
    var mode = config.mode;
    var ctx = config.ctx;
    var mapping = {
        'defaults': {},
    };
    var current = mapping[mode] || mapping['defaults'];
    return {
        r: function(name, params) {
            var url = current[name] ? ctx + current[name] : ctx + name;
            if (!params) return url;
            for (var i = 0; i < params.length; i++) {
                var origin = '{' + i + '}';
                url = url.replace(origin, params[i]);
            }
            return url;
        },
        v: function(name) {
            var url = window.location.href;
            var reg = new RegExp("(^|&|\\?)" + name + "=([^&]*)(&|$)"),
                r;
            if (r = url.match(reg)) return unescape(r[2]);
            return null;
        }
    };
});
