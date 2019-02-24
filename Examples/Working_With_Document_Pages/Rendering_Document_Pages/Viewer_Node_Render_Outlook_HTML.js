"use strict";
exports.__esModule = true;
// load the module
var groupdocs_viewer_cloud_1 = require("groupdocs-viewer-cloud");
// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
var appSid = "XXXX-XXXX-XXXXX";
var appKey = "XXXXXXXXXX";
// construct ViewerApi
var viewerApi = groupdocs_viewer_cloud_1.ViewerApi.fromKeys(appSid, appKey);
var fileName = "data.pst";
var folderName = "viewerdocs";
           
var outlookOptions = new OutlookOptions();
outlookOptions.maxItemsInFolder = 5;

var htmlOptions = new HtmlOptions();
htmlOptions.embedResources = true;
htmlOptions.outlookOptions = outlookOptions;

var request = new HtmlCreatePagesCacheRequest(fileName);
request.folder = folderName;
request.htmlOptions = htmlOptions;
          
viewerApi.htmlCreatePagesCache(request)
    .then(function (result) {
    console.log(result);
})["catch"](function (error) {
    console.log("Error: " + error.message);
});
