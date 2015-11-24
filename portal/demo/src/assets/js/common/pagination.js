define([], function() {
    var _default_pagination_index = 1;
    var _default_pagination_size = 10;

    return {
        createPageParam: function(pagination, condition, sort) {
            var data = {

            };
            if (pagination) {
                data['pagination.index'] = pagination.index <= 0 ? _default_pagination_index : pagination.index,
                    data['pagination.size'] = pagination.size <= 0 ? _default_pagination_size : pagination.size
            }

            if (condition) {
                if (condition.certain) {
                    for (var pro in condition.certain) {
                        if (!condition.certain.hasOwnProperty(pro)) {
                            continue;
                        }
                        data["condition.certain['" + pro + "']"] = condition.certain[pro];
                    }
                }
                if (condition.fuzzy) {
                    for (var pro in condition.fuzzy) {
                        if (!condition.fuzzy.hasOwnProperty(pro)) {
                            continue;
                        }
                        data["condition.fuzzy['" + pro + "']"] = condition.fuzzy[pro];
                    }
                }
                if (condition.preFuzzy) {
                    for (var pro in condition.preFuzzy) {
                        if (!condition.preFuzzy.hasOwnProperty(pro)) {
                            continue;
                        }
                        data["condition.preFuzzy['" + pro + "']"] = condition.preFuzzy[pro];
                    }
                }
                if (condition.postFuzzy) {
                    for (var pro in condition.postFuzzy) {
                        if (!condition.postFuzzy.hasOwnProperty(pro)) {
                            continue;
                        }
                        data["condition.postFuzzy['" + pro + "']"] = condition.postFuzzy[pro];
                    }
                }
            }

            if (sort && sort.field && (sort.direction == 'asc' || sort.direction == 'desc')) {
                data['sort.field'] = sort.field;
                data['sort.direction'] = sort.direction;
            }

            return data;
        }
    };
});
