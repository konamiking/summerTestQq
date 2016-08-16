cordova.define("summer-plugin-service.XService", function(require, exports, module) {

        var exec = require('cordova/exec');

        var service = {};

        service.call = function(method, params) {
//               alert('sss');
            var p = {
               "method":method,
               "params":params
            }
            //exec(successCallback, errorCallback, "Camera", "cleanup", []);
            exec(null, null, "XService", "callSync", [p]);
        };

        module.exports = service;

    }
);
