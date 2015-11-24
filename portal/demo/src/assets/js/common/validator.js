define([], function() {
    return {
        isInteger: function(i) {
            return /^\d+$/.test(i);
        },
        /**
         * Check the import url format is right or not
         */
        isUrl: function(url) {
            var reg = new RegExp(
                /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);
            return reg.test(url);
        },
        /**
         * Check the mobile format is right or not
         */
        isPhone: function(phone) {
            return isMobilephone(phone) || isTelphone(phone);
        },
        /**
         * 电话号码判断
         */
        isTelphone: function(phone) {
            var reg = new RegExp(/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/);
            return reg.test(phone);
        },
        /**
         * 手机号码判断
         */
        isMobilephone: function(phone) {
            return /^((13[0-9])|(15[^4,\D])|(18[0,5-9]))\d{8}$/.test(phone);
        },
        /**
         * Check the postcode format is right or not
         */
        isPostcode: function(postcode) {
            var reg = new RegExp(/^[0-9]{6}$/);
            return reg.test(postcode);
        },
        /**
         * Check the email format is right or not
         */
        isEmail: function(email) {
            var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
            return reg.test(email);
        },
        /**
         * Check the date format is right or not
         */
        isDate: function(str) {
            var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                return false;
            }

            var d = new Date(r[1], r[3] - 1, r[4]);

            return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]);
        }
    }
});
