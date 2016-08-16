cordova.define("summer-plugin-frame.XFrame", function(require, exports, module) {

        var exec = require('cordova/exec');

        var frame = {};

        frame.showToast = function(content, type) {
            //exec(successCallback, errorCallback, "Camera", "cleanup", []);
            exec(null, null, "XFrame", "showToast", [content,type]);
        };

        frame.openFrame = function(id,position,anim,url,successCallback,errorCallback) {
            exec(successCallback, errorCallback, "XFrame", "openFrame", [id,position,anim,url]);
        };

        frame.closeFrame = function(id,successCallback,errorCallback) {
            exec(successCallback, errorCallback, "XFrame", "closeFrame", [id]);
        };

//        frame.openWindow = function(successCallback,errorCallback,id,params,anim) {
//            alert("openWindow");
//            exec(successCallback, errorCallback, "XFrame", "openWindow", [id,params,anim]);
//        };
        frame.openWin = function(winParam, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "XFrame", "openWin", [winParam]);
        };
        frame.closeWin = function() {
            exec(null, null, "XFrame", "closeWindow", []);
        };
//        frame.closeWindow = function() {
//            exec(null, null, "XFrame", "closeWindow", []);
//        };
        frame.cleanup = function(successCallback, errorCallback) {
            exec(successCallback, errorCallback, "XFrame", "cleanup", []);
        };
        frame.setFrameAttr = function(json, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "XFrame", "setFrameAttr", [json]);
        };
               
        frame.setRefreshHeaderInfo = function(json, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "XFrame", "setRefreshHeaderInfo", [json]);
        };
        frame.refreshHeaderLoadDone = function(json, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "XFrame", "refreshHeaderLoadDone", [json]);
        };
               
        frame.setRefreshFooterInfo = function(json, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "XFrame", "setRefreshFooterInfo", [json]);
        };
        frame.refreshFooterLoadDone = function(json, successCallback, errorCallback) {
            exec(successCallback, errorCallback, "XFrame", "refreshFooterLoadDone", [json]);
        };
               
        //window级别的页面参数，通过openWin打开时的页面参数
        frame.winParam = function(successCallback, errorCallback) {
            exec(successCallback, errorCallback, "XFrame", "winParam", []);
        };
        //Frame级别页面参数，通过openFrame打开时的页面参数
        frame.frameParam = function(successCallback, errorCallback) {
            exec(successCallback, errorCallback, "XFrame", "frameParam", []);
        };
               
        frame.execScript = function(params) {
               exec(null, null, "XFrame", "execScript", [params]);
        };



//        frame.closeFrame = function(id) {
//            exec(null, null, "FrameManager", "closeFrame", [id]);
//        };
        module.exports = frame;

    }
);
