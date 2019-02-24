"use strict";
class Viewer_Node_Get_Pages_HTML {
	static Run() {
		var fileName = "sample.docx";
		var folderName = "viewerdocs";
		var request = new groupdocs_viewer_cloud_1.HtmlGetPagesRequest(fileName);
		request.folder = folderName;
		viewerApi.htmlGetPages(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Pages_HTML;