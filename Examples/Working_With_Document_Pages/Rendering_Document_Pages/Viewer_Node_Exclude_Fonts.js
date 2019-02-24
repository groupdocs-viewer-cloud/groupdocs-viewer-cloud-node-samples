"use strict";
class Viewer_Node_Exclude_Fonts {
	static Run() {
		var fileName = "one-page1.docx";
		var folderName = "viewerdocs";
		var htmlOptions = new groupdocs_viewer_cloud_1.HtmlOptions();
		htmlOptions.embedResources = true;
		htmlOptions.excludeFonts = true;
		var request = new groupdocs_viewer_cloud_1.HtmlGetPagesRequest(fileName);
		request.folder = folderName;
		request.htmlOptions = htmlOptions;
		viewerApi.htmlGetPages(request)
			.then(function (result) {
				console.log(result);
			})["catch"](function (error) {
				console.log("Error: " + error.message);
			});
	}
}
module.exports = Viewer_Node_Exclude_Fonts;