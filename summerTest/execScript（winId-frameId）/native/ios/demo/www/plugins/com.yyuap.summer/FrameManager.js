cordova.define("summer-plugin-frame.XFrame", function(require, exports, module) {

        var exec = require('cordova/exec');

        var frame = {};

        frame.showToast = function(content, type) {
            //exec(successCallback, errorCallback, "Camera", "cleanup", []);
            exec(null, null, "FrameManager", "showToast", [content,type]);
        };

        frame.openFrame = function(frameParam,successCallback,errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "openFrame", [frameParam]);
        };

        frame.closeFrame = function(frameParam,successCallback,errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "closeFrame", [frameParam]);
        };

        frame.openWindow = function(successCallback,errorCallback,id,params,anim) {
            exec(successCallback, errorCallback, "FrameManager", "openWindow", [id,params,anim]);
        };
        frame.openWin = function(winParam, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "openWin", [winParam]);
        };
        frame.setFrameAttr = function(json, successCallback, errorCallback) {
               alert('ss');
            exec(successCallback, errorCallback, "FrameManager", "setFrameAttr", [json]);
        };
        frame.closeWindow = function() {
            exec(null, null, "FrameManager", "closeWindow", []);
        };

        frame.closeWin = function() {
            exec(null, null, "FrameManager", "closeWin", []);
        };

        frame.getParameter = function(successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "getParameter", []);
        };

        frame.setRefreshHeaderInfo = function(json, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "setRefreshHeaderInfo", [json]);
        };
        frame.refreshHeaderLoadDone = function(json, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "FrameManager", "refreshHeaderLoadDone", [json]);
        };


//        frame.closeFrame = function(id) {
//            exec(null, null, "FrameManager", "closeFrame", [id]);
//        };
        module.exports = frame;

    }
);
