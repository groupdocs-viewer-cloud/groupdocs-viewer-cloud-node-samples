"use strict";
exports.__esModule = true;
// load the module
var groupdocs_viewer_cloud_1 = require("groupdocs-viewer-cloud");
// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
var appSid = "XXXX-XXXX-XXXXX";
var appKey = "XXXXXXXXXX";
// construct ViewerApi
var viewerApi = groupdocs_viewer_cloud_1.ViewerApi.fromKeys(appSid, appKey);
var fileName = "one-page.docx";
var attachmentPassword = "password";
var folder = "viewerdocs";
var pagesRequest = new groupdocs_viewer_cloud_1.HtmlGetPagesRequest(fileName);
pagesRequest.embedResources = true;
pagesRequest.folder = folder;
pagesRequest.startPageNumber = 1;
pagesRequest.countPages = 1;
viewerApi.htmlGetPages(pagesRequest)
    .then(function (result) {
    console.log("Document Pages Processed");
    console.log(result);
    var page = result.pages[0];
    page.resources.forEach(function (resource) {
        var request = new groupdocs_viewer_cloud_1.HtmlGetPageResourceRequest(fileName, page.number, resource.name, folder, "Mystorage");
        viewerApi.htmlGetAttachmentPages(request)
            .then(function (resourceResult) {
            console.log(resourceResult);
        })["catch"](function (error) {
            console.log("Error: " + error.message);
        });
    });
})["catch"](function (error) {
    console.log("Error: " + error.message);
});
