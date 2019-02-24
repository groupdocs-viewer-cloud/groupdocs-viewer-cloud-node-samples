"use strict";
exports.__esModule = true;
// load the module
var groupdocs_viewer_cloud_1 = require("groupdocs-viewer-cloud");
// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
var appSid = "XXXX-XXXX-XXXXX";
var appKey = "XXXXXXXXXX";
// construct ViewerApi
var viewerApi = groupdocs_viewer_cloud_1.ViewerApi.fromKeys(appSid, appKey);
var fileName = "sample2.mpp";
var projectOptions = new groupdocs_viewer_cloud_1.ProjectOptions();
projectOptions.timeUnit = "Days";
projectOptions.startDate = new Date("2008/07/01");
projectOptions.endDate = new Date("2008/07/31");
var htmlOptions = new groupdocs_viewer_cloud_1.HtmlOptions();
htmlOptions.EmbedResources = true;
htmlOptions.projectOptions = projectOptions;
var request = new groupdocs_viewer_cloud_1.HtmlCreatePagesCacheRequest(fileName);
request.htmlOptions = htmlOptions;
viewerApi.htmlCreatePagesCache(request)
    .then(function (result) {
    console.log(result);
})["catch"](function (error) {
    console.log("Error: " + error.message);
});
