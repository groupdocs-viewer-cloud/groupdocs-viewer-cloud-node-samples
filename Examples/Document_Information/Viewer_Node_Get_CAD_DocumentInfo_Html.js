"use strict";
class Viewer_Node_Get_CAD_DocumentInfo_Html {
	static Run() {
		var fileName = "sample.DXF";
		var folderName = "viewerdocs";
		var request = new groupdocs_viewer_cloud_1.HtmlGetDocumentInfoRequest(fileName);
		request.folder = folderName;
		viewerApi.htmlGetDocumentInfo(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_CAD_DocumentInfo_Html;