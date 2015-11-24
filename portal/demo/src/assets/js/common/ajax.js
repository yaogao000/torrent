define([], function() {
    return {
        postRaw: function(settings) {
            var data = settings['data'] || {};
            $.ajax({
                url: settings['url'],
                data: JSON.stringify(data),
                type: settings['type'] || 'POST',
                contentType: 'application/json',
                dataType: 'json',
                success: function(response, textStatus, jqXHR) {
                    var successCallback = settings['success'];
                    if (successCallback) {
                        successCallback(response, textStatus, jqXHR);
                    }
                }
            });
        },
        postForm: function(settings) {
            var data = settings['data'] || {};
            $.ajax({
                url: settings['url'],
                data: data,
                type: 'POST',
                dataType: 'json',
                success: function(response, textStatus, jqXHR) {
                    var successCallback = settings['success'];
                    if (successCallback) {
                        successCallback(response, textStatus, jqXHR);
                    }
                }
            });
        },
        getJSON: function(settings) {
            var data = settings['data'];
            var async = settings['async'];
            if (typeof async == 'undefined') {
                async = true;
            }
            $.ajax({
                url: settings['url'],
                data: data,
                cache: settings['cache'] || false,
                async: async,
                dataType: 'json',
                success: function(response, textStatus, jqXHR) {
                    var successCallback = settings['success'];
                    if (successCallback) {
                        successCallback(response, textStatus, jqXHR);
                    }
                }
            });
        }
    }
});
