"use strict";
class Viewer_Node_Get_Responsive_HTML_Options {
	static Run() {
		var fileName = "one-page.docx";
		var folderName = "viewerdocs";
		var pageNumber = 1;
		var request = new groupdocs_viewer_cloud_1.HtmlGetPageRequest(fileName, pageNumber);
		request.folder = folderName;
		request.EnableResponsiveRendering = true;
		request.EmbedResources = true;
		viewerApi.htmlGetPage(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Get_Responsive_HTML_Options;