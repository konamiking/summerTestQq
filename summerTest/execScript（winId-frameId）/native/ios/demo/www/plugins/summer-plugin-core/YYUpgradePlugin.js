cordova.define("summer-plugin-core.XUpgrade", function(require, exports, module) {

        var exec = require('cordova/exec');

        var service = {};

        service.checkVer = function(url,successCallback, errorCallback) {
            exec(successCallback, errorCallback, "XUpgrade", "checkVersion", [url]);
        };
               
               service.checkVer = function(url,successCallback, errorCallback) {
               exec(successCallback, errorCallback, "XUpgrade", "upgrade", [url]);
               };

        module.exports = service;

    }
);
