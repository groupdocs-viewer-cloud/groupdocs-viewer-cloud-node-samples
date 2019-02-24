"use strict";
exports.__esModule = true;
// load the module
var groupdocs_viewer_cloud_1 = require("groupdocs-viewer-cloud");
// get your appSid and appKey at https://dashboard.groupdocs.cloud (free registration is required).
var appSid = "XXXX-XXXX-XXXXX";
var appKey = "XXXXXXXXXX";
// construct ViewerApi
var viewerApi = groupdocs_viewer_cloud_1.ViewerApi.fromKeys(appSid, appKey);
// retrieve supported file-formats
viewerApi.getSupportedFileFormats()
    .then(function (result) {
    console.log("Supported file-formats:");
    result.formats.forEach(function (format) {
        console.log(format.fileFormat + " (" + format.extension + ")");
    });
})["catch"](function (error) {
    console.log("Error: " + error.message);
});
